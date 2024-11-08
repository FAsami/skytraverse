CREATE TABLE "public"."otp" ("id" serial NOT NULL, "userId" uuid NOT NULL, "token" text NOT NULL, "validTill" integer NOT NULL DEFAULT 300, "tokenType" text NOT NULL DEFAULT 'OTP', "updated_at" timestamptz NOT NULL DEFAULT now(), "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
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
