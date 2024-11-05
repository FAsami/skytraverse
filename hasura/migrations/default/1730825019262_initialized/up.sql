
SET check_function_bodies = false;
CREATE TABLE public.otp (
    id integer NOT NULL,
    "userId" uuid NOT NULL,
    token text NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    "validTill" integer DEFAULT 300 NOT NULL,
    "tokenType" text DEFAULT 'OTP'::text NOT NULL
);
CREATE FUNCTION public."isOtpValid"(r public.otp) RETURNS boolean
    LANGUAGE plpgsql STABLE
    AS $$
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
$$;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.accounts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at integer,
    token_type text,
    scope text,
    id_token text,
    session_state text,
    "userId" uuid NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);
CREATE TABLE public.brand (
    id integer NOT NULL,
    title text NOT NULL,
    logo jsonb,
    "metaData" jsonb,
    phone text NOT NULL,
    email text NOT NULL,
    location text,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.brand_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.brand_id_seq OWNED BY public.brand.id;
CREATE SEQUENCE public.otp_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.otp_id_seq OWNED BY public.otp.id;
CREATE TABLE public.provider_type (
    value text NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);
CREATE TABLE public.sessions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "sessionToken" text NOT NULL,
    "userId" uuid NOT NULL,
    expires timestamp with time zone NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);
CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text,
    email text,
    "emailVerified" timestamp with time zone,
    image text,
    password text,
    phone text,
    "phoneVerified" timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT email_phone_not_both_null CHECK (((email IS NOT NULL) OR (phone IS NOT NULL)))
);
CREATE TABLE public.verification_tokens (
    token text NOT NULL,
    identifier text NOT NULL,
    expires timestamp with time zone NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
ALTER TABLE ONLY public.brand ALTER COLUMN id SET DEFAULT nextval('public.brand_id_seq'::regclass);
ALTER TABLE ONLY public.otp ALTER COLUMN id SET DEFAULT nextval('public.otp_id_seq'::regclass);
ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.brand
    ADD CONSTRAINT brand_phone_email_key UNIQUE (phone, email);
ALTER TABLE ONLY public.brand
    ADD CONSTRAINT brand_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.otp
    ADD CONSTRAINT otp_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.provider_type
    ADD CONSTRAINT provider_type_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY ("sessionToken");
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.verification_tokens
    ADD CONSTRAINT verification_tokens_pkey PRIMARY KEY (token);
CREATE TRIGGER set_public_accounts_updated_at BEFORE UPDATE ON public.accounts FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_accounts_updated_at ON public.accounts IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_brand_updated_at BEFORE UPDATE ON public.brand FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_brand_updated_at ON public.brand IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_otp_updated_at BEFORE UPDATE ON public.otp FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_otp_updated_at ON public.otp IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_provider_type_updated_at BEFORE UPDATE ON public.provider_type FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_provider_type_updated_at ON public.provider_type IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_sessions_updated_at BEFORE UPDATE ON public.sessions FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_sessions_updated_at ON public.sessions IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_users_updated_at ON public.users IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_verification_tokens_updated_at BEFORE UPDATE ON public.verification_tokens FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_verification_tokens_updated_at ON public.verification_tokens IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_type_fkey FOREIGN KEY (type) REFERENCES public.provider_type(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE CASCADE;

INSERT INTO "public"."brand"("id", "logo", "metaData", "email", "location", "phone", "title", "created_at", "updated_at") VALUES (1, '{"default":"https://res.cloudinary.com/dffqrc36j/image/upload/v1730125525/logo_ycmy0g.svg"}', '{"icons":{"icon":"https://res.cloudinary.com/dffqrc36j/image/upload/v1730125525/logo_ycmy0g.svg","shortcut":"https://res.cloudinary.com/dffqrc36j/image/upload/v1730125525/logo_ycmy0g.svg"},"title":"Skytraverse"}', E'foysal.biography@gmail.com', null, E'+8801610569865', E'Skytraverse', E'2024-11-05T16:43:39.170736+00:00', E'2024-11-05T16:43:39.170736+00:00');
