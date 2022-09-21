// create App function
module.exports = function (app) {
  var userList = require("../controller/userController");

  // userlist Routes

  // request for /user endpoints
  app.route("/addUser").post(userList.createNewUser);
  app.route("/getUser").get(userList.listAllUser);
  app.route("/deleteUser/:id").delete(userList.deleteUser);
};
