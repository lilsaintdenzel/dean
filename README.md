# The Deaton Academy

Website for **The Deaton Academy** — professional live singing and vocal
coaching with Dean Eaton, director of the Cambridge University Gospel Choir.

> *Find your true voice, develop more confidence.*

## What's here

A fast, responsive, single-page static site.

| File | Purpose |
|------|---------|
| `index.html` | Page structure and content |
| `styles.css` | Styling (candlelit-chapel palette, responsive layout) |
| `script.js` | Mobile nav, scroll reveals, booking form |
| `images/` | Performance photography |

## Sections

- **Hero** — headline and calls to action
- **About** — introduction and background
- **Live Singing** — event performance service
- **Vocal Coaching** — lessons and workshops
- **Media & Portfolio** — space for YouTube performance links
- **Testimonials** — client quotes
- **Booking** — enquiry form + three-step process

## Booking form

The form currently opens the visitor's email app pre-filled to
`lilsaintdenny@gmail.com` (no backend required).

To collect submissions automatically instead, point the form at a form
service such as [Formspree](https://formspree.io):

1. Set `action="https://formspree.io/f/your-id"` and `method="POST"` on
   the `<form id="booking-form">` in `index.html`.
2. Remove the `submit` handler in `script.js`.

## Adding YouTube links

In `index.html`, each `.media-card` is an `<a href="#">`. Replace `#` with
the YouTube URL and update the card title / note text.

## Running locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
