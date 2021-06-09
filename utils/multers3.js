const express = require('express');
const router = express.Router();

const multer = require('multer');
const aws = require('aws-sdk');
const multers3 = require('multer-s3')
const config = require('../config')

aws.config.update(config);
const s3 = new aws.S3({});

const uploadS3 = multer({
    storage: multers3({
      s3: s3,
      acl: 'public-read',
      bucket: 'multer-gumfree-bucket',
      metadata: (req, file, cb) =>{
        cb(null, {fieldName: file.fieldname})
      },
      key: (req, file, cb)=>{
        cb(null, Date.now().toString()+file.originalname)
      }
    })
  })

  router.post('/uploads3', uploadS3.single('product-image'), (req, res, next)=>{
    res.json("File uploaded to s3")
    console.log(req.file);
  })
