alter table "payment"."transactions" alter column "paymentProviderId" drop not null;
alter table "payment"."transactions" add column "paymentProviderId" int4;
