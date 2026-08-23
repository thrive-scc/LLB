# Living Life Backwards

An interactive, single-page presentation for *Living Life Backwards*.

The site is a self-contained static page. It runs directly in a modern web browser and has no build step or runtime dependencies.

## Project files

- `index.html` contains the presentation and its bundled runtime.
- `settings.js` saves the completion state for chapter 6, "Love the Limitations," in the browser's local storage.
- `.github/workflows/pages.yml` deploys the site to GitHub Pages when changes are pushed to `main`.

## Preview locally

Open `index.html` in a modern browser. For browser behavior that requires an HTTP origin, serve this directory with a local static server, for example:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish

GitHub Pages is configured to deploy through GitHub Actions. Commit and push the site files to `main`; the `Deploy GitHub Pages` workflow publishes the repository root to:

https://thrive-scc.github.io/LLB/