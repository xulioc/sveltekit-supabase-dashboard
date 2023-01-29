# SvelteKit Supabase Dashboard -- DEVELOPMENT

## Demo mode

You can enable/disable **demo mode** using the environment variable `PUBLIC_DEMO_MODE` in your `.env` file.

```bash
PUBLIC_DEMO_MODE="true" #ENABLE DEMO MODE
```

If **demo mode** is enabled you will see some hints in the dashboard and the database updates will be disabled.

## Organizations and Roles

Multiple organizations and user roles are allowed using Supabase Custom Claims.

Custom Claims are special attributes attached to a user that you can use to control access to portions of your application.

Custom Claims are stored in the `auth.users` table, in the `raw_app_meta_data` column for a user.

Custom Claims are stored in the security token a user receives when logging in, and these claims are made available to the PostgreSQL database as a configuration parameter, so the database has access to these values immediately without needing to do any disk i/o.

This may sound trivial, but this could have a significant effect on scalability if you use claims in an RLS (Row Level Security) Policy, as it could potentially eliminate thousands (or even millions) of database calls.

More info [here](https://github.com/supabase-community/supabase-custom-claims) and [here](https://github.com/supabase/supabase/discussions/1148)

### Organizations

Currently there is no UI to create **organizations**. You must create them directly into the `orgs` table using Supabase UI. You can view organizations if you are `Super` user.

![Organizations](/img/organizations.png)

### Roles

There are three roles: `User`, `Admin` and `Super`.

- `User` is the standard user with no privilleges.
- `Admin` is the organization admin. `Admin` can add user to organizations. `Admin` can also acess the routes `/dhasboard/admin/...`
- `Super` is the superuser. `Super` can do everything and also access the routes `/dashboard/super/...`

### Users

User can be created/deleted using Dashboard UI, if you are `Admin` or `Super`. If you are `Admin` you can create only users in your organization. `Super` can create users in any organization.

![Users](/img/create_user.png)
