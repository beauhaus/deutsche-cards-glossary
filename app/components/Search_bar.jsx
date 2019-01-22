var React = require('react')

class SearchBar extends React.Component { 
    searchBarHandleQuery(evt) {
        this.props.onQuery(evt.target.value)  // establishing props
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={this.searchBarHandleQuery.bind(this)} placeholder="Search"/>
            </div>
        )
    }
}

module.exports = SearchBar;