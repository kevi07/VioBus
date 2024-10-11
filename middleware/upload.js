const multer = require('multer');
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }
});
const uploadMiddleware = upload.single('file_upload');
module.exports = (req, res, next) => {
    uploadMiddleware(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(400).send(err.message);
        } else if (err) {
            return res.status(500).send(err.message);
        }
        if (req.file) {
            req.body.file_upload = req.file.buffer;   
            req.body.file_type = req.file.mimetype;  
        }
        next();
    });
};
