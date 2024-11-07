
create schema "customer";

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

DROP table "public"."userDetails";

alter table "customer"."details" rename column "dataOfBirth" to "dateOfBirth";

alter table "customer"."details" alter column "firstName" drop not null;

alter table "customer"."details" alter column "lastName" drop not null;

alter table "customer"."details" alter column "dateOfBirth" drop not null;

alter table "customer"."details" alter column "identitiyDocument" drop not null;

alter table "customer"."details" rename column "identitiyDocument" to "identityDocuments";

alter table "customer"."details" add column "gender" text
 null;

alter table "customer"."details" add column "avatar" text
 null;
