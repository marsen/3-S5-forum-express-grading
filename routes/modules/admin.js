const express = require('express')
const router = express.Router()

const adminController = require('../../controllers/admin-controller')
const categoryController = require('../../controllers/category-controller.js')
const upload = require('../../middleware/multer')

// const { authenticatedAdmin } = require('../../middleware/auth')

//! 之後來試試調整上下順序 (教案說只要符合條件就會停，我以前試的狀況好像要 "完全符合")
// router.get('/', (req, res) => res.send('I am so happy'))

// 這裡沒按照功能，而是按照嚴格程度排序，教案怕有萬一 :id 的值剛好等於 'create'
router.get('/restaurants/create', adminController.createRestaurant) // 渲染新增頁面
router.get('/restaurants/:id/edit', adminController.editRestaurant) // 渲染編輯餐廳葉面
router.put('/restaurants/:id', upload.single('image'), adminController.putRestaurant) // 送出編輯餐廳資料
router.get('/restaurants/:id', adminController.getRestaurant) // 渲染單一餐廳細節瀏覽
router.delete('/restaurants/:id', adminController.deleteRestaurant) // 送出刪除單一餐廳訊息
router.patch('/users/:id', adminController.patchUser) // 使用者權限更改 送出
router.get('/users', adminController.getUsers) // 渲染使用者列表
router.get('/restaurants', adminController.getRestaurants) // 渲染餐廳列表
router.post('/restaurants', upload.single('image'), adminController.postRestaurant) // 送出新增餐廳資料

router.get('/categories/:id', categoryController.getCategories) // 開始編輯單一類別資料
router.put('/categories/:id', categoryController.putCategory) // 送出更新類別資料
router.delete('/categories/:id', categoryController.deleteCategory) // 刪除類別資料
router.get('/categories', categoryController.getCategories)
router.post('/categories', categoryController.postCategories) // 送出新增類別資料
// router.get('/', (req, res) => res.redirect('/restaurants'))
router.use('/', (req, res) => res.redirect('/admin/restaurants')) //! 教案說要改成這樣，我先試試上面的

module.exports = router
