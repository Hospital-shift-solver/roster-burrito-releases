# Roster Burrito Local

This public repository hosts the deployable download website and GitHub Releases for Roster Burrito Local.

Roster Burrito Local is a Windows desktop app for building healthcare rosters locally. It helps teams import staff, define shifts and constraints, run scheduling, review the result, and export a working roster without sending planning data to a hosted service.

## Latest Release

Current release: **Roster Burrito Local 1.1.0 - Windows x64 Unsigned**

- Tag: `roster-burrito-local-v1.1.0`
- Installer asset: `roster-burrito-local-windows-x64.exe`
- Size: 163.0 MB
- SHA-256: `a2a6084e5df321f8327b8ae81a8c7c8512338803f49cb282f9ec161c153674db`
- Bundled solver runtime: Python 3.12.10, OR-Tools 9.15.6755, HiGHS 1.14.0
- Default local solver: Hybrid ALNS V6
- Fallback solver: Timefold for teams-mode schedules and troubleshooting

The Windows installer is currently unsigned, so Windows may show an unknown publisher or SmartScreen warning. Verify the SHA-256 checksum published in the release notes before installing.

## Download

Download the latest Windows installer from GitHub Releases:

https://github.com/Hospital-shift-solver/roster-burrito-releases/releases/latest

Direct installer link:

https://github.com/Hospital-shift-solver/roster-burrito-releases/releases/latest/download/roster-burrito-local-windows-x64.exe

## How It Works

- Create a local workspace for a ward, clinic, or staffing team.
- Add staff, skills, availability, PTO, preferences, and staffing rules.
- Generate schedules with the bundled local solver.
- Review coverage, conflicts, assignments, and exports before using the roster operationally.

Planning data stays on the user's machine in the local app workspace. This repository intentionally contains only the public website files, public demo templates, the installer release, and license text.

## Website

The website is a static Vite site designed for Vercel.

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

Vercel uses `vercel.json`:

- framework: Vite
- install: `pnpm install --frozen-lockfile`
- build: `pnpm build`
- output: `dist`

## Repository Scope

This is a sanitized public distribution repository. It does not contain:

- application source code from the private monorepo
- private environment files
- Vercel project metadata
- Supabase, database, API, signing, or GitHub tokens
- internal deployment runbooks or private operational notes

## License And Terms

See [LICENSE](LICENSE). The license text is the Terms of Service and End User License Agreement displayed by the local app installer.
