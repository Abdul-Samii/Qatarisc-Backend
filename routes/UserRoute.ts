import express,{Response} from 'express';
import { CreatePost, GetPost, Test } from '../controllers';
import { uploadImage } from '../middlewares/ImageUpload';
const router = express.Router();

router.post('/post',uploadImage,CreatePost);
router.get('/post',GetPost);
router.get('/test',Test)
export {router as UserRoute};