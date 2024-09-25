import express from 'express';
import { getProfile, updateProfile } from '../controllers/profileController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, getProfile);
router.put('/', verifyToken, updateProfile);

export default router;
