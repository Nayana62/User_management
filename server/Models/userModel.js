import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: String,
  email: String,
  phone: String,
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
