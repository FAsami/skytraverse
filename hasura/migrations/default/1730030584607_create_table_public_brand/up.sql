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
