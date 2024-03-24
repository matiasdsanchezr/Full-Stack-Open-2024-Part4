const User = require("../models/user");

const initialBlogs = {};

const nonExistingId = {};

const blogsInDb = {};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
};

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
  usersInDb,
};
