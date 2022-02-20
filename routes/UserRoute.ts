import express,{Response} from 'express';
import { CommentPost, CreatePost, GetPost, LikeComment, LikePost, RegisterUser, Test } from '../controllers';
import { uploadImage } from '../middlewares/ImageUpload';
const router = express.Router();

router.post('/post',CreatePost);
router.get('/post',GetPost);
router.get('/test',Test);
router.post('/register',RegisterUser);
router.post('/likepost',LikePost);
router.post('/comment',CommentPost);
router.post('/likecomment',LikeComment);
export {router as UserRoute};