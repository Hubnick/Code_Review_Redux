// var bcrypt = require("bcrypt-nodejs");
// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define("User", {
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: true
//       }
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   });
//   User.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
//   };
//   User.hook("beforeCreate", function(user) {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//   });
//   return User;
// };

// module.exports = function(sequelize, DataKinds) {
// var User = sequelize.define("User", {
//     cards: {
//         //figure out how to properly write id
//         id: DataKinds.STRING,
//         username: DataKinds.STRING,
//         password: DataKinds.STRING,
//         category1: DataKinds.BOOLEAN,
//         category2: DataKinds.BOOLEAN,
//         category3: DataKinds.BOOLEAN,
//         category4: DataKinds.BOOLEAN,
//         category5: DataKinds.BOOLEAN,
//         category6: DataKinds.BOOLEAN

//     }
// });
// return User;
// };







    