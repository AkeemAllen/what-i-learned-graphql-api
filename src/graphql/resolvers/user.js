const User = require("../../models/User");

module.exports = {
  createUser: async ({ userInput }, req) => {
    const user = new User({
      name: userInput.name,
      email: userInput.email,
      password: userInput.password
    });

    const savedUser = await user.save();
    return { ...savedUser };
  },
  allUsers: async ({ email }, req) => {
    return await User.find();
  }
};
