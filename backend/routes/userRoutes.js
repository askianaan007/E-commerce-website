import express from "express";
import { createUser } from "../controllers/userController.js ";
import {
  loginUser,
  logoutCurrentUser,
  getAllUser,
  getCurrentProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserByID,
  updateUserById
} from "../controllers/userController.js";
import { authenticate, authorized } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(createUser).get(authenticate, authorized, getAllUser);
router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);
router
  .route("/profile")
  .get(authenticate, getCurrentProfile)
  .put(authenticate, updateCurrentUserProfile);

router
  .route("/:id")
  .delete(authenticate, authorized, deleteUserById)
  .get(authenticate, authorized, getUserByID)
  .put(authenticate, authorized, updateUserById);

export default router;
