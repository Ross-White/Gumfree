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
  module.exports = uploadS3;

  const newItemFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const desc = document.querySelector('#desription').value.trim();
    const qty = document.querySelector('#quantity').value.trim();
    const category = document.querySelector('#category').value.trim();
    const offered = document.querySelector('#offered').value.trim();
    if (title && desc && qty && category && offered) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ title, desc, qty, category, offered }),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);   
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }
}; 

document
  .querySelector("#new-ad-form")
  .addEventListener('submit', newItemFormHandler);

