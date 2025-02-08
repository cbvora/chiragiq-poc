---
sidebar_position: 5
---

# Validate Field and type

The `validateRequiredFields` function ensures that an object contains all necessary fields with the expected data types before initializing a chart object.


### Usage

Before initializing a chart object, we need to ensure that certain required fields are present and of the correct type.

#### Required Fields for Chart Initialization

```js
export const chiragIQinitRequiredFields = {
    container: "string",
    symbol: "string",
    fetchHistoryFn: "function",
    fetchSymbolFn: "function"
};
```

#### Example Implementation

```js
const chartOptions = {
    container: "chart-container",
    symbol: "AAPL",
    fetchHistoryFn: () => {},
    fetchSymbolFn: () => {}
};

try {
    validateRequiredFields(chartOptions, chiragIQinitRequiredFields);
    console.log("All required fields are valid.");
} catch (error) {
    console.error(error.message);
}
```

### Example Error Messages

If a required field is missing or has an incorrect type, the function throws an error with a message like:

```text
Invalid properties: The 'container' property is required and must be a string. The 'fetchHistoryFn' property is required and must be a function.
```

This utility is also **exposed to the consumer side**, allowing them to validate any data
