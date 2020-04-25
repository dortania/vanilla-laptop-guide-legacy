# Contributing

This is a community ran guide which is not officially endorsed by Acidanthera. Please do not bug Acidanthera with issues about this guide. Some guidelines when contributing:

* Use your brain (please)
* Proofread your submissions
* Pull Requests can be denied if we feel it does not fit or has inaccurate information. We will generally tell you why it is rejected though or ask for revisions.
* In general, try to avoid using "non-Acidanthera" tools when possible. Generally we want to avoid use of third-party tools  - though if it's impossible otherwise, then you can link it.
* Your PR must be ran through a markdown lint and have all issues fixed.

## How to Contribute

Generally through PRs. Best way to test your commits and make sure they are formatted correctly is downloading `nodejs` and getting `gitbook-cli`, `spellchecker-cli`, and `markdownlint-cli`. When you run `gitbook serve`, it will set up a local webserver which you can connect to view the changes you made. Included within the Package.json are several tasks for testing, which can be ran with `npm run <task name>`:

* `npm run testSpell` - Check spelling through spellchecker-cli
* `npm run testLint` - Run repository through markdownlint-cli
* `npm run test` - runs both of the above tests
* `npm run fixLint` - attempt to fix lint issues
* `npm run sortDict` - sort dictionary.txt

You can add `--silent` to the end of the command to silence the `ERR!` messages from NPM - be sure that the test actually passed though with no errors.
