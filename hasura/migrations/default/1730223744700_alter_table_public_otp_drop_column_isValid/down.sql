alter table "public"."otp" alter column "isValid" set default true;
alter table "public"."otp" alter column "isValid" drop not null;
alter table "public"."otp" add column "isValid" bool;
