BEGIN TRANSACTION;
ALTER TABLE "payment"."availablePaymentMethods" DROP CONSTRAINT "availablePaymentMethods_pkey";

ALTER TABLE "payment"."availablePaymentMethods"
    ADD CONSTRAINT "availablePaymentMethods_pkey" PRIMARY KEY ("_id");
COMMIT TRANSACTION;
