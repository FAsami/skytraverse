alter table "payment"."availablePaymentMethods" alter column "id" drop not null;
alter table "payment"."availablePaymentMethods" add column "id" text;
