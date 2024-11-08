CREATE TABLE "payment"."transactionLogs" ("id" serial NOT NULL, "transactionId" serial NOT NULL, "status" text NOT NULL DEFAULT 'PENDING', "details" jsonb NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "payment"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_payment_transactionLogs_updated_at"
BEFORE UPDATE ON "payment"."transactionLogs"
FOR EACH ROW
EXECUTE PROCEDURE "payment"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_payment_transactionLogs_updated_at" ON "payment"."transactionLogs"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
