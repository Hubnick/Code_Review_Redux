module.exports = function(sequelize, DataKinds) {
var User = sequelize.define("User", {
    cards: {
        //figure out how to properly write id
        id: DataKinds.STRING,
        username: DataKinds.STRING,
        password: DataKinds.STRING,
        category1: DataKinds.BOOLEAN,
        category2: DataKinds.BOOLEAN,
        category3: DataKinds.BOOLEAN,
        category4: DataKinds.BOOLEAN,
        category5: DataKinds.BOOLEAN,
        category6: DataKinds.BOOLEAN

    }
});
return User;
};







    