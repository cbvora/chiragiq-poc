---
sidebar_position: 4
---

# Chart Object Initialisation

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
- **theme** (`string`): [todo] Sets the chart theme (e.g., `"light"` or `"dark"`).
- **disabledIndicators** (`array`): List of indicators to disable (e.g., `['50DMA', '200DMA']`).
- **defaultIndicators** (`array`): List of default indicator to load (e.g., `['50DMA', '200DMA']`).
- **symbolFnDataKeyMap** (`object`): Maps keys for symbol fetching (e.g., `{ valueKey: "symbol", displayKey: "name" }`).
- **range** : Default range of time period is "1y". Choose from `[
                        "1d",
                        "5d",
                        "1mo",
                        "3mo",
                        "6mo",
                        "1y",
                        "2y",
                        "5y",
                        "10y",
                        "ytd",
                        "max"
                    ]` . Please note that, During smoke testing found that "max" is not supported by curerrent API

 - **customIndicators** Add custom your indicator. You need to pass callback funciton which will receive array of closed data value
 ```javascript
    customIndicators: [
        { name: "CMA", display: "Cumulative Moving Average", callbackFn: calculateCMA , color: "#5C6BC0"},
        { name: "150DMA", display: "150 Day Moving Average", key:150, callbackFn: calculateNDayMA , color: "#C6B820"},
    ]
    ```

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

const newChart = new ChartIQ({
    container: "chiragiq_container",
    fullscreen: true,
    theme: "light",
    symbol: "IBM",
    fetchHistoryFn: fetchStockHistory,
    fetchSymbolFn: fetchSymbols,
    symbolFnDataKeyMap : { valueKey: "symbol", displayKey: "name" },
    disabledIndicators: ["50DMA","200DMA"],
    defaultIndicators: ["90DMA","30DMA","50DMA","100DMA"],
    range:"2y",
    customIndicators: [
        { name: "CMA", display: "Cumulative Moving Average", callbackFn: calculateCMA , color: "#5C6BC0"},
        { name: "150DMA", display: "150 Day Moving Average", key:150, callbackFn: calculateNDayMA , color: "#C6B820"},
    ]
});

```


## Event Handling
You can attach event listeners to handle various chart events: You can import `eventCallbackEnum` Enum to see all the supported events

- **onChartReady**: Triggered when the chart is fully initialized.
- **onSymbolChanged**: Fires when the user selects a new stock symbol.
- **onError**: Displays Error messages related to chart actions. You can use `showToast` utils to show it on top right corner as notification.
- **onIndicatorSelected**: Captures when an indicator is added to the chart.

```
newChart.onEvent(eventCallbackEnum.onChartReady, () => console.log("Chart is ready!"));
```
