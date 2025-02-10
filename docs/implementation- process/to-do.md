---
sidebar_position: 5
---

# To-Do list/ Planning notes

Received the task on **3rd Feb (Monday) evening**: Analyzed the requirements and slept over it. 

A sentence from task details —**"Doesn't need to be fancy. Just want to get a sense of your coding style. But if you want to get fancy, please do 😊"**— `motivated` me to go the extra mile and create it with best architecture


1. Auto Complete - search and select symbol
2. Resolve symbol with some extra details from UI
3. 20 Days, 30 Days and N days Moving average. where N is dynamic. Search and select indicators
4. Config object should be similiar to TV chart or ChartIQ init object
5. Develop few web components. one case: tooltip for what's MA 
6. Use modular design pattern for code reusability. Export/ Imoprt module
7. Market Data - Date sould support both string and date object
8. Use OHLC data source format
9. Zoom in and out, Scrollable and responsive
10. A11y support
11. Should be able to add multiple indicators.
12. on Change of symbol, indicators should get adjusted automatically
13. Proper ReadMe on config/init object structure.
14. User can use any Data source, So it should be plug and play. Inject custom data transformation function.
15. Expression +, -, *, / support ??
16. Custom indicator add support from init/config object
17. Dark/Light Theme
18. Full Screen
19. Download Image
20. Download/Export CSV data
21. Few type of chart, like Bar, Line, Candle, Area
22. Integrate in Mobile using webview
23. Setup CI/CD, PR merge should trigger git pull and use netlify to host
24. Multiple Environemnt of API support
25. Change URL on change on symbol, interval and moving average. So user can share URL
26. API response type supports 2 type.
27. Keyboard shortcuts to open symbol and indicator search modal
28. History and Symbol API response validation. 
29. Symbol API data should be acceptable with given set of keys

API: 
https://query1.finance.yahoo.com/v8/finance/chart/AAPL?events=capitalGain%7Cdiv%7Csplit&formatted=true&includeAdjustedClose=false&interval=1d&range=1y&symbol=AAPL&userYfid=true&lang=en-US&region=US
    
CORS: https://cors-anywhere.herokuapp.com/corsdemo