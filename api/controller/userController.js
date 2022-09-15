// import user model
const User = require("../models/userModel");
// define controller functions

// listAllUser function - To list all user
exports.listAllUser = (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

// createNewTodo function - To create new todo
exports.createNewUser = (req, res) => {
  let newUser = new User({
    name: req.body.name,
    dob: req.body.dob,
    gender: req.body.gender,
    qualification: req.body.qualification,
    mobileNumber: req.body.mobileNumber,
    email: req.body.email,
  });
  newUser.save((err, newUser) => {
    if (err) {
      res.status(500).send(err);
    }
    // console.log(newUser);
    res.status(201).json(newUser);
  });
};

// updateTodo function - To update todo status by id
// exports.updateTodo = (req, res) => {
//   Todo.findOneAndUpdate(
//     { _id: req.params.id },
//     req.body,
//     { new: true },
//     (err, todo) => {
//       if (err) {
//         res.status(500).send(err);
//       }
//       res.status(200).json(todo);
//     }
//   );
// };

// deleteUser function - To delete user by id
exports.deleteUser = async (req, res) => {
  let userData = await User.find({ _id: req.params.id });
  if (userData.length > 0) {
    await User.deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        return res.status(404).send(err);
      }
      res.status(200).json({ message: "User successfully deleted" });
    });
  } else {
    res.json({ message: "User not found to delete" });
  }
};
