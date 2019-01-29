//DB is required in this one file
//GetLS simply retrieves DB
const dictDB = require("../data/vocabDB1.json");

//PUT (update/modify)

//DELETE (clear LS completely)
export const clearLS =() => {
    localStorage.clear();
}



//POST (create)
export const setLS = () => {
    let dictDBString = JSON.stringify(dictDB);
    //defaultkey for DB is "dictionaryDB";
    const dbKey = "dictionaryDB";
    localStorage.setItem(dbKey, dictDBString);
}

//GET (read)
export const getLS = () => {
    //retrieves & places LSDB onto variable
    const retrievedDB = localStorage.getItem("dictionaryDB");
    const parsedResult = JSON.parse(retrievedDB);
    // (parsed)
    return parsedResult;
}

export const getPartialLS = (lower, upper) => {
    const retrievedDB = localStorage.getItem("dictionaryDB");
    const parsedResult = JSON.parse(retrievedDB);
    const partialArray = parsedResult.filter((item, idx) => (idx >=lower && idx <=upper));
    return partialArray;
}

export const ctrl = (callback) => {
    // console.log("ctr ran with: ", arguments[0])
    return callback(callback);
};