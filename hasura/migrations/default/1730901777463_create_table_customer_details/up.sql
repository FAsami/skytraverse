CREATE TABLE "customer"."details" ("id" serial NOT NULL, "firstName" text NOT NULL, "lastName" text NOT NULL, "dataOfBirth" date NOT NULL, "identitiyDocument" jsonb NOT NULL, "userId" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "customer"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_customer_details_updated_at"
BEFORE UPDATE ON "customer"."details"
FOR EACH ROW
EXECUTE PROCEDURE "customer"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_customer_details_updated_at" ON "customer"."details"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
