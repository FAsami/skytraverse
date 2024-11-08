alter table "payment"."availablePaymentMethods" add column "updated_at" timestamptz
 null default now();

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
CREATE TRIGGER "set_payment_availablePaymentMethods_updated_at"
BEFORE UPDATE ON "payment"."availablePaymentMethods"
FOR EACH ROW
EXECUTE PROCEDURE "payment"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_payment_availablePaymentMethods_updated_at" ON "payment"."availablePaymentMethods"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
