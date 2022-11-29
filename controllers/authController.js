const userModel = require('../model/user');
const bcrypt = require('bcrypt');
const { model } = require('mongoose');

class userController {
  static userRegistration = async (req, res) => {
    const { username, email, password, confirm_password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (user) {
      res.send({ status: 'failed', message: 'You are already registered' });
    } else {
      if (username && email && password && confirm_password) {
        if (password === confirm_password) {
          try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const Doc = new userModel({
              username: username,
              email: email,
              password: hashPassword,
            });
            const user = await Doc.save();
            // res.send({ status: 'success', message: 'Acount registerd' });
            res.status(200).json(user);
           
          } catch (error) {
            res.send({ status: 'failed', message: 'User unable to register' });
          }
        } else {
          res.send({
            status: 'failed',
            message: "Password and confirm password doesn't match",
          });
        }
      } else {
        res.send({ status: 'All fileds are required' });
      }
    }
  };

  ///////////////////// login ///////////////////

  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user = await userModel.findOne({ email: email });
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password);
          if (user.email === email && isMatch) {
            const {password,...others} = user._doc;
            res.status(200).json(others);
          } else {
            res.send({
              status: 'failed',
              message: 'Email or Password is not Valid',
            });
          }
        } else {
          res.send({
            status: 'failed',
            message: 'You are not a Registered User',
          });
        }
      } else {
        res.send({ status: 'failed', message: 'All Fields are Required' });
      }
    } catch (error) {
      console.log(error);
      res.send({ status: 'failed', message: 'Unable to Login' });
    }
  };
}

module.exports = userController;
