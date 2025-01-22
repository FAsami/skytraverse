ALTER TABLE "payment"."availablePaymentMethods" ALTER COLUMN "_id" TYPE integer;
alter table "payment"."availablePaymentMethods" rename column "_id" to "id";
