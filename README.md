# Test-Website

## Installation

- **Install**: `npm run init`
- **Update**: `npm run update`
- Install [**Ruby**](http://www.ruby-lang.org/en/downloads/) and [**Sass**](http://sass-lang.com/install)
  - [_Dependency_](https://github.com/gruntjs/grunt-contrib-sass)
  - `ruby -v` most indicate a proper version
  - `gem install sass` installs Sass from Ruby
- **Run server**: `npm start`

## Front-End

- `grunt` list all available commands
  - `grunt asset`
  - `grunt build`
  - `grunt static`
  - `grunt watch`

### Assets

- CSS are builds via SCSS files in `assets/scss/` and compiled via **Grunt**. It is recommended to have a single final file per webpage with its compiled content.
- JS are builds in `assets/js-src/` and compiled via **Babel**. Stage and Live also use **Uglify**.
  - Minified JS files (_*.min.js_) are simply copied into the destination folder.
- Static HTML pages are builds via HTML templates in `static/` and compiled via **Grunt**. Re-usable templates and page-specific templates are located in sub-folders. Stage and Live also use **HtmlMin**.

### Database

_incomplete_

Some development content is stored in local JSON files under `data/`. `data/cache/` is ignored and planned for any cached search results.

## Back-End

_incomplete_

The server is a Node-based server. Files are located in `server/`. The main file imports _require()_ files building up the server.

Files located in `server/config/` are designed to set up the basics of the server; automatically loading Requests, listening to the host, starting the SocketIO, and handling static requests.

Files located in `server/middleware/` are designed to set up middlewares in requests.

Files located in `server/request/` are designed to handled API-like requests.

## Configuring Grunt

Grunt is run on the root directory. Its configuration is stored in `grunt/`. Directly under `grunt/` are global configurations, re-usable functions and loading tasks.

Grunt dependencies are under `grunt/module/`.

Grunt available tasks are under `grunt/task/`.

### Add a module

1. Run the NPM installer
  - Example `npm i grunt-contrib-copy --D`

2. Add the config in `grunt/tasks.js`

```
const modules = {
// ...
// 'filename' : 'grunt module'
'copy' : 'grunt-contrib-copy',
//...
};
```

3. Add the module file; _copying from an existing file is recommended_
  - Example `grunt/module/copy.js`

### Add a task

Add the task file; _copying from an existing file is recommended_
  - Example `grunt/task/test.js`