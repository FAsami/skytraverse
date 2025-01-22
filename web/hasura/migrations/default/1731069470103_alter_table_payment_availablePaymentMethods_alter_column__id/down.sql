alter table "payment"."availablePaymentMethods" rename column "id" to "_id";
ALTER TABLE "payment"."availablePaymentMethods" ALTER COLUMN "_id" TYPE integer;
