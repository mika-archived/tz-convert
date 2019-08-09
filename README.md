# tz-convert

[![GitHub](https://img.shields.io/github/license/mika-f/tz-convert?style=flat-square)](./LICENSE)
![CircleCI](https://img.shields.io/circleci/build/github/mika-f/tz-convert.svg?style=flat-square)
[![npm (scoped)](https://img.shields.io/npm/v/@mikazuki/tz-convert?style=flat-square)](https://www.npmjs.com/package/@mikazuki/tz-convert)

Convert timezones between [Microsoft Timezone Index Values](https://docs.microsoft.com/ja-jp/windows-hardware/manufacture/desktop/default-time-zones) and [IANA Time Zone](https://www.iana.org/time-zones).

## Install

```
yarn add @mikazuki/tz-convert
```

CDN : [UNPKG](https://unpkg.com/@mikazuki/tz-convert) | [jsDelivr](https://cdn.jsdelivr.net/npm/@mikazuki/tz-convert)

## How to use

### In Browser

```html
<script src="https://cdn.jsdelivr.net/npm/@mikazuki/tz-convert"></script>
<script>
  console.log(window.TzConvert.ianaToWindows("Asia/Tokyo")); // => Tokyo Standard Time
  console.log(window.TzConvert.windowsToIana("Tokyo Standard Time")); // => Asia/Tokyo
</script>
```

### In Node.js

```typescript
import { ianaToWindows, windowsToIana } from "@mikazuki/tz-convert";

ianaToWindows("Asia/Tokyo"); // => Tokyo Standard Time
windowsToIana("Tokyo Standard Time"); // => Asia/Tokyo
```

If you want to see real-world example?  
Please check-out [Knockru/Crouton](https://github.com/Knockru/Crouton) repository!

## Notes

This library is used Unicode CLDR as first data source.
