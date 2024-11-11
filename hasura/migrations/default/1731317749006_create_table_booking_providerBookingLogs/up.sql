CREATE TABLE "booking"."providerBookingLogs" ("id" serial NOT NULL, "bookingId" integer NOT NULL, "status" text NOT NULL, "details" jsonb NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_booking_providerBookingLogs_updated_at"
BEFORE UPDATE ON "booking"."providerBookingLogs"
FOR EACH ROW
EXECUTE PROCEDURE "booking"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_booking_providerBookingLogs_updated_at" ON "booking"."providerBookingLogs"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
