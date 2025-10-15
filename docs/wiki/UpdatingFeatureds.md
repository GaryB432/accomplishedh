## Updating Features

The web application fetches local data from `apps/web/static/data`. The cli `featured` command creates a the `featured.json` file used by that web feature.

### Periodically refresh the `featured` humans

This document refers to the static `json` files in `static/data`, which are the ground-truth for the [production `api/featured/{ISO-DATE}` route](https://www.humanaccomplishment.com/api/featured/2025-01-01).

Ensure cli is up-to-date

```shell
git log -n 10 --oneline --pretty=format:"%h - %cn (%cd) %s %d" | cat
# if necessary, build the cli app
cd apps/cli
pnpm run build
cd ..
```

Create, for example, _90_ days of features (6 per day) in `apps/web/static/data/featured.json` starting on _May 17, 2029_

```shell
ha featured 2029-05-17 --days 90
```

If there is no `ha` [function](https://github.com/rothgar/mastering-zsh/blob/master/docs/helpers/functions.md) for main.js in your terminal, run the script directly like so...

```shell
node apps/cli/dist/main.js featured 2029-05-17 --days 90
```

Observe the console shows a line for each feature, note the date on the **last one** and verify that it is `limit` days from your `start`.

Mark your calendar to refresh these again before they run out on the date of that **last** observed feature. Make reference to this wiki page for instructions.
