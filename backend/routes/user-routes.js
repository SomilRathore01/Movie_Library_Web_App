import express from "express";
import { deleteUser, getAllUsers, getPlaylistsOfUser, getUserById, login, signup, updateUser } from "../controllers/user-controller.js";
// import { allPlaylists } from "../controllers/playlist-controller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);
userRouter.put("/:id", updateUser);
userRouter.get("/:id", getUserById);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);
userRouter.get("/playlists/:id", getPlaylistsOfUser);

export default userRouter;