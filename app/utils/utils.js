const dictDB = require ("../data/vocabDB1.json");

export const loadToLS = () => {
    console.log("dictionary loaded!");
    let dictDBString = JSON.stringify(dictDB);
    //defaultkey for DB is "dictionaryDB"
    const dbKey = "dictionaryDB";
    localStorage.setItem(dbKey, dictDBString);
    
}

export const ctrl = (callback) => {
    // var unixEpoc = Date.parse(new Date());
    // return unixEpoc;
    // console.log("ctrl ran ", callback)
    return callback(callback);
};