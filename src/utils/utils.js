import dictDB from "../data/vocabDB.json"  //DB is required in this one file


// const fs = require('file-system')
// console.log("fs: ", fs);
/* TODO: https://gist.github.com/bronson/163d7d4dde2a845ea3d6af3a0d86d174 */


//GetLS simply retrieves DB

//PUT (update/modify)


//DELETE (clear LS completely)
export const clearLS =() => {
    localStorage.clear();
}



//POST (create)
const setLS = () => {
    let dictDBString = JSON.stringify(dictDB);
    //defaultkey for DB is "dictionaryDB";
    const dbKey = "dictionaryDB";
    localStorage.setItem(dbKey, dictDBString);
    console.log("utils 'setLS' ran")
}

//GET (read)
const getLS = () => {
    //retrieves & places LSDB onto variable
    const retrievedDB = localStorage.getItem("dictionaryDB");
    const parsedResult = JSON.parse(retrievedDB);
    // (parsed)
    console.log("utils 'getLS' ran")
    return parsedResult;
}

/*
const getPartialLS = (lower, upper) => {
    const retrievedDB = localStorage.getItem("dictionaryDB");
    const parsedResult = JSON.parse(retrievedDB);
    const partialArray = parsedResult.filter((item, idx) => (idx >=lower && idx <=upper));
    // console.log("partialArray: ", partialArray)
    // console.log("is partialArray an Array?: ", Array.isArray(partialArray))
    return partialArray;
}
*/
const utilCtrl = (callback, param1, param2) => {
    // console.log("ctr ran with: ", arguments[0])
    return callback(param1, param2);
};
export {
    utilCtrl,
    getLS,
    setLS,
    // getPartialLS
}

