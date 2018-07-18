const models = require('../model');
const Stok = models.Stok;
const Tedarikci = models.Tedarikci;
const HamMadde = models.HamMadde;
const UrunTasarim = models.UrunTasarim;
const Urun = models.Urun;
const SatinAlma = models.SatinAlma;
const SiparisHamMadde = models.SiparisHamMadde;
module.exports.home = function (req, res) {

    res.render('index',{layout:'layout'});

}



module.exports.stok = function (req, res) {

    if (req.method === 'GET') {
        Stok.findAll({
            include: [{ model: Tedarikci}]
        }).then((results) => {
            res.render('tablo/stok', {layout: 'layout',results:results});
    })

    }
    if (req.method === 'POST') {
        var post = req.body;
        console.log(post)
        Stok.create({
            ad: post.ad,
            miktar: post.miktar,
            birimFiyat: post.birimFiyat,
            TedarikciId:post.tedarikciID
        }).then((results) => {
            res.redirect("/stok");
    }).catch((err) => {
            res.render('error', err);
    })


    }
}

module.exports.tedarikci = function (req, res) {

    if (req.method === 'GET') {
        Tedarikci.findAll()
            .then((results) => {
            res.render('tablo/tedarikci', {layout: 'layout',results:results});
    })

    }
    if (req.method === 'POST') {
        var post = req.body;
        console.log(post)

        Tedarikci.create({
            ad: post.ad,
            tel: post.tel,
            mail: post.mail
        }).then((tedarikci) => {
            res.redirect("/tedarikci");
    }).catch((err) => {
            res.render('error', err);
    })


    }
}
module.exports.tedarikciAjax = function (req, res) {

    if (req.method === 'GET') {
        Tedarikci.findAll()
            .then((results) => {
            res.end(JSON.stringify(results));
    })

    }
}

module.exports.satinAlma = function (req, res) {

    if (req.method === 'GET') {
        SatinAlma.findAll({
            include: [{model: SiparisHamMadde, include: [Stok]},{ model: Tedarikci}]
        }).then((results) => {
            res.render('tablo/satinalma', {layout: 'layout',results:results});
    })

    }
    if (req.method === 'POST') {
        var post = req.body;
        console.log(post)

        SatinAlma.create({
            ad:post.aciklama,
            TedarikciId:post.tedarikciID
        }).then((results) => {
            for(var i=0;i<post.hamMaddeBirimIDs.length;i++){
            SiparisHamMadde.create(
                {StokId:post.hamMaddeBirimIDs[i], miktar:post.hamMaddeAdet[i], SatinAlmaId:results.id}
            ).then((mm)=> {
                res.redirect('/satinAlma')
        })
        }

    }).catch((err) => {
            res.render('error', err);
    })


    }
}

module.exports.urunTasarim = function (req, res) {
    if (req.method === 'GET') {


        UrunTasarim.findAll({
            include: [{model: HamMadde, include: [Stok]}]
        }).then((results) => {
            res.render('tablo/urunTasarim', {layout: 'layout',results:results});
    })


    }
    if (req.method === 'POST'){
        var post = req.body;
        console.log(post)
        UrunTasarim.create({
           ad:post.ad
        }).then((results) => {
            for(var i=0;i<post.hamMaddeBirimIDs.length;i++){
            HamMadde.create(
                {StokId:post.hamMaddeBirimIDs[i], miktar:post.hamMaddeAdet[i], UrunTasarimId:results.id}
            ).then((mm)=> {
                res.redirect('urunTasarim')
            })
        }

    }).catch((err) => {
            res.render('error', err);
    })


    }
}
module.exports.stokAjax = function (req, res) {

    if (req.method === 'GET') {
        Stok.findAll()
            .then((results) => {
            res.end(JSON.stringify(results));
    })

    }
}



module.exports.urunImalat = function (req, res) {
    if (req.method === 'GET') {

        Urun.findAll({
            include: [{model: UrunTasarim, include: [{model: HamMadde, include: [Stok]}]}]
        })
            .then((results) => {

            res.render('tablo/urunImalat', {layout: 'layout',results:results});
    })


    }
    if (req.method === 'POST'){
        var post = req.body;
        console.log(post);

        Urun.create({
            miktar: post.miktar,
            karOrani: post.karOrani,
            UrunTasarimId:post.urunTasarimID
        }).then((results) => {
            res.redirect("/urunImalat");
    }).catch((err) => {
            res.render('error', err);
    })

    }
}
module.exports.urunImalatForm = function (req, res) {
    if (req.method === 'GET') {


        UrunTasarim.findAll({
            include: [{model: HamMadde, include: [Stok]}]
        })
            .then((results) => {
            res.render('form/urunImalat', {layout: 'layout',results:results});
    })


    }
    if (req.method === 'POST'){
        var post = req.body;
        console.log(post);
        Urun.create({
            adet: post.adet,
            uretimSuresi:post.uretimSuresi,
            fiyat: post.fiyat,
            UrunTasarimID:post.urunTasarimID
        }).then((user) => {
            res.redirect("/urun");
    }).catch((err) => {
            res.render('error', err);
    })

    }
}

module.exports.deneme=function (req,res) {


    sequelize.query('CALL test.StokAzalt(12);');
    console.log("sacdgtr")
    res.redirect('/')
}




module.exports.hamMaddeBirimAjax = function (req, res) {

    if (req.method === 'GET') {
        var id = req.params.urunTasarimID;
        HamMaddeBirim.findAll({ where: {UrunTasarimID: id}, include: [{ model: HamMadde}]} )
            .then((results) => {
            res.end(JSON.stringify(results));
    })

    }
}
module.exports.urunAjax = function (req, res) {
    if (req.method === 'GET') {


        Urun.findAll({ include: [{ model: UrunTasarim}]})
            .then((uruns) => {
            res.end(JSON.stringify(uruns));
    })
    }
}
module.exports.urunBirimAjax = function (req, res) {
    if (req.method === 'GET') {

        var id = req.params.urunTasarimID;


        UrunBirim.findAll({ where: {UrunTasarimID: id},include: [{ model: Urun}] })
            .then((results) => {
            res.end(JSON.stringify(results));
    })
    }
}
module.exports.urunTasarimAjax = function (req, res) {
    if (req.method === 'GET') {

        UrunTasarim.findAll()
            .then((urunTasarims) => {
            res.end(JSON.stringify(urunTasarims));
    })

    }
}





