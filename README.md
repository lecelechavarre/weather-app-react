# Weather App — Real-Time Forecast Dashboard

A modern, responsive Weather Forecast Web Application built with **React** and **TailwindCSS**, integrating the **OpenWeather API** for live weather data.  

This project demonstrates production-ready frontend architecture, API integration, environment-based configuration, and performance-aware development using **Vite**.

---

## 1. Purpose

The Weather App is designed to:

- Provide users with real-time weather information for any city worldwide  
- Serve as a demonstration of integrating third-party APIs in a React + Vite environment  
- Showcase best practices in responsive UI design, environment management, and state handling  
- Enable scalable expansion for additional features like multi-city dashboards, forecast charts, or notifications  

This app prioritizes:

- Maintainable frontend architecture  
- Clean, responsive design  
- Efficient API usage and state management  
- Minimal dependency overhead  

---

## 2. Architecture Overview

```
Browser (React SPA)
       │
       ▼
React Components
 ├─ SearchBar → triggers API request
 ├─ WeatherCard → displays current weather
 ├─ WeatherDetails → temperature, humidity, wind
 └─ IconDisplay → dynamic weather icon
       │
       ▼
OpenWeather API (REST)
       │
       ▼
State Management (React useState / Context)
       │
       ▼
UI Rendering (TailwindCSS)
```

### Component Responsibilities

| Component / Layer | Responsibility |
|------------------|----------------|
| `SearchBar` | Accepts user input for city search |
| `WeatherCard` | Displays primary weather info: temp, icon, city |
| `WeatherDetails` | Additional metrics: humidity, wind speed, description |
| `IconDisplay` | Dynamically selects weather icon based on API response |
| `App` | Top-level state management and API orchestration |
| `TailwindCSS` | Styling, responsive layout, and utility classes |
| `Vite` | Development server, HMR, build optimization |

---

## 3. Features

- Search any city worldwide  
- Display current temperature  
- Weather condition and description  
- Humidity metrics  
- Wind speed  
- City name with dynamic weather icon  
- Responsive layout (mobile, tablet, desktop)  
- Environment variable support for API keys  
- Fast dev and production builds using **Vite + React**

---

## 4. Data Model / API Contract

### OpenWeather API Response Example (Current Weather)

```json
{
  "coord": { "lon": -0.1257, "lat": 51.5085 },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "main": {
    "temp": 16.3,
    "feels_like": 15.5,
    "humidity": 72
  },
  "wind": { "speed": 3.6 },
  "name": "London",
  "dt": 1676527200
}
```

### Mapping to UI

| API Field | UI Component |
|-----------|--------------|
| `name` | City name display |
| `main.temp` | Current temperature |
| `weather[0].description` | Weather condition text |
| `weather[0].icon` | IconDisplay component |
| `main.humidity` | Humidity display |
| `wind.speed` | Wind speed display |

---

## 5. Tech Stack

| Technology | Role / Responsibility |
|------------|----------------------|
| **React.js** | Frontend UI, state management |
| **Vite** | Dev server, HMR, optimized builds |
| **TailwindCSS** | Responsive styling and utility-first CSS |
| **OpenWeather API** | Provides real-time weather data |
| **ESLint / Prettier** | Code quality and formatting |

---

## 6. Requirements

- Node.js v16+  
- npm v8+  
- Modern web browser (Chrome, Firefox, Edge, Safari)  

---

## 7. Setup & Running

### 7.1 Install Dependencies

```bash
# Navigate to project folder
cd weather-app

# Install dependencies
npm install
```

### 7.2 Environment Variables

Create a `.env` file in the project root:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

> ⚠ Keep `.env` files secret. Do not commit API keys to source control.

### 7.3 Start Development Server

```bash
npm run dev
```

Access the app at: `http://localhost:5173/` (default Vite port)

### 7.4 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy to:

- Netlify / Vercel / Surge  
- Static hosting / CDN  
- Docker container

---

## 8. Error Handling & UX

- **Invalid city input:** Displays user-friendly message  
- **API failure / rate limit:** Fallback UI indicates unavailable data  
- **Loading states:** Spinner while fetching API data  
- **Responsive design:** Maintains layout across all screen sizes  

---

## 9. Performance & Optimization

- **Vite HMR** for fast development  
- **Tailwind JIT mode** for minimal CSS bundle  
- **Conditional rendering** to reduce unnecessary re-renders  
- **API request debouncing** to avoid excessive calls  

---

## 10. Testing & Code Quality

- ESLint + Prettier configured for code consistency  
- Components structured for unit testing with React Testing Library (optional)  
- Manual test coverage recommended for API integration  

---

## 11. Known Limitations

- Single-city search at a time  
- No caching of previous API results  
- Limited to current weather (no forecast graphs yet)  
- No authentication / multi-user support  

---

## 12. Future Enhancements

- Multi-city dashboard  
- 7-day forecast and charts  
- Local storage caching for offline access  
- User preferences (temperature units, theme)  
- Automated API retries and error logging  
- Integration with state management libraries (Zustand / Redux)  

---

## 13. Project Structure

```
weather-app/
├─ src/
│  ├─ components/
│  │  ├─ SearchBar.jsx
│  │  ├─ WeatherCard.jsx
│  │  └─ WeatherDetails.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ public/
│  └─ index.html
├─ .env
├─ package.json
├─ tailwind.config.js
└─ vite.config.js
```

---

## 14. License

This project is intended for educational and demonstration purposes.  
For commercial use, obtain the necessary API license from OpenWeather.
