const multer  = require('multer');
const fs = require('fs');
const path = require('path');
const util = require('util');
const uuidv1 = require('uuid/v1');

const writeFileAsync = util.promisify(fs.writeFile);
// const readFileAsync = util.promisify(fs.readFile); 
const renameFile = util.promisify(fs.rename);
const mimeTypes = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/webp': '.webp',
}

const TEMP_IMAGE_FOLDER = path.join(__dirname, '../../../../', 'public');
const USER_IMAGE_FOLDER = path.join(__dirname, '../../../../', 'public', 'images');
const USER_IMAGES_FOLDER_NAME = '/images/';

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, TEMP_IMAGE_FOLDER)
  },
  filename: (req, file, next) => {
    next(null, file.originalname)
  }
});


const upload = multer({ storage });


const moveImage = (fileObject, id) => {
  const userImagePath =  path.join(USER_IMAGE_FOLDER);

  if (!fs.existsSync(userImagePath)){
    fs.mkdirSync(userImagePath);
  }

  const tempFilePath = path.join(TEMP_IMAGE_FOLDER, fileObject.originalname);
  const newFilePath = path.join(userImagePath, id + mimeTypes[fileObject.mimetype]);

  return renameFile(tempFilePath, newFilePath)
    .then(() => console.log('upload success'))
    .catch((error) => console.log(error))
};


const uploadImages = (req, res) => {
  const fileObject = req.files.gallery;

  console.log('req.files___________________', req.files);
  console.log('body', req.body);
  
  const images = [];
  
  fileObject.forEach((el) => {
    const id = uuidv1();
    images.push( USER_IMAGES_FOLDER_NAME + id + mimeTypes[el.mimetype]);
    moveImage(el, id)
      
  })
    res.json({ status: 'was saved  to: ' +  USER_IMAGES_FOLDER_NAME, images });
};

module.exports = [upload.fields([{ name: 'gallery' }]), uploadImages];
