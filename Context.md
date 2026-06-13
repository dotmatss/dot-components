# Tala Client Context

## Purpose

Tala Client is an Angular + Tailwind reference app for a monochrome component system. It is meant to:

- showcase reusable UI primitives
- provide routed reference pages for layout patterns
- stay compact, readable, and easy to scan

## Stack

- Angular standalone components
- Angular router
- Angular reactive forms
- Tailwind CSS
- Modern template syntax such as `@if` and `@for`
- Signal APIs such as `signal()`, `input()`, `output()`, and `model()`

## Structure

- `src/app/app.component.*` is the main component gallery page.
- `src/app/app-shell.component.ts` provides the shared shell.
- `src/app/app.routes.ts` defines navigation.
- `src/app/components/ui/` contains reusable UI primitives.
- `src/app/pages/` contains routed reference pages.

## Layout Intent

- Home is the component gallery.
- Dashboard, layouts, contact, auth, forms, and other patterns should live on explicit routes.
- Pages should show real UI states, not hidden demo sections.

## Working Rules

- Prefer standalone components.
- Prefer `input()`, `output()`, and `model()` over decorator-based inputs and outputs.
- Prefer `@if` and `@for` over structural directives.
- Keep styles monochrome unless a semantic state needs color, such as red for errors.
- Keep components focused on one job and reusable where possible.

