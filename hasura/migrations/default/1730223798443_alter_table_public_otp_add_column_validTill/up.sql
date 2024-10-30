alter table "public"."otp" add column "validTill" integer
 not null default '300';
