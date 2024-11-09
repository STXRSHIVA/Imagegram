import  multer from 'multer';
import multers3 from 'multer-s3';
import { AWS_BUCKET_NAME } from './serverConfig.js';
import s3 from './awsConfig.js';

export const uploaderS3 = multer({
    storage: multers3({ 
        s3: s3,
        bucket: AWS_BUCKET_NAME,
        key: function (req, file, cb) {
            console.log(file);
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
            cb(null, file.fieldname + '-' + uniqueSuffix + "." + file.mimetype.split('/')[1])   
        }
    })
});
