# Living Life Backwards

An interactive, single-page presentation for *Living Life Backwards*.

The site is a static presentation with no build step. Serve it over HTTP using a local server or GitHub Pages.

## Project files

- `index.html` loads `slides.html` and contains the bundled runtime and font assets.
- `slides.html` contains editable slide markup, styling, speaker notes, and chapter navigation logic.
- `settings.js` saves the completion state for chapter 6, "Love the Limitations," in the browser's local storage.
- `.github/workflows/pages.yml` deploys the site to GitHub Pages when changes are pushed to `main`.

## Preview locally

Serve this directory with a local static server:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

Opening `index.html` directly with a `file://` URL cannot fetch the slide template. Open the presentation through the server, rather than opening `slides.html` directly.

## Edit slides

Edit `slides.html`, then refresh the presentation. Each `<section data-label="...">` defines a slide. Search for its label or visible text to find it; `data-speaker-notes` contains presenter notes. Inline `style` attributes control appearance.

The UUID asset references are resolved by `index.html` at load time. Keep those references intact. If adding or removing slides, also update the chapter `starts` array and menu index in the component script at the bottom of `slides.html`.

## Publish

GitHub Pages is configured to deploy through GitHub Actions. Commit and push the site files to `main`; the `Deploy GitHub Pages` workflow publishes the repository root to:

https://thrive-scc.github.io/LLB/
