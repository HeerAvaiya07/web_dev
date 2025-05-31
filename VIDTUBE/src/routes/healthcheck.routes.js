import { Router } from "express";
import { healthcheck } from "../controller/healthcheck.controllers.js"

const router = Router()

router.route("/").get(healthcheck)
router.route("/test").get(healthcheck)

export default router