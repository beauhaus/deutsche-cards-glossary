// Higher Order Component Pattern

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>INFO COMP</h1>
        <h2>MSG: {props.msg}</h2>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const withAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.authenticated ? <p>Logged in!</p>:
            <p>You must be a robot, please use a human to log in.</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthentication(Info);

ReactDOM.render(<AuthInfo authenticated={false} msg="here are details" />, document.getElementById('app'))
// ReactDOM.render(<AdminInfo isAdmin={true} msg="This is private, yo!" />, document.getElementById('app'))