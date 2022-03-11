import express from "express";

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStatus,
} from "../controllers/jobsController.js";

const router = express.Router()

router.route('/').post(createJob).get(getAllJobs)
router.route('/status').get(showStatus)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router