CREATE TABLE "booking"."flights" ("id" serial NOT NULL, "paymentMethodId" integer, "providerId" integer, "providerOfferDetails" jsonb, "providerOfferId" text, "userId" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("providerOfferId", "userId"));
CREATE OR REPLACE FUNCTION "booking"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_booking_flights_updated_at"
BEFORE UPDATE ON "booking"."flights"
FOR EACH ROW
EXECUTE PROCEDURE "booking"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_booking_flights_updated_at" ON "booking"."flights"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
