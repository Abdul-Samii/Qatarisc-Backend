import express from 'express';
import { CreatePost, GetPost } from '../controllers';
const router = express.Router();

router.post('/post',CreatePost);
router.get('/post',GetPost);

export {router as UserRoute};