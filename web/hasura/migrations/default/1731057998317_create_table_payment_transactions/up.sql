CREATE TABLE "payment"."transactions" ("id" serial NOT NULL, "bookingId" integer NOT NULL, "amount" text NOT NULL, "status" text NOT NULL DEFAULT 'PENDING', "paymentProviderId" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_payment_transactions_updated_at"
BEFORE UPDATE ON "payment"."transactions"
FOR EACH ROW
EXECUTE PROCEDURE "payment"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_payment_transactions_updated_at" ON "payment"."transactions"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
