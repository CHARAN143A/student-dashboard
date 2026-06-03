# Student Dashboard — LearnSpace

A high-fidelity Next.js 14 Student Dashboard with Supabase, Framer Motion, and Tailwind CSS.

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## What's in the Dashboard


| **Hero** | Greeting, streak counter, XP bar, level badge |
| **Course Cards** | Live data from Supabase — icon, title, animated progress bar |
| **Activity Graph** | GitHub-style contribution heatmap (17 weeks) |

## Architecture

```
app/
  layout.tsx              ← Root layout + fonts
  globals.css             ← Tailwind directives + custom CSS
  page.tsx                ← Redirects to /dashboard
  dashboard/
    layout.tsx            ← Sidebar + mobile nav shell
    page.tsx              ← Bento grid assembly
    loading.tsx           ← Skeleton loader

components/
  layout/
    BentoGrid.tsx         ← Framer Motion stagger container
    Sidebar.tsx           ← Collapsible nav with layout animations
    MobileNav.tsx         ← Bottom tab bar
  tiles/
    HeroTile.tsx          ← Welcome
    CourseCard.tsx        ← Individual course
    CoursesSection.tsx    ← Server Component — fetches from Supabase
    ActivityTile.tsx      ← Contribution heatmap
  ui/
    BentoCard.tsx         ← Reusable card wrapper with hover glow
    DynamicIcon.tsx       ← Maps icon_name strings → Lucide icons
    ProgressBar.tsx       ← Animated progress bar
    Skeletons.tsx         ← Loading skeleton components
    ErrorTile.tsx         ← Error state with retry

lib/
  supabase-server.ts      ← Server-side Supabase
  queries.ts              ← server query
  utils.ts                ← cn(), generateActivityData(), STUDENT_DATA

types/
  index.ts                ← Course, ActivityDay, StudentProfile
```

## Tech Stack

- **Next.js 14** App Router + React Server Components
- **Supabase** — @supabase/supabase-js (server-side fetch)
- **Tailwind CSS** — custom dark design tokens
- **Framer Motion** — stagger entrance, spring hover, layoutId nav
- **Lucide React** — dynamically resolved icons

## Challenges

- I faced challenges on supabase data creation, I gorgotten to disable the RLS.
- And also faced challenges on Bento tiles arrangements using tailwind css, but I learnt lot using documentation.
- I faced challenges more in types, because now I am in learning stage but using documentation helped me a lot.
- I made server side and client side components using use client keyword at top level of component.
