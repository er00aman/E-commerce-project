const router = require('express').Router()
const admin = require('../admin/adminCon')
const category = require('../category/categoryCon')
const manClothe = require('../Apparel and Accessories/clothes/manClothe/manClotheCon')
const multer = require('multer')

//admin routes
router.post('/admin/login',admin.adminLogin)

//category routes
router.post('/category/add',category.add)
router.post('/category/getAll',category.getAll)
router.post('/category/getSingle',category.getSingle)
router.post('/category/update',category.update)
router.post('/category/block',category.block)

//category-manClothe
const clothStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './server/public/Apparel and Accessories/clothes/manClothe/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
  }
})

const clothUpload = multer({ storage: clothStorage })

router.post('/manClothe/add',clothUpload.single('manClotheImage'),manClothe.add)

module.exports = router