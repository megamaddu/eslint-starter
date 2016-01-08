# eslint-starter

### Atom
Install the eslint and editorconfig plugins for Atom:
* linter-eslint
* editorconfig


### Running the scripts
A quick look at the `package.json` file will show the following scripts defined:

Run the server -- this only runs `src/server.js`:

    npm start

Run `eslint` on the `src` folder:

    npm run lint

There aren't any tests for this project yet, but it's a good idea to lint before you run the tests to catch silly mistakes:

    npm test

And last but not least, for normal dev work you'll run:

    npm run watch

Watch will lint and then restart the server any time files in `src` change!
