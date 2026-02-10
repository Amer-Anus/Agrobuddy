# AgroBuddy

A modern, mobile-friendly frontend demo website for Indian farmers. "WITHOUT INTERNET ACCESS just GO ON ONE TAP" 

AgroBuddy is an AI-based helper which plays an important role in Rural support and agriculture.

## Features

- 🌾 **Crop Recommendation** - AI-powered crop suggestions based on soil, season, and location
- 🌤️ **Weather Alerts** - Real-time weather updates and climate alerts
- 📊 **Market Price Analysis** - Price trends and selling recommendations
- 💧 **Resource Optimization** - Water and fertilizer optimization plans
- 🔬 **Disease Detection** - Image-based crop disease identification
- 🤖 **AgroBuddy** - Interactive farming assistant
- 🏛️ **Government Schemes** - Find eligible schemes and subsidies

## Tech Stack

- React 18
- React Router DOM (for multi-page navigation)
- Vite (Build Tool)
- Tailwind CSS
- Modern ES6+ JavaScript

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

### Deployment

- The site is automatically built and deployed to GitHub Pages on each push to the `main` branch.
- Live URL: `https://amer-anus.github.io/Agrobuddy/`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
agritech/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CropRecommendation.jsx
│   │   ├── WeatherAlerts.jsx
│   │   ├── MarketPrices.jsx
│   │   ├── ResourceOptimization.jsx
