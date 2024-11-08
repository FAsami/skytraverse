alter table "booking"."flights" alter column "paymentMethod" drop not null;
alter table "booking"."flights" add column "paymentMethod" text;
