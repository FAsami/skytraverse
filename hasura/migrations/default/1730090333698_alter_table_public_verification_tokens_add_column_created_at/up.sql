alter table "public"."verification_tokens" add column "created_at" timestamptz
 null default now();
