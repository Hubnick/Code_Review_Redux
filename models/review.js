module.exports = function(sequelize, DataKinds) {
var Html = sequelize.define("Html", {
    cards: {
        //figure out how to properly write id
        id: DataKinds.STRING,
        question: DataKinds.STRING,
        answer: DataKinds.STRING,
    }
    
});
return Html;
};

module.exports = function(sequelize, DataKinds) {
var Api = sequelize.define("Api", {
    cards: {
        id: DataKinds.STRING,
        question: DataKinds.STRING,
        answer: DataKinds.STRING
    }
});
return API;
};

module.exports = function(sequelize, DataKinds) {
var Css = sequelize.define("Css", {
    cards: {
        //figure out how to properly write id
        id: DataKinds.STRING,
        question: DataKinds.STRING,
        answer: DataKinds.STRING
    }
});
return Css;
};

module.exports = function(sequelize, DataKinds) {
var Git = sequelize.define("Git", {
    cards: {
        id: DataKinds.STRING,
        question: DataKinds.STRING,
        answer: DataKinds.STRING
    }
});
return Git;
};

module.exports = function(sequelize, DataKinds) {
var JavaScript = sequelize.define("JavaScript", {
    cards: {
        //figure out how to properly write id
        id: DataKinds.STRING,
        question: DataKinds.STRING,
        answer: DataKinds.STRING
    }
});
return JavaScript;
};

module.exports = function(sequelize, DataKinds) {
var JQuery = sequelize.define("JQuery", {
    cards: {
        id: DataKinds.STRING,
        question: DataKinds.STRING,
        answer: DataKinds.STRING
    }
});
return JQuery;
//please help

};


    