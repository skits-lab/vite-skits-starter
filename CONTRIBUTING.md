<p align="center" class="toc">
<strong><a href="#setup">Setup</a></strong>
|
<strong><a href="#running-lintingtests">Running linting/tests</a></strong>
|
<strong><a href="#writing-tests">Writing tests</a></strong>
|
<strong><a href="#debugging-code">Debugging code</a></strong>
|
<strong><a href="#internals">Internals</a></strong>
</p>

---

# Contributing

Please be sure to read the contribution guidelines before making or requesting a change.

## Not sure where to start?

- If you aren't just making a documentation change, you'll probably want to learn a bit about a few topics.
  - [ASTs](https://en.wikipedia.org/wiki/Abstract_syntax_tree) (Abstract Syntax Tree): The Babel AST [spec](https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md) is a bit different from [ESTree](https://github.com/estree/estree). The differences are listed [here](https://babeljs.io/docs/en/next/babel-parser.html#output).
  - Check out [`/doc`](https://github.com/babel/babel/tree/main/doc) for information about Babel's internals
  - Check out [the Babel Plugin Handbook](https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#babel-plugin-handbook) - core plugins are written the same way as any other plugin!
  - Check out [AST Explorer](http://astexplorer.net/#/scUfOmVOG5) to learn more about ASTs or make your own plugin in the browser
- When you feel ready to jump into the Babel source code, a good place to start is to look for issues tagged with [help wanted](https://github.com/babel/babel/labels/help%20wanted) and/or [good first issue](https://github.com/babel/babel/labels/good%20first%20issue).
  - Follow along with what we are working on by joining our [Slack](https://skitslab.slack.com)
    for an invite), following our announcements on [Twitter](https://twitter.com/babeljs), and reading (or participating!) in our [meeting notes](https://github.com/babel/notes).
- Check out our [website](http://babeljs.io/) and the [repo](https://github.com/babel/website)
- You can contribute by triaging issues which may include reproducing bug reports or asking for vital information, such as version numbers or reproduction instructions. If you would like to start triaging issues, one easy way to get started is to [subscribe to babel on CodeTriage](https://www.codetriage.com/babel/babel). [![Open Source Helpers](https://www.codetriage.com/babel/babel/badges/users.svg)](https://www.codetriage.com/babel/babel)

## Chat

Feel free to check out our [Slack channels](https://skitslab.slack.com) for discussion and updates

- `#proj_vite-skits-starter`
- `#general`

## Filing Issues

When filing an issue, please be sure to follow the provided issue templates.

> TIP: Issue templates can be found in `~/.github/ISSUE_TEMPLATE`.

## Developing

_Node_: Check that Node is [installed](https://nodejs.org/en/download/) with version `>= 17.x`.
You can check this with `node -v`.

### Setup

Clone the `vite-skits-starter` repository onto to your local machine.

```sh
git clone https://github.com/skits-lab/vite-skits-starter
cd vite-skits-starter
```

#### 📦 Install dependencies

```sh
npm run install
```

#### ⚡ Local Development

```sh
npm start
```

> Starts a dev server at http://localhost:3000/

#### 🚀 Build for Production

```sh
npm run build
```

> You can access the built files from `dist/`.

If you wish to preview the production build on your machine, then run:

```sh
npm run preview
```

> The production build can then be viewed at http://localhost:5001/

### Running linting/tests

#### Lint

```sh
npm run lint
```

- You can run eslint's autofix via:

```sh
npm run lint --fix
```

#### Run tests:

```sh
npm run test
```

#### Test coverage

To test the code coverage, use:

```sh
npm run test:coverage
```

### Writing tests

...

<!--
TODO: document 'writing tests'

Most packages in [`/packages`](https://github.com/babel/babel/tree/main/packages) have a `test` folder, however some tests might be in other packages or in [`/packages/babel-core`](https://github.com/babel/babel/tree/main/packages/babel-core/test/fixtures).

#### `@babel/plugin-x`

All the Babel plugins (and other packages) that have a `/test/fixtures` are written in a similar way.

For example, in [`@babel/plugin-transform-exponentiation-operator/test`](https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-exponentiation-operator/test):

- There is an `index.js` file. It imports our [test helper](https://github.com/babel/babel/tree/main/packages/babel-helper-plugin-test-runner). (You don't have to worry about this).
- There can be multiple folders under [`/fixtures`](https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-exponentiation-operator/test/fixtures)

  - There is an [`options.json`](https://github.com/babel/babel/blob/main/packages/babel-plugin-transform-exponentiation-operator/test/fixtures/exponentian-operator/options.json) file whose function is similar to a `.babelrc` file, allowing you to pass in the plugins and settings you need for your tests.
  - For this test, we only need the relevant plugin, so it's just `{ "plugins": ["@babel/plugin-transform-exponentiation-operator"] }`.
  - If necessary, you can have an `options.json` with different options in each subfolder.

- In each subfolder, you can organize your directory structure by categories of tests. (Example: these folders can be named after the feature you are testing or can reference the issue number they fix)
- Generally, there are two kinds of tests for plugins
  - The first is a simple test of the input and output produced by running Babel on some code. We do this by creating an [`input.js`](https://github.com/babel/babel/blob/main/packages/babel-plugin-transform-exponentiation-operator/test/fixtures/exponentian-operator/binary/input.js) file and an [`output.js`](https://github.com/babel/babel/blob/main/packages/babel-plugin-transform-exponentiation-operator/test/fixtures/exponentian-operator/binary/output.js) file. This kind of test only works in sub-subdirectories of `/fixtures`, i.e. `/fixtures/exponentian-operator/binary/input.js` and **not** `/fixtures/exponentian-operator/input.js`.
  - If you need to expect an error, you can ignore creating the `output.js` file and pass a new `throws` key to the `options.json` that contains the error string that is created.
  - The second and preferred type is a test that actually evaluates the produced code and asserts that certain properties are true or false. We do this by creating an [`exec.js`](https://github.com/babel/babel/blob/main/packages/babel-plugin-transform-exponentiation-operator/test/fixtures/exponentian-operator/comprehensive/exec.js) file.

In a fixture test, you simply write out the code you want to transform in `input.js`.

```js
// input.js
2 ** 2;
```

and the expected output after transforming it with your `options.json` in `output.js`.

```js
// output.js
Math.pow(2, 2);
```

In an `exec.js` test, we run or check that the code actually does what it's supposed to do rather than just check the static output.

```js
// exec.js
expect(2 ** 3).toBe(8);
expect(3 * 2 ** 3).toBe(24);
``` -->

## Commit Messages

[Commitlint](https://github.com/conventional-changelog/commitlint) is used to ensure that all commit
messages meet the conventional commit format.

> Conventional commits cheat sheet: - https://gist.github.com/Zekfad/f51cb06ac76e2457f11c80ed705c95a3

## Pull Requests

...

<!-- TODO: Document pull request guidelines -->
