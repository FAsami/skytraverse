alter table "payment"."availablePaymentMethods" drop constraint "availablePaymentMethods_pkey";
alter table "payment"."availablePaymentMethods"
    add constraint "availablePaymentMethods_pkey"
    primary key ("id");
