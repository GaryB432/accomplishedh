# Human Accomplishment Browser Extension

## Build Production

```shell
pnpm -r --filter @accomplishedh/extension... build
```

## Development

```shell
pnpm --filter @accomplishedh/extension dev
```

```mermaid
graph TD
A((start))
B[[edit files]]
C{Look good?}
E[update manifest version and changelog]
F[build]
H[[Create zip and tag commit]]
G((upload to stores))
J[Load and Test Unpacked]
A -->|pnpm --filter @accomplishedh/extension dev| B
B --> C
C -->|Yes| E
C -->|No| B
E -->|"pnpm -r --filter @accomplishedh/extension... build"|F
F --> J
J -->|pnpm run zip|H
J --> C
H --> G
```

## Store Developer Dashboards

![edge](../apps/web/static/extension/browser/edge_64x64.png) [Partner Center Edge Workspace](https://partner.microsoft.com/en-us/dashboard/microsoftedge/overview) (Log in with GitHub)

![chrome](../apps/web/static/extension/browser/chrome_64x64.png) [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole/b7254937-a5ff-49f5-819c-dbe00a7b5f74)
