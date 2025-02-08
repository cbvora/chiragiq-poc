---
sidebar_position: 3
---

# useSearchModal Hook

Modal based search UI, inspired from react custom hook

## Features
-  Plug in your own symbol data and key mappings.
-  Navigate results using arrow keys and select with Enter.
-  Easily update symbol data dynamically.

###  Initialize the Hook

Import and use the `useSearchModal` function with your **baseId** and initial data:

```js
const { openModal, closeModal, updateSymbolsData } = useSearchModal(
    "symbolSearchModal",
    initialSymbols,
    (selectedSymbol) => {
        console.log("Symbol selected:", selectedSymbol);
    },
    { valueKey: "symbol", displayKey: "name" }
);

```

### Hook Return Values
The `useSearchModal` hook returns the following functions:

- `openModal` → Opens the symbol search modal programmatically.
- `closeModal` → Closes the modal.
- `updateSymbolsData(newSymbols)` → Updates the list of symbols dynamically.


## Customization
If your Symbol API data does not match the expected format, update the **keyMap settings** accordingly.  

### ✅ Expected Data Format:  
```js
[{ symbol: "AAPL", name: "Apple US" }]
```

### ❌ Non-Matching Data Example:  
```js
[{ symbolCode: "AAPL", symbolName: "Apple Inc." }]
```

### ✅ Adjusted Key Mapping:  
```js
{ valueKey: "symbolCode", displayKey: "symbolName" }