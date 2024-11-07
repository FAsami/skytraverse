
-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "customer"."details" add column "avatar" text
--  null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "customer"."details" add column "gender" text
--  null;

alter table "customer"."details" rename column "identityDocuments" to "identitiyDocument";

alter table "customer"."details" alter column "identitiyDocument" set not null;

alter table "customer"."details" alter column "dateOfBirth" set not null;

alter table "customer"."details" alter column "lastName" set not null;

alter table "customer"."details" alter column "firstName" set not null;

alter table "customer"."details" rename column "dateOfBirth" to "dataOfBirth";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- DROP table "public"."userDetails";

DROP TABLE "customer"."details";

drop schema "customer" cascade;
