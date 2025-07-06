import express from 'express';
import {
  loginUser,
  signupUser,
  deleteUser,
  checkPassword,
  updateUser
} from '../controllers/userController.js';

const router = express.Router();

router.get('/login', loginUser);
router.post('/signup', signupUser);
router.post('/delete', deleteUser);
router.post('/check', checkPassword);
router.post('/update', updateUser);

export default router;
