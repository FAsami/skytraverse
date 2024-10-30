alter table "public"."otp" alter column "expires" drop not null;
alter table "public"."otp" add column "expires" timestamptz;
