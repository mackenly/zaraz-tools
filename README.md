# Zaraz Tools
Community toolkit package for working and building with Zaraz

> [!CAUTION]
> This package is temporarily in a unstable pre-release state. Please use with caution and report any issues you find.

> [!NOTE]  
> Not sure what Zaraz is? Check out the [Zaraz website](https://www.cloudflare.com/application-services/products/zaraz/) for more information.

This toolkit is broken down into several different tools that can be used to work with Zaraz. The tools types are as follows:
- Mocking / Testing Tools
- Managed Component Utilities
- Context Enrichment Tools *soon*
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
This project uses [Semantic Versioning](https://semver.org/). For the versions available, see the [tags on this repository](https://github.com/mackenly/zaraz-tools/tags). Furthermore, the project is date versioned allowing you to directly import from an older version if you need to while still being able to get the latest version. For example, if you wanted to import the version from 2024-09-19 and the latest, you could do so like this:

```javascript
import { Foo } from '@mackenly/zaraz-tools/2024-09-19';
import { Bar } from '@mackenly/zaraz-tools';
```

This approach is borrowed from the [@cloudflare/workers-types](https://www.npmjs.com/package/@cloudflare/workers-types) package, but rather than defaulting to the oldest version to ensure compatibility, it defaults to the latest version to ensure you get the latest features and bug fixes. This makes explicit versioning opt-in. You can always fix the version by specifying it in your `package.json`.

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
### sha256
`function sha256( data: string, lowercase: boolean = false): Promise<string>`
> This function takes a string and returns a promise that resolves to the SHA-256 hash of the string. The second parameter is a boolean that determines if the hash should be returned in lowercase. By default, the hash is returned in uppercase.

```javascript
import { sha256 } from '@mackenly/zaraz-tools';

const hash = await sha256('hello');
console.log(hash); // 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
```

## Context Enrichment Tools
> [!NOTE]  
> Coming soon!

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