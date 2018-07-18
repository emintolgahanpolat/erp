DELIMITER //
CREATE PROCEDURE test.StokAzalt(in urunID int)
BEGIN
DECLARE i,j INT DEFAULT 1;
DECLARE urunMiktar, urunTasarimIDm INT;
DECLARE kullanilanim,satirSayisi,hamMaddeMiktar,hamMaddeStokID INT;


SELECT test.Uruns.miktar,test.Uruns.urunTasarimID into urunMiktar, urunTasarimIDm FROM test.Uruns where test.Uruns.id=urunID;


SELECT COUNT(id) into satirSayisi from test.HamMaddes where test.HamMaddes.urunTasarimID=urunTasarimIDm ;

WHILE i <= satirSayisi DO
		SET j=i-1;
		SELECT test.HamMaddes.miktar,test.HamMaddes.stokID into hamMaddeMiktar, hamMaddeStokID FROM test.HamMaddes where test.HamMaddes.urunTasarimID=urunTasarimID Limit j, 1;
        SELECT test.Stoks.kullanilan into kullanilanim From test.Stoks WHERE test.Stoks.id=hamMaddeStokID;
        UPDATE test.Stoks SET kullanilan=kullanilanim+(urunMiktar*hamMaddeMiktar) WHERE test.Stoks.id=hamMaddeStokID;
        SET i=i+1;
END WHILE;


END //
DELIMITER ;


/*call test.StokAzalt(4)*/