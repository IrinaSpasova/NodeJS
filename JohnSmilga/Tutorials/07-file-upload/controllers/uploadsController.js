const path = require('path');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const cloudinary = require('cloudinary').v2 //!!!!!!
//remove temp files:
const fs = require('fs');

const uploadProductImageLocal = async (req,res) => {
    // check if file exist
    //check format
    //check size

    // test: console.log(req.files);
if(!req.files){
    throw new CustomError.BadRequestError('No File Uploaded!');
}
    //test: console.log(req.files);
    let productImage = req.files.image;

if(!productImage.mimetype.startsWith('image')){
    throw new CustomError.BadRequestError('Please Upload Image');
}

const maxSize = 1024*1024;
if(productImage.size > maxSize){
    throw new CustomError.BadRequestError('Please upload image smaller then 1 MB');
}

    const imagePath = path.join(__dirname,'../public/uploads/'+`${productImage.name}`);
await productImage.mv(imagePath);
   // test res.send('upload product image');
   return res
   .status(StatusCodes.OK)
   .json({image:{src:`/uploads/${productImage.name}`}})
};


// the same function but for the cloud:
const uploadProductImage = async(req,res) =>{
    // test console.log(req.files.image);

const result = await cloudinary.uploader.upload(req.files.image.tempFilePath,{
    use_filename:true,
    // we hawe to make empty folder in cloudinery!
    folder:'07-File-Images-Upload-Smilga',

});
// test console.log(result);

fs.unlinkSync(req.files.image.tempFilePath);

return res.status(StatusCodes.OK).json({image:{src:result.secure_url}});
}

module.exports = {
    uploadProductImage
}