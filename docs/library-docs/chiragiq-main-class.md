---
sidebar_position: 6
---

# ChiragIQ JavaScript SDK

The `ChiragIQ` class is the foundation of the charting system, handling key functionalities securely and efficiently:

- **Symbol & Data Management**: Fetches symbols and historical data dynamically.
- **Event Handling**: Uses `EventManager` for seamless communication.
- **Indicator Integration**: Loads and manages technical indicators.
- **Strict Validation**: Ensures proper initialization via `validateRequiredFields`.
- **Encapsulation**: Uses private fields (`#symbol`, `#container`, etc.) to prevent direct modifications.
- **Error Handling**: Gracefully handles invalid symbols and runtime issues.
- **CSV Export**: Allows exporting chart data for analysis.
- **Modular & Extensible**: Designed for easy customization and scalability.
