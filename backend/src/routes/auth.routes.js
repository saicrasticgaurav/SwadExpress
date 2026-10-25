
import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { registerUser, loginUser,getCurrentUser,logoutUser} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/me", protect, getCurrentUser);
router.post("/logout", logoutUser);



export default router;
