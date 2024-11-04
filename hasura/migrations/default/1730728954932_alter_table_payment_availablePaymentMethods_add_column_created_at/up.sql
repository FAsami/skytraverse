alter table "payment"."availablePaymentMethods" add column "created_at" timestamptz
 null default now();
