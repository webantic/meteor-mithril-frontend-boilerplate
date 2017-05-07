## Meteor/Mithril SPA Client Boilerplate

This boilerplate allows you to quickly set up a mithril-based SPA which uses Meteor as a backend.

It comes with an [RSCSS](http://rscss.io)-orientated scss folder structure and [Mithril JS](https://mithril.js.org) routing/templating.

There's also some cool Webpack goodness going on:

* Route-based code-splitting: only load the assets you need for a route when the route is triggered.
* SCSS -> CSS pre-compilation
* ES2015 transpilation via Babel (also, async/await support)
* Auto-generated appcache manifest

### Getting started

Setup is easy. Clone this repo and run `npm i` to install your deps then run `npm run init` to set up a new git repo

You'll only need to edit a few files before you get started:

**package.json**: update the app name if you want 
**app/index.ejs**: this is your HTML template. Customise your default title, meta tags etc here. 
**app/core/asteroid.js**: update the `endpoint` param to your meteor backend URL
**app/app_manifest.json**: [PWA manifest](see https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/)

Spin up a dev server with hot module reload using `npm run serve`

Build for production with `npm run build`

That's it!