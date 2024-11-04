alter table "booking"."flights" add constraint "flights_providerOfferId_userId_key" unique ("providerOfferId", "userId");
