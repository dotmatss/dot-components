# Tala Client

This repository is an Angular + Tailwind UI reference app for a monochrome component system.

## What this app is for

- Showcase reusable UI primitives in a clear black and white visual system.
- Provide reference pages for future layouts in other projects.
- Keep the codebase modern, compact, and easy to scan.

## Stack

- Angular standalone components
- Angular router
- Angular reactive forms
- Tailwind CSS
- Modern template syntax like `@if` and `@for`
- Signal APIs like `signal()`, `input()`, `output()`, and `model()`

## Current structure

- `src/app/app.component.*` is the main component gallery page.
- `src/app/components/ui/` contains reusable UI primitives.
- `src/app/pages/` contains routed reference pages.
- `src/app/app.routes.ts` defines navigation.
- `src/app/app-shell.component.ts` provides the shared app shell.

## Working rules

- Prefer standalone components.
- Prefer `input()`, `output()`, and `model()` over `@Input()` and `@Output()`.
- Prefer `@if` and `@for` over structural directives.
- Keep styles monochrome unless a component needs semantic states like red for errors.
- Keep components reusable and focused on one job.
- Prefer explicit route pages for layout references instead of large hidden sections.

## Layout guidance

- The home route is the component gallery.
- Dashboard, layouts, contact, and auth should each have their own route.
- Pages should demonstrate real UI patterns that can be reused later.
- If a component needs multiple states, show them directly in the page preview.

## Verification

- Run `cmd /c npm run build` after UI or routing changes.
- If a change affects forms or stateful controls, verify the rendered page in the browser when possible.

