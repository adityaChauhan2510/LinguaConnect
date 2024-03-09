import express from "express";
import { addCourse, enrollCourse,getCourseData,getAllCourse,addRating,addReview } from "../controller/course.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/add",isAuthenticated, addCourse);//tutor will add
router.post("/enroll",isAuthenticated, enrollCourse);// user will enroll
router.get("/getAll",getAllCourse)
router.post("/rate",addRating)
router.post("/review",addReview)
router.get("/:id", getCourseData);// user will enroll





// router.post("/update", isAuthenticated,editProfile)

// router.get("/logout", logout);

// router.get("/me", isAuthenticated, getMyProfile);
// router.get("/:id",getProfile)

export default router;