alter table "public"."users" add constraint "email_phone_not_both_null" check (email IS NOT NULL OR phone IS NOT NULL);
