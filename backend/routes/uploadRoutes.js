import express from 'express'
import multer from 'multer'

import cloudinaryES6 from 'cloudinary'
const cloudinary = cloudinaryES6.v2
import { CloudinaryStorage } from 'multer-storage-cloudinary'

const router = express.Router()

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'shopping-mall', // preferred folder name
    allowed_formats: ['jpeg', 'png', 'jpg'],
  },
})

const upload = multer({ storage })

router.post('/', upload.single('image'), (req, res) => {
  const uploadImageURL = req.file.path // if use upload.array, use req.files instead
  res.send(uploadImageURL)
})

export default router
