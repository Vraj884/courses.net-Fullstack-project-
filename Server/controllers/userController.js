import { User } from '../models/User.model.js';
import { send } from '../utils/mail.js';

// Login
export const loginUser = async (req, res) => {
  try {
    const data = await User.findOne({ email: req.query.username });

    if (data && req.query.password === data.password) {
      const userobj = {
        IsLoggedIn: true,
        Username: req.query.username,
        Name: data.fullName
      };
      send(userobj.Username, `Account logged in\nTime: ${new Date()}`);
      res.send({ isUser: true, userdata: userobj });
    } else {
      send(req.query.username, `Login attempt failed\nTime: ${new Date()}`);
      res.send({ isUser: false });
    }
  } catch (e) {
    console.log(e.message);
    res.send({ isUser: false });
  }
};

// Signup
export const signupUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const UserData = new User({ fullName, email, password });
    await UserData.save();
    send(email, "Account successfully created");
    res.send({ fullName, email, validData: true });
  } catch (e) {
    console.log(e.message);
    res.send({ validData: false });
  }
};

// Delete
export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ email: req.body.Username });
    res.send({ deleted: true });
  } catch (e) {
    console.log(e.message);
    res.send({ deleted: false });
  }
};

// Check
export const checkPassword = async (req, res) => {
  try {
    const data = await User.findOne({ email: req.body.Username });
    const correct = data && data.password === req.body.password;
    res.send({ correct });
  } catch (e) {
    console.log(e.message);
    res.send({ correct: false });
  }
};

// Update
export const updateUser = async (req, res) => {
  const { old, Username, Name } = req.body;
  try {
    await User.updateOne({ email: old }, { email: Username, fullName: Name });
    const updatedData = await User.findOne({ email: Username });
    res.send({
      updated: true,
      UserData: {
        IsLoggedIn: true,
        Username,
        Name
      }
    });
  } catch (e) {
    console.log(e.message);
    res.send({ updated: false });
  }
};
