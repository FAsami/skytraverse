alter table "public"."otp" add column "tokenType" text
 not null default 'OTP';
