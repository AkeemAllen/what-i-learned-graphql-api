const User = require("../../models/User");

module.exports = {
  createUser: async ({ userInput }, req) => {
    const user = new User({
      name: userInput.name,
      email: userInput.email,
      password: userInput.password
    });

    return await user.save();
  },
  allUsers: async req => {
    return await User.find();
  }
};
