DELIMITER //
CREATE TRIGGER `test`.`trg_stokAzalt` AFTER  INSERT ON  `test`.`Uruns`
FOR EACH ROW
BEGIN
SET @idm=new.id;
CALL test.StokAzalt(@idm);
END;
DELIMITER ;





