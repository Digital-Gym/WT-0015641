const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const createGoal = require('../../services/users/create');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "..", "..", 'public', 'images')); // Set the destination folder for uploaded images
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}${ext}`;
        cb(null, filename);

        // calls a function after we upload an image
        createGoal(req, filename);
    },
});

const upload = multer({ storage });

// Middleware to handle file uploads for the specific route
router.post('/', upload.single('image'), async (req, res) => {
    res.json({ success: true, message: 'File uploaded successfully' });
});

module.exports = router;