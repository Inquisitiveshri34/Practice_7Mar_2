import {Router} from "express";
import {setupUser,checkRefreshToken,profileController } from "../controllers/user.controller.js"
import {authUser} from "../middlewares/auth.middleware.js"


const router = Router()

router.route("/auth").post(
    setupUser
)

router.route("/refresh-token").get(
    checkRefreshToken
)
router.route("/profile").get(
    authUser,
    profileController
)

export default router;