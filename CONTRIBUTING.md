# Contributing

This is a community run guide which is not officially endorsed by Acidanthera. Please do not bug Acidanthera with issues about this guide. Some guidelines when contributing:

* Use your brain (please)
* Proofread your submissions
* Pull Requests can be denied if we feel it does not fit or has inaccurate information. We will generally tell you why it is rejected though or ask for revisions.
* In general, try to avoid using "non-Acidanthera" tools when possible. Generally we want to avoid use of third-party tools - though if it's impossible otherwise, you can link it.
* Your PR must be ran through a markdown linter and spellchecker (Travis CI will do this for you, but you can do it locally too - see below) and have the build pass.

## How to Contribute

Contributions are made through PRs (Pull Requests) on Github.com. You must test your commits and make sure they are formatted correctly before we will accept them.

To run the tests, download `nodejs`, clone this repo, and run `npm install` to install dependencies.
The package.json file contains several tasks for testing and building the guide.
To test your Pull Request, use `npm run test`.

Other scripts in this repository are:

* `npm run build` - Install GitBook (and dependencies) and build the guide
* `npm run serve` - Install GitBook (and dependencies), build the guide, and set up a local webserver to view the guide
* `npm run spellcheck` - Check spelling through spellchecker-cli
* `npm run lint` - Run repository through markdownlint-cli
* `npm run test` - runs both of the above tests
* `npm run fix-lint` - attempt to fix lint issues
* `npm run sort-dict` - sort dictionary.txt
