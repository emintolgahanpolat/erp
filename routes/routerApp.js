const express=require('express');
const router=express.Router();
const ctrlApp=require('../controller/ctrlApp')

router.get('/',ctrlApp.home);

router.get('/stok',ctrlApp.stok);
router.post('/stok',ctrlApp.stok);



router.get('/tedarikci',ctrlApp.tedarikci);
router.post('/tedarikci',ctrlApp.tedarikci);
router.get('/tedarikciAjax',ctrlApp.tedarikciAjax);

router.get('/urunTasarim',ctrlApp.urunTasarim);
router.post('/urunTasarim',ctrlApp.urunTasarim);
router.get('/stokAjax',ctrlApp.stokAjax);

router.get('/urunImalat',ctrlApp.urunImalat);
router.post('/urunImalat',ctrlApp.urunImalat);
router.get('/urunImalatForm',ctrlApp.urunImalatForm);



router.get('/satinAlma',ctrlApp.satinAlma);
router.post('/satinAlma',ctrlApp.satinAlma);


router.get('/deneme',ctrlApp.deneme);

module.exports=router;
