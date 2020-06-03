# Contributing

This is a community run guide which is not officially endorsed by Acidanthera. Please do not bug Acidanthera with issues about this guide. Some guidelines when contributing:

* Use your brain (please)
* Proofread your submissions
* Pull Requests can be denied if we feel it does not fit or has inaccurate information. We will generally tell you why it is rejected though or ask for revisions.
* In general, try to avoid using "non-Acidanthera" tools when possible. Generally we want to avoid use of third-party tools - though if it's impossible otherwise, you can link it.
* Your PR must be ran through a markdown linter and spellchecker (Travis CI will do this for you, but you can do it locally too - see below) and have the build pass.

## How to Contribute

Generally contributions are made through PRs (Pull Requests). The best way to test your commits and make sure they are formatted correctly is downloading `nodejs`, cloning the repo (since there are submodules, make sure you use `--recurse-submodules` when cloning, or run `git submodule update --init --recursive` if already cloned), and running `npm install` to install dependencies. Included within the package.json are several tasks for testing, which can be ran with `npm run <task name>`:

* `npm run build` - Install GitBook (and dependencies) and build the guide
* `npm run serve` - Install GitBook (and dependencies), build the guide, and set up a local webserver to view the guide
* `npm run spellcheck` - Check spelling through spellchecker-cli
* `npm run lint` - Run repository through markdownlint-cli
* `npm run test` - runs both of the above tests
* `npm run fix-lint` - attempt to fix lint issues
* `npm run sort-dict` - sort dictionary.txt
