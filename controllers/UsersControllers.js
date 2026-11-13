const user = require("../models/user");

// GET /api/users
const getUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/users/ :id
const getUserbyId = async (req, res) => {
  try {
    const userById = await user.findById(req.params.id);
    res.json(userById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST / api/users/
const createUser = async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /api/users/ :id
const updateUser = async (req, res) => {
  try {
    const updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
      res.json(updatedUser);
    }
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid user id" });
    }
    res.status(400).json({ message: error.message });
  }
};

// DELETE /api/users/:id
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted" });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid user id" });
    }
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, getUserbyId, createUser, updateUser, deleteUser };
