---
sidebar_position: 3
---

# ChartLoader Utility

The `ChartLoader` class is responsible for managing the loading state of the chart application. It utilizes a `Proxy` object to dynamically update the UI when the loading state changes.

### Example Usage
```js
const loader = new ChartLoader();

// Show loader
loader.setLoading(true);

// Hide loader after 3 seconds
setTimeout(() => {
    loader.setLoading(false);
}, 3000);
```
This ensures that the loader is displayed while the chart data is loading and hidden when the process is complete.

