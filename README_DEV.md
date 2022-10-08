# SvelteKit Supabase Dashboard -- DEVELOPMENT

# Organizations and Roles
Multiple organizations and user roles are allowed using Supabase Custom Claims. 

Custom Claims are special attributes attached to a user that you can use to control access to portions of your application. 

Custom Claims are stored in the `auth.users` table, in the `raw_app_meta_data` column for a user.

Custom Claims are stored in the security token a user receives when logging in, and these claims are made available to the PostgreSQL database as a configuration parameter, so the database has access to these values immediately without needing to do any disk i/o.

This may sound trivial, but this could have a significant effect on scalability if you use claims in an RLS (Row Level Security) Policy, as it could potentially eliminate thousands (or even millions) of database calls.

More info [here](https://github.com/supabase-community/supabase-custom-claims
) and [here](https://github.com/supabase/supabase/discussions/1148)



