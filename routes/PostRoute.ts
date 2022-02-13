import express from 'express';
import { CreatePost } from '../controllers';
const router = express.Router();

router.post('/new',CreatePost);

export {router as PostRoute};