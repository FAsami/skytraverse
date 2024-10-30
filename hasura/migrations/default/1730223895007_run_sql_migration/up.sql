CREATE OR REPLACE FUNCTION public."isOtpValid"(r public.otp)
 RETURNS boolean
 LANGUAGE plpgsql
 STABLE
AS $function$
DECLARE
    diff int;
BEGIN
    SELECT EXTRACT(EPOCH FROM (now() - r.updated_at)) INTO diff;
    IF r."validTill" > diff THEN
        return true;
    ELSE
        return false;
    END IF;
END;
$function$;
