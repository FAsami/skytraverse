
CREATE TABLE "public"."brand" ("id" serial NOT NULL, "title" text NOT NULL, "logo" jsonb, "metaData" jsonb, "phone" text NOT NULL, "email" text NOT NULL, "location" text, "updated_at" timestamptz NOT NULL DEFAULT now(), "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("phone", "email"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_brand_updated_at"
BEFORE UPDATE ON "public"."brand"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_brand_updated_at" ON "public"."brand"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE accounts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at integer,
    token_type text,
    scope text,
    id_token text,
    session_state text,
    "userId" uuid NOT NULL
);
 
CREATE TABLE sessions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "sessionToken" text NOT NULL,
    "userId" uuid NOT NULL,
    expires timestamptz NOT NULL
);
 
CREATE TABLE users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text,
    email text NOT NULL,
    "emailVerified" timestamptz,
    image text
);
 
CREATE TABLE verification_tokens (
    token text NOT NULL,
    identifier text NOT NULL,
    expires timestamptz NOT NULL
);
 
CREATE TABLE provider_type (
    value text NOT NULL
);
 
ALTER TABLE ONLY accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
 
ALTER TABLE ONLY sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY ("sessionToken");
 
ALTER TABLE ONLY users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 
ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 
ALTER TABLE ONLY verification_tokens
    ADD CONSTRAINT verification_tokens_pkey PRIMARY KEY (token);
 
ALTER TABLE ONLY provider_type
    ADD CONSTRAINT provider_type_pkey PRIMARY KEY (value);
 
ALTER TABLE ONLY accounts
    ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE CASCADE;
 
ALTER TABLE ONLY sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE CASCADE;
 
INSERT INTO provider_type (value) VALUES ('credentials'), ('email'), ('oauth'), ('oidc');
 
ALTER TABLE ONLY accounts
    ADD CONSTRAINT "accounts_type_fkey" FOREIGN KEY ("type") REFERENCES public.provider_type(value) ON UPDATE RESTRICT ON DELETE RESTRICT;

alter table "public"."users" add column "password" text
 null;

alter table "public"."users" add column "phone" text
 null;

alter table "public"."users" add column "phoneVerified" timestamptz
 null;

alter table "public"."users" add column "created_at" timestamptz
 null default now();

alter table "public"."users" add column "updated_at" timestamptz
 null default now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_users_updated_at"
BEFORE UPDATE ON "public"."users"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_users_updated_at" ON "public"."users"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

alter table "public"."sessions" add column "updated_at" timestamptz
 null default now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_sessions_updated_at"
BEFORE UPDATE ON "public"."sessions"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_sessions_updated_at" ON "public"."sessions"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

alter table "public"."sessions" add column "created_at" timestamptz
 null default now();

alter table "public"."verification_tokens" add column "created_at" timestamptz
 null default now();

alter table "public"."verification_tokens" add column "updated_at" timestamptz
 null default now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_verification_tokens_updated_at"
BEFORE UPDATE ON "public"."verification_tokens"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_verification_tokens_updated_at" ON "public"."verification_tokens"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

alter table "public"."provider_type" add column "updated_at" timestamptz
 null default now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_provider_type_updated_at"
BEFORE UPDATE ON "public"."provider_type"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_provider_type_updated_at" ON "public"."provider_type"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

alter table "public"."provider_type" add column "created_at" timestamptz
 null default now();

alter table "public"."accounts" add column "updated_at" timestamptz
 null default now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_accounts_updated_at"
BEFORE UPDATE ON "public"."accounts"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_accounts_updated_at" ON "public"."accounts"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

alter table "public"."accounts" add column "created_at" timestamptz
 null default now();

alter table "public"."users" alter column "email" drop not null;

alter table "public"."users" add constraint "email_phone_not_both_null" check (email IS NOT NULL OR phone IS NOT NULL);

CREATE TABLE "public"."otp" ("id" serial NOT NULL, "userId" uuid NOT NULL, "token" text NOT NULL, "updated_at" timestamptz NOT NULL DEFAULT now(), "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_otp_updated_at"
BEFORE UPDATE ON "public"."otp"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_otp_updated_at" ON "public"."otp"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

alter table "public"."otp" add column "expires" timestamptz
 not null;

alter table "public"."otp" add column "isValid" boolean
 not null default 'true';

alter table "public"."otp" drop column "isValid" cascade;

alter table "public"."otp" drop column "expires" cascade;

alter table "public"."otp" add column "validTill" integer
 not null default '300';

CREATE OR REPLACE FUNCTION public."isOtpValid"(r public.otp)
 RETURNS boolean
 LANGUAGE plpgsql
 STABLE
AS $function$
DECLARE
    diff int;
BEGIN
    SELECT EXTRACT(EPOCH FROM (now() - r.updated_at)) INTO diff;
    IF r."validTill" > diff THEN
        return true;
    ELSE
        return false;
    END IF;
END;
$function$;

alter table "public"."otp" add column "tokenType" text
 not null default 'OTP';
