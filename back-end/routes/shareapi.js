const express=require('express');
const router=express.Router();
const {getShare,createShare,updateShare,deleteShare, getShareById}=require('../controllers/shareInfo');
const {protect,isAdmin}=require('../middleware/authMiddelware');
const upload = require('../middleware/upload');
router.get('/',protect,getShare);
router.get('/edit_shareholder/:id',protect,getShareById);
// router.get('/shareholder_details/:id',protect,getShareById);
router.post('/',protect,createShare);
router.put('/:email',protect,updateShare);
router.delete('/:id',deleteShare);
module.exports=router;
