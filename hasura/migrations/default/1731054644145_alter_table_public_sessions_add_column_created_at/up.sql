alter table "public"."sessions" add column "created_at" timestamptz
 null default now();
