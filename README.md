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

The form has **no contact destination configured yet** — it validates
input but does not deliver enquiries. Choose one of these to activate it:

**Option A — email a recipient (no backend):**
In `script.js`, add a recipient and compose a `mailto:` link in the
`submit` handler (opens the visitor's email app pre-filled).

**Option B — a form service (recommended):**
Point the form at a service such as [Formspree](https://formspree.io):

1. Set `action="https://formspree.io/f/your-id"` and `method="POST"` on
   the `<form id="booking-form">` in `index.html`.
2. Remove the `submit` handler in `script.js`.

## YouTube

The Media cards and footer link to the channel:
<https://youtube.com/@edinamdean>. To point a card at a specific video
instead, replace that card's `href` in `index.html` with the video URL.

## Running locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
