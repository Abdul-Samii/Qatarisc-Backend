import express from 'express';
import multer from 'multer';

const router = express.Router();

const imageStorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'images')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'_'+file.originalname)
    }
})

export const uploadImage = multer({storage:imageStorage}).array('images',10);
