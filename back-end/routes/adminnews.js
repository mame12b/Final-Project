const express=require('express');
const router=express.Router();
const {protect,isAdmin}=require('../middleware/authMiddelware');
const { createAdminNews, getAdminNews, deleteNews } = require('../controllers/adminnews');
const upload = require('../middleware/upload');
router.post('/',upload.single('image'),createAdminNews)
router.get('/',getAdminNews)
// router.get('/',protect,isAdmin,getAdminNews)
// router.put('/',updateNews)
router.delete('/:id',deleteNews)
module.exports=router;