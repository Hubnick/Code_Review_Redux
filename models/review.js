module.exports = function(sequelize, DataKinds) {
var Html = sequelize.define("Html", {
    cards: {
        //figure out how to properly write id
        id: DataKinds.STRING,
        question: DataKinds.STRING,
        answer: DataKinds.STRING,
    }
});
var Api = sequelize.define("Api", {
    cards: {
        id: DataKinds.STRING,
        question: DataKinds.STRING,
        answer: DataKinds.STRING
    }
});

var Css = sequelize.define("Css", {
    cards: {
        //figure out how to properly write id
        id: DataKinds.STRING,
        question: DataKinds.STRING,
        answer: DataKinds.STRING
    }
});

var Git = sequelize.define("Git", {
    cards: {
        id: DataKinds.STRING,
        question: DataKinds.STRING,
        answer: DataKinds.STRING
    }
});

var JavaScript = sequelize.define("JavaScript", {
    cards: {
        //figure out how to properly write id
        id: DataKinds.STRING,
        question: DataKinds.STRING,
        answer: DataKinds.STRING
    }
});
var JQuery = sequelize.define("JQuery", {
    cards: {
        id: DataKinds.STRING,
        question: DataKinds.STRING,
        answer: DataKinds.STRING
    }
});

};


    