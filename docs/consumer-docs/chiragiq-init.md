---
sidebar_position: 9
---

# ChiragIQ Chart Object Initialisation

Way to Initialise Chart

## Required Configuration Keys
When initializing a `ChiragIQ` instance, the following keys are mandatory:
- **container** (`string`): The ID of the HTML element where the chart will be rendered.
- **symbol** (`string`): The default stock symbol to display.
- **fetchHistoryFn** (`function`): Function to fetch historical stock data.
- **fetchSymbolFn** (`function`): Function to fetch available stock symbols.

## Optional Configuration Keys
In addition to required fields, `ChiragIQ` accepts several optional settings:
- **fullscreen** (`boolean`): Enables fullscreen mode for the chart.
- **theme** (`string`): Sets the chart theme (e.g., `"light"` or `"dark"`).
- **disabledIndicators** (`array`): List of indicators to disable (e.g., `['50DMA', '200DMA']`).
- **symbolFnDataKeyMap** (`object`): Maps keys for symbol fetching (e.g., `{ valueKey: "symbol", displayKey: "name" }`).



### Example Usage with Static Data
Here’s a basic example of using `ChiragIQ` with static data:

```javascript
const staticHistory = [
    { date: "2024-02-01", open: 150, high: 155, low: 148, close: 153, volume: 10000 },
    { date: "2024-02-02", open: 153, high: 158, low: 152, close: 156, volume: 12000 },
];

const staticSymbols = [
    { symbol: "AAPL", name: "Apple Inc." },
    { symbol: "TSLA", name: "Tesla Inc." }
];

const newChart = new ChiragIQ({
    container: "chiragiq_container",
    symbol: "AAPL",
    fetchHistoryFn: () => Promise.resolve(staticHistory),
    fetchSymbolFn: () => Promise.resolve(staticSymbols),
    theme: "dark", // to-do
    fullscreen: true,
    disabledIndicators: ["50DMA","200DMA"],
    symbolFnDataKeyMap : { valueKey: "symbol", displayKey: "name" }
});

```


## Event Handling
You can attach event listeners to handle various chart events:

- **onChartReady**: Triggered when the chart is fully initialized.
- **onSymbolChanged**: Fires when the user selects a new stock symbol.
- **onError**: Displays Error messages related to chart actions. You can use `showToast` utils to show it on top right corner as notification.
- **onIndicatorSelected**: Captures when an indicator is added to the chart.

```
newChart.onEvent(eventCallbackEnum.onChartReady, () => console.log("Chart is ready!"));
```
