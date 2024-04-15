import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, '../public/uploads')
    }, 
    filename: function(req,file, cb){
        cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
    }
});

const uploads = multer({storage: storage})

export default uploads;