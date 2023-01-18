const User = require("../model/User");

const createUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(404)
      .json({ message: !username ? "enter username" : "enter password" });
  const duplicate = await User.findOne({ username });
  if (duplicate)
    return res.status(404).json({ message: "username already exist" });
};

module.exports = { createUser };
