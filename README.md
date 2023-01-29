# SvelteKit Supabase Dashboard (BETA)

![alt text](/img/dashboard.png)

---

## Simple dashboard inspired by Supabase UI made with [SvelteKit](https://kit.svelte.dev/) as frontend and [Supabase](https://supabase.com/) as backend.

<h3>
<span style="color:red">
DISCLAIMER: This project is not production ready. Role based access is not fully tested. Use at your own risk.
</h3>
</span>

## Demo

Try different access roles and views [here](https://sveltekit-supabase-dashboard.vercel.app/).

## Features

- Supabase inspired UI
- Multi organization
- Role based access
- User creation and deletion in dashboard UI
- Tables & Charts demo views
- Demo mode (show hints and disable database updates)

## Technologies

- [Svelte](https://svelte.dev/) and [SvelteKit](https://kit.svelte.dev/) as application framework
- [Supabase](https://supabase.com/) as database and backend
- [TailwindCSS](https://tailwindcss.com/) as CSS framework
- [DaisyUI](https://daisyui.com/) as Tailwind CSS component library
- [Supabase Auth Helpers](https://github.com/supabase/auth-helpers) as Auth utilities for working with Supabase
- [Supabase custom claims](https://github.com/supabase-community/supabase-custom-claims) for multi organization and role based access
- [Charts.js](https://www.chartjs.org/) and [svelte-chartjs](https://www.npmjs.com/package/svelte-chartjs) for charts
- [Feather Icons](https://feathericons.com/) and [svelte-feather-icons](https://www.npmjs.com/package/svelte-feather-icons) for icons
- [svelte-loading-spinners](https://www.npmjs.com/package/svelte-loading-spinners) for loading spinners
- [Vercel](https://vercel.com/) as deployment platform

## TODO

- Improve development docs
- Fix TypeScript issues
- Add more chart views
- ~~Update supabase-js v2~~
- ~~User profiles~~
- ~~Light/Dark mode~~
- Improve mobile navigation
- PWA

## Installation

### Setup Supabase

Create new project at [supabase.com](https://supabase.com/) and go to Settings->API to check your project URL and API keys

### Clone the repo

```bash
git clone https://github.com/xulioc/sveltekit-supabase-dashboard.git
cd sveltekit-supabase-dashboard
```

### Setup environment variables

Create a new `.env` file

```bash
cp .env.example .env
```

Edit your `.env` file to match your project URL and API keys

```bash
# SUPABASE
PUBLIC_SUPABASE_URL="YOUR PROJECT URL"
PUBLIC_SUPABASE_ANON_KEY="YOUR PROJECT ANON KEY"
PRIVATE_SUPABASE_SERVICE_KEY="YOUR PROJECT SERVICE KEY"
```

### Initialize database

Execute `sql/init_databse.sql` and `sql/init_demo_data.sql` in Supabase SQL Editor.

### Install & run

```bash
npm install
```

To start in development mode:

```bash
npm run dev
```

To build and start in production mode:

```bash
npm run build
npm run preview
```

### Deploy

To deploy to Vercel please follow instructions [here](https://vercel.com/guides/deploying-svelte-with-vercel).

## Development

Find more development details [here](https://github.com/xulioc/sveltekit-supabase-dashboard/blob/main/README_DEV.md).

## Contribute

Feel free to contribute. Issues and Pull Requests are welcome.

## License

[MIT](https://github.com/xulioc/sveltekit-supabase-dashboard/blob/main/LICENSE)
