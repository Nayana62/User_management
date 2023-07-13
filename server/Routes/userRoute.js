import express from "express";
import { createNewUser, deleteUser, getAllUsers, getUser, updateUser } from "../Controller/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createNewUser);
router.get("/:id", getUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;