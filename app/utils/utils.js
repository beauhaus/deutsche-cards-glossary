const dictDB = require ("../data/vocabDB1.json");

export const getLS= () => {
    //retrieves & places LSDB onto variable
    const retrievedDB = localStorage.getItem("dictionaryDB");
    // (parsed)
    return JSON.parse(retrievedDB);
}

export const setLS = () => {
    console.log("dictionary loaded!");
    let dictDBString = JSON.stringify(dictDB);
    //defaultkey for DB is "dictionaryDB";
    const dbKey = "dictionaryDB";
    localStorage.setItem(dbKey, dictDBString);
}

export const ctrl = (callback) => {
    return callback(callback);
};