import UserModel from "../Models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    let users = await UserModel.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createNewUser = async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    const user = await newUser.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json("user does not exist");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await UserModel.findByIdAndDelete(id);
    res.status(200).json("User deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
