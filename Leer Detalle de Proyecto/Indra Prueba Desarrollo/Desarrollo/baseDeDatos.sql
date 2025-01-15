select * 
from GCCC_CUSTOMER_TYPE custumer
inner join GCCD_RELATIONSHIP relation on custumer.COD_DEVELOP = relation.CUSTOMER_TYPE
inner join GCCOM_PAYMENT_FORM payment on payment.ID_CUSTOMER = relation.COD_CUSTOMER
inner join GCCOM_CONTRACTED_SERVICE Contservice on Contservice.ID_PAYMENT_FORM = payment.ID_PAYMENT_FORM
inner join GCCOM_SECTOR_SUPPLY sector on sector.ID_SECTOR_SUPPLY = Contservice.ID_SECTOR_SUPPLY
where custumer.NAME_TYPE like 'Commercial' and custumer.UPDATE_DATE < getdate()