# SvelteKit Supabase Dashboard (BETA)

![alt text](/img/dashboard.png)




Simple dashboard inspired by Supabase UI made with [SvelteKit](https://kit.svelte.dev/) as frontend and  [Supabase](https://supabase.com/) as backend.

## Features
- Supabase inspired UI
- Multi organization
- Role based access
- User creation and deletion in dashboard UI
- Tables & Charts demo views


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
- Improve docs
- Fix TypeScript issues
 
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
Execute `init_databse.sql` and `init_demo_data.sql` in Supabase SQL Editor.

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
This project uses Vercel adapter. Please follow instructions [here](https://vercel.com/guides/deploying-svelte-with-vercel)


## Contribute
Feel free to file issues and/or pull requests.

## License
[MIT](https://github.com/xulioc/sveltekit-supabase-dashboard/blob/main/LICENSE)