# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open and close the mobile navigation menu

### Screenshot

![](./public/screenshot.png)

### Links

- Solution URL: [Vercel](https://sunnyside-agency-landing-page-main.vercel.app/)
- Live Site URL: [mmalabugin.ru/SunnysideAgencyLandingPage/](https://mmalabugin.ru/SunnysideAgencyLandingPage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Responsive `<picture>` element for the art-directed section images
- [Angular](https://angular.dev/) - standalone components, signals
- Self-hosted [Barlow](https://fonts.google.com/specimen/Barlow) & variable [Fraunces](https://fonts.google.com/specimen/Fraunces) with `font-display: optional`

### What I learned

- Animated footer: staggered fade-up entrance driven by an `IntersectionObserver` (wired through an Angular signal), a soft "breathing" sun-glow behind the logo, and hover micro-interactions (icon lift, link underline grow). All animations respect `prefers-reduced-motion`.
- Recoloring monochrome SVGs (footer logo and social icons) without duplicating assets, using CSS `mask` with a `background-color` swap on hover.
- Art direction with `<picture>`: the mobile design crops the stand-out photo to a 239px band while desktop shows the full 720×600 frame.

## Author

- Website - [mmalabugin.ru](https://mmalabugin.ru/)
- Frontend Mentor - [@1t1sCooL](https://www.frontendmentor.io/profile/1t1sCooL)
- Twitter - [@vi_el_mar](https://www.twitter.com/vi_el_mar)
- Telegram - [@ItIsCooL](https://t.me/ItIsCooL)

This project was generated using [Angular CLI](https://github.com/angular/angular-cli).

## Getting Started

First, run the development server:

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200) with your browser to see the result.

## Building

To build the project run:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. On the `deploy` branch the build is configured with the `/SunnysideAgencyLandingPage/` base href for self-hosting behind nginx.

## Deploy on Vercel

The `main` branch builds with the default base href and deploys to the [Vercel Platform](https://vercel.com/) as a static Angular app (see `vercel.json` for the output directory).
