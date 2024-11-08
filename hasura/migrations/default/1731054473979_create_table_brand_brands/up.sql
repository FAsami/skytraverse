CREATE TABLE "brand"."brands" ("id" serial NOT NULL, "identifier" text NOT NULL, "title" text NOT NULL, "logo" jsonb, "metaData" jsonb, "phone" text NOT NULL, "email" text NOT NULL, "location" text, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "brand"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_brand_brands_updated_at"
BEFORE UPDATE ON "brand"."brands"
FOR EACH ROW
EXECUTE PROCEDURE "brand"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_brand_brands_updated_at" ON "brand"."brands"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
