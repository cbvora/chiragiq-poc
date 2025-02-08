---
sidebar_position: 1
---

# What is ChiragIQ

ChiragIQ, built using plain JavaScript and HTML5, delivering flexible charting library. With a plug-and-play setup and zero external dependencies, it ensures a lightweight, scalable, and seamless integration with any timeseries data API. 🚀📈

## Getting Started
- No third-party libraries used. A local server is needed to unlock ES6 and modular architecture.

# Live Server Setup in VSCode

## 🔹 Installation  
1. Open **VSCode**.  
2. Go to the **Extensions** panel (`Cmd+Shift+X` on Mac).  
3. Search for **"Live Server"** by **Ritwick Dey**.  
4. Click **Install**.

## 🚀 Usage  
1. Open an **ChiragIQ** directory in VSCode.  
2. Right-click on **chart-template.html** and click on **"Open with Live Server"**.  
3. Done! You should see it opened in browser.  


## CORS Issue 
The API used for fetching symbol history is not publicly exposed. To bypass CORS restrictions. Follow either of the way

## 1. Option 1
- Using proxy: Visit [CORS Anywhere](https://cors-anywhere.herokuapp.com/corsdemo) and click **Request temporary access to the demo server**.

**OR**
## 2. Option 2
- Install a Chrome Extension:  
  - [Allow CORS: Access-Control-Allow-Origin](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en).  
  - Open the extension and click on the **C** icon in the left panel.  
  - It will turn **orange**, indicating that CORS is now bypassed. Done!
