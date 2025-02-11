# Zaraz Tools
Community toolkit package for working and building with Zaraz

> [!CAUTION]
> This package is temporarily in a unstable pre-release state. Please use with caution and report any issues you find.

> [!NOTE]  
> Not sure what Zaraz is? Check out the [Zaraz website](https://www.cloudflare.com/application-services/products/zaraz/) for more information.

This toolkit is broken down into several different tools that can be used to work with Zaraz. The tools types are as follows:
- Mocking / Testing Tools
- Managed Component Utilities
- Context Enrichment Tools
- Consent Management Tools *soon*
- Consent Management React Components Primitives *soon*

This package is not built, supported, or maintained by Cloudflare / Zaraz. Don't contact Cloudflare for support with this package. Instead, open an [issue](https://github.com/mackenly/zaraz-tools/issues) here on GitHub.

## Why?
Hi, my name is Mackenly Jones, creator/maintainer of this package. While building Zaraz integrations for my clients I've found that many of the tools I've built are reusable across projects. This package is an attempt to make those tools available to the community to help speed up development and ensure best practices are followed. Furthermore, it lets me keep the tools up to date across all my projects by updating the package in one place.

If you or your company needs help building a Zaraz integration, reach out to me at [Tricities Media Group](https://tricitiesmediagroup.com) and I'll either point you in the right direction or if it makes sense you can hire me as a consultant to help you build your integration. I'm a Certified Zaraz Developer and have built many Zaraz integrations for clients of all sizes.

## Installation
To install this package, you can use your favorite package manager. Here are the commands for each:

```bash
npm install @mackenly/zaraz-tools
```

```bash
yarn add @mackenly/zaraz-tools
```

```bash
pnpm add @mackenly/zaraz-tools
```

Currently published on npm and GitHub Packages. If there's another package manager you'd like to see this package on, please let me know by opening an issue.

## Versioning
This project uses [Semantic Versioning](https://semver.org/). For the versions available, see the [tags on this repository](https://github.com/mackenly/zaraz-tools/tags).

```javascript
import { Foo } from '@mackenly/zaraz-tools';
```

## Mocking / Testing Tools
### mockManager
`const mockManager: Manager`
> This mocks the Zaraz manager for use in testing custom managed components.

### mockEvent
`const mockEvent: MCEvent`
> This mocks the Zaraz event for use in testing custom managed components.

```javascript
import { mockEvent } from '@mackenly/zaraz-tools';

const event = {
    ...mockEvent,
    payload: {
        ...mockEvent.payload,
        customValue: 'hello-there',
    },
};
```

## Managed Component Utilities
### actionAlreadyFired
`function actionAlreadyFired( client: Client, actionKey: String, scope: 'page' | 'session' | 'infinite'= 'session', expiry: Date | number | null = null, dontStore: boolean = false): Date | false`
> This function takes in the client object, an action key, and an optional scope and expiration. It returns either the Date of the last time the action was fired or false to indicate that it hasn't be fired. If the action has not been fired, it will now remember the current Date and return it next time. Optionally, the scope parameter can be set to `session` (default), `page`, or `infinite` to determine how long the action should be remembered using a cookie or local/session storage. Optionally, expiry can be set to a Date or lifetime in milliseconds to determine how long the action should be remembered. Optionally, dontStore can be set to true to prevent the action from being stored in the client. Useful for checking if an action has been fired if you don't intend to fire it.

```javascript
import { actionAlreadyFired } from '@mackenly/zaraz-tools';

const result = actionAlreadyFired(client, 'hello');
console.log(result); // timestamp or null

if (actionAlreadyFired(client, 'hello2', 'page', 1000)) {
    console.log('action already fired');
} else {
    console.log('action not yet fired');
}
```

### sha256
`function sha256( data: string, lowercase: boolean = false): Promise<string>`
> This function takes a string and returns a promise that resolves to the SHA-256 hash of the string. The second parameter is a boolean that determines if the hash should be lowercased before being hashed. By default, the string is not transformed.

```javascript
import { sha256 } from '@mackenly/zaraz-tools';

const hash = await sha256('hello');
console.log(hash); // 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
```

## Context Enrichment Tools
### ZarazContext
`interface ZarazContext`
```typescript
// within a context enricher:
const { system, client, config } = await request.json() as ZarazContext;
```

> Provides a TypeScript type for the Zaraz context object.

## Consent Management Tools
> [!NOTE]
> Coming soon!

## Consent Management React Components
> [!NOTE]  
> Coming soon!

## License
This project is licensed under the Apache 2.0—see the [LICENSE.md](LICENSE.md) file for details.

## Security Policy
To report a security issue please see our [security policy](SECURITY.md).

## Contributing
We welcome contributions! Please see our [contributing guidelines](CONTRIBUTING.md) for more information.

## Sponsorship
If you'd like to support this project, please consider [becoming a sponsor](https://github.com/sponsors/mackenly) and letting me know so I can give you a shoutout here! 🎉 Otherwise, this project is sponsored by [Tricities Media Group](https://tricitiesmediagroup.com) and [Mackenly Jones](https://mackenlyjones.com) which is a Certified Zaraz Developer providing consulting and development services for Zaraz integrations and deployments.