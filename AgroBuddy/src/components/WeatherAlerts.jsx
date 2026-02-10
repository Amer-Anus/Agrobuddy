import React, { useState } from 'react'

const WeatherAlerts = () => {
  const [selectedLocation, setSelectedLocation] = useState('mumbai')
  const [viewMode, setViewMode] = useState('today') // 'today', 'forecast', 'hourly'

  // Enhanced weather data optimized for current December 2024 climate patterns
  const weatherData = {
    mumbai: {
      current: {
        temperature: 28,
        feelsLike: 30,
        rainfall: 2,
        humidity: 58,
        windSpeed: 14,
        windDirection: 'NW',
        pressure: 1015,
        uvIndex: 6,
        visibility: 12,
        condition: 'Partly Cloudy',
        icon: '⛅',
      },
      alerts: [
        {
          type: 'Wind',
          severity: 'low',
          message: 'Moderate winds expected. Secure temporary structures and protect young plants.',
          validUntil: '2024-12-20',
          recommendations: ['Secure greenhouse covers', 'Protect young seedlings', 'Avoid spraying in windy conditions'],
        },
      ],
      forecast: [
        { day: 'Today', date: 'Dec 18', high: 29, low: 20, condition: 'Partly Cloudy', icon: '⛅', rain: '2mm', wind: '14 km/h' },
        { day: 'Tomorrow', date: 'Dec 19', high: 30, low: 21, condition: 'Sunny', icon: '☀️', rain: '0mm', wind: '12 km/h' },
        { day: 'Thu', date: 'Dec 20', high: 31, low: 22, condition: 'Sunny', icon: '☀️', rain: '0mm', wind: '11 km/h' },
        { day: 'Fri', date: 'Dec 21', high: 30, low: 21, condition: 'Partly Cloudy', icon: '⛅', rain: '1mm', wind: '13 km/h' },
        { day: 'Sat', date: 'Dec 22', high: 29, low: 20, condition: 'Cloudy', icon: '☁️', rain: '3mm', wind: '15 km/h' },
        { day: 'Sun', date: 'Dec 23', high: 28, low: 19, condition: 'Light Rain', icon: '🌦️', rain: '8mm', wind: '16 km/h' },
        { day: 'Mon', date: 'Dec 24', high: 29, low: 20, condition: 'Partly Cloudy', icon: '⛅', rain: '2mm', wind: '14 km/h' },
      ],
      hourly: [
        { time: 'Now', temp: 28, icon: '⛅', rain: '5%' },
        { time: '2 PM', temp: 29, icon: '☀️', rain: '0%' },
        { time: '4 PM', temp: 28, icon: '⛅', rain: '5%' },
        { time: '6 PM', temp: 26, icon: '⛅', rain: '10%' },
        { time: '8 PM', temp: 24, icon: '🌙', rain: '15%' },
        { time: '10 PM', temp: 23, icon: '🌙', rain: '20%' },
        { time: '12 AM', temp: 22, icon: '🌙', rain: '25%' },
        { time: '2 AM', temp: 21, icon: '🌙', rain: '20%' },
        { time: '4 AM', temp: 20, icon: '🌙', rain: '15%' },
        { time: '6 AM', temp: 21, icon: '⛅', rain: '10%' },
        { time: '8 AM', temp: 24, icon: '⛅', rain: '5%' },
        { time: '10 AM', temp: 27, icon: '☀️', rain: '0%' },
      ],
      farmingRecommendations: {
        bestSowingTime: 'Dec 19-21 (Optimal dry weather window)',
        irrigation: 'Normal irrigation schedule. Light rain expected on Dec 22-23, reduce irrigation accordingly.',
        harvesting: 'Excellent conditions for harvesting throughout the week. Avoid Dec 23 due to light rain.',
        pesticide: 'Good weather for pesticide application on Dec 19-21 (dry, low wind)',
        fertilizer: 'Ideal conditions for fertilizer application on Dec 19-21',
      },
    },
    delhi: {
      current: {
        temperature: 15,
        feelsLike: 13,
        rainfall: 0,
        humidity: 52,
        windSpeed: 6,
        windDirection: 'NW',
        pressure: 1022,
        uvIndex: 3,
        visibility: 8,
        condition: 'Foggy',
        icon: '🌫️',
      },
      alerts: [
        {
          type: 'Frost',
          severity: 'moderate',
          message: 'Cold wave conditions with frost expected in early morning hours (Dec 19-20). Minimum temperature may drop to 4-6°C. Protect sensitive crops and young plants.',
          validUntil: '2024-12-20',
          recommendations: ['Cover young plants with cloth/plastic', 'Use frost protection methods', 'Delay early morning irrigation (after 9 AM)', 'Harvest sensitive crops before frost'],
        },
        {
          type: 'Fog',
          severity: 'moderate',
          message: 'Dense fog expected in early morning hours affecting visibility. Delay field operations until fog clears.',
          validUntil: '2024-12-19',
          recommendations: ['Avoid early morning field work', 'Use fog lights if necessary', 'Postpone harvesting until visibility improves'],
        },
      ],
      forecast: [
        { day: 'Today', date: 'Dec 18', high: 18, low: 6, condition: 'Foggy', icon: '🌫️', rain: '0mm', wind: '6 km/h' },
        { day: 'Tomorrow', date: 'Dec 19', high: 17, low: 5, condition: 'Frost', icon: '❄️', rain: '0mm', wind: '5 km/h' },
        { day: 'Thu', date: 'Dec 20', high: 19, low: 6, condition: 'Foggy', icon: '🌫️', rain: '0mm', wind: '7 km/h' },
        { day: 'Fri', date: 'Dec 21', high: 20, low: 7, condition: 'Sunny', icon: '☀️', rain: '0mm', wind: '8 km/h' },
        { day: 'Sat', date: 'Dec 22', high: 21, low: 8, condition: 'Sunny', icon: '☀️', rain: '0mm', wind: '9 km/h' },
        { day: 'Sun', date: 'Dec 23', high: 22, low: 9, condition: 'Partly Cloudy', icon: '⛅', rain: '0mm', wind: '10 km/h' },
        { day: 'Mon', date: 'Dec 24', high: 21, low: 8, condition: 'Sunny', icon: '☀️', rain: '0mm', wind: '8 km/h' },
      ],
      hourly: [
        { time: 'Now', temp: 15, icon: '🌫️', rain: '0%' },
        { time: '2 PM', temp: 17, icon: '☀️', rain: '0%' },
        { time: '4 PM', temp: 15, icon: '☀️', rain: '0%' },
        { time: '6 PM', temp: 12, icon: '🌙', rain: '0%' },
        { time: '8 PM', temp: 9, icon: '🌙', rain: '0%' },
        { time: '10 PM', temp: 7, icon: '🌙', rain: '0%' },
        { time: '12 AM', temp: 6, icon: '❄️', rain: '0%' },
        { time: '2 AM', temp: 5, icon: '❄️', rain: '0%' },
        { time: '4 AM', temp: 5, icon: '❄️', rain: '0%' },
        { time: '6 AM', temp: 6, icon: '🌫️', rain: '0%' },
        { time: '8 AM', temp: 9, icon: '🌫️', rain: '0%' },
        { time: '10 AM', temp: 13, icon: '☀️', rain: '0%' },
      ],
      farmingRecommendations: {
        bestSowingTime: 'Dec 21-24 (Warmer days, frost-free)',
        irrigation: 'Water in late morning (after 10 AM) to avoid frost damage. Reduce frequency in cold weather.',
        harvesting: 'Excellent conditions for harvesting on Dec 21-24. Avoid early morning due to fog/frost.',
        pesticide: 'Apply pesticides during late morning hours (10 AM - 2 PM) when temperature is above 15°C',
        fertilizer: 'Good conditions for fertilizer application on Dec 21-24. Apply during warmer hours.',
      },
    },
    bangalore: {
      current: {
        temperature: 24,
        feelsLike: 25,
        rainfall: 1,
        humidity: 65,
        windSpeed: 9,
        windDirection: 'NE',
        pressure: 1016,
        uvIndex: 5,
        visibility: 14,
        condition: 'Partly Cloudy',
        icon: '⛅',
      },
      alerts: [],
      forecast: [
        { day: 'Today', date: 'Dec 18', high: 25, low: 16, condition: 'Partly Cloudy', icon: '⛅', rain: '1mm', wind: '9 km/h' },
        { day: 'Tomorrow', date: 'Dec 19', high: 26, low: 17, condition: 'Sunny', icon: '☀️', rain: '0mm', wind: '8 km/h' },
        { day: 'Thu', date: 'Dec 20', high: 27, low: 17, condition: 'Sunny', icon: '☀️', rain: '0mm', wind: '9 km/h' },
        { day: 'Fri', date: 'Dec 21', high: 26, low: 16, condition: 'Partly Cloudy', icon: '⛅', rain: '2mm', wind: '10 km/h' },
        { day: 'Sat', date: 'Dec 22', high: 25, low: 16, condition: 'Cloudy', icon: '☁️', rain: '5mm', wind: '11 km/h' },
        { day: 'Sun', date: 'Dec 23', high: 24, low: 15, condition: 'Light Rain', icon: '🌦️', rain: '8mm', wind: '12 km/h' },
        { day: 'Mon', date: 'Dec 24', high: 25, low: 16, condition: 'Partly Cloudy', icon: '⛅', rain: '2mm', wind: '10 km/h' },
      ],
      hourly: [
        { time: 'Now', temp: 24, icon: '⛅', rain: '10%' },
        { time: '2 PM', temp: 25, icon: '☀️', rain: '5%' },
        { time: '4 PM', temp: 24, icon: '⛅', rain: '10%' },
        { time: '6 PM', temp: 22, icon: '⛅', rain: '15%' },
        { time: '8 PM', temp: 20, icon: '🌙', rain: '20%' },
        { time: '10 PM', temp: 18, icon: '🌙', rain: '25%' },
        { time: '12 AM', temp: 17, icon: '🌙', rain: '30%' },
        { time: '2 AM', temp: 16, icon: '🌙', rain: '25%' },
        { time: '4 AM', temp: 16, icon: '🌙', rain: '20%' },
        { time: '6 AM', temp: 17, icon: '⛅', rain: '15%' },
        { time: '8 AM', temp: 19, icon: '⛅', rain: '10%' },
        { time: '10 AM', temp: 22, icon: '☀️', rain: '5%' },
      ],
      farmingRecommendations: {
        bestSowingTime: 'Dec 19-21 (Pleasant weather, minimal rain)',
        irrigation: 'Normal irrigation schedule. Light rain expected on Dec 22-23, reduce irrigation accordingly.',
        harvesting: 'Excellent conditions for harvesting on Dec 19-21. Avoid Dec 23 due to light rain.',
        pesticide: 'Optimal weather for pesticide application on Dec 19-21 (dry, calm conditions)',
        fertilizer: 'Ideal conditions for fertilizer application on Dec 19-21',
      },
    },
    hyderabad: {
      current: {
        temperature: 27,
        feelsLike: 28,
        rainfall: 0,
        humidity: 48,
        windSpeed: 10,
        windDirection: 'NE',
        pressure: 1017,
        uvIndex: 6,
        visibility: 15,
        condition: 'Sunny',
        icon: '☀️',
      },
      alerts: [
        {
          type: 'Dry Weather',
          severity: 'low',
          message: 'Dry conditions expected. Ensure adequate irrigation for crops, especially during peak hours.',
          validUntil: '2024-12-21',
          recommendations: ['Increase irrigation frequency', 'Mulch soil to retain moisture', 'Water during early morning or evening'],
        },
      ],
      forecast: [
        { day: 'Today', date: 'Dec 18', high: 28, low: 17, condition: 'Sunny', icon: '☀️', rain: '0mm', wind: '10 km/h' },
        { day: 'Tomorrow', date: 'Dec 19', high: 29, low: 18, condition: 'Sunny', icon: '☀️', rain: '0mm', wind: '11 km/h' },
        { day: 'Thu', date: 'Dec 20', high: 30, low: 18, condition: 'Sunny', icon: '☀️', rain: '0mm', wind: '10 km/h' },
        { day: 'Fri', date: 'Dec 21', high: 29, low: 17, condition: 'Partly Cloudy', icon: '⛅', rain: '0mm', wind: '12 km/h' },
        { day: 'Sat', date: 'Dec 22', high: 28, low: 16, condition: 'Cloudy', icon: '☁️', rain: '2mm', wind: '13 km/h' },
        { day: 'Sun', date: 'Dec 23', high: 27, low: 16, condition: 'Light Rain', icon: '🌦️', rain: '5mm', wind: '14 km/h' },
        { day: 'Mon', date: 'Dec 24', high: 28, low: 17, condition: 'Partly Cloudy', icon: '⛅', rain: '1mm', wind: '12 km/h' },
      ],
      hourly: [
        { time: 'Now', temp: 27, icon: '☀️', rain: '0%' },
        { time: '2 PM', temp: 28, icon: '☀️', rain: '0%' },
        { time: '4 PM', temp: 27, icon: '☀️', rain: '0%' },
        { time: '6 PM', temp: 24, icon: '⛅', rain: '0%' },
        { time: '8 PM', temp: 21, icon: '🌙', rain: '0%' },
        { time: '10 PM', temp: 19, icon: '🌙', rain: '0%' },
        { time: '12 AM', temp: 18, icon: '🌙', rain: '0%' },
        { time: '2 AM', temp: 17, icon: '🌙', rain: '0%' },
        { time: '4 AM', temp: 17, icon: '🌙', rain: '0%' },
        { time: '6 AM', temp: 18, icon: '⛅', rain: '0%' },
        { time: '8 AM', temp: 21, icon: '☀️', rain: '0%' },
        { time: '10 AM', temp: 25, icon: '☀️', rain: '0%' },
      ],
      farmingRecommendations: {
        bestSowingTime: 'Dec 19-21 (Pleasant weather, ideal for sowing)',
        irrigation: 'Maintain regular irrigation schedule. Dry conditions require consistent watering, especially for young crops.',
        harvesting: 'Excellent conditions for harvesting throughout the week. Best time: early morning (6-9 AM)',
        pesticide: 'Optimal weather for pesticide application on Dec 19-21 (dry, calm conditions)',
        fertilizer: 'Ideal conditions for fertilizer application on Dec 19-21. Water after application.',
      },
    },
  }

  const currentData = weatherData[selectedLocation]

  const getAlertColor = (alertType, severity) => {
    const colors = {
      rain: { moderate: 'bg-blue-100 border-blue-500 text-blue-800', high: 'bg-blue-200 border-blue-600 text-blue-900' },
      heatwave: { moderate: 'bg-orange-100 border-orange-500 text-orange-800', high: 'bg-red-200 border-red-600 text-red-900' },
      drought: { moderate: 'bg-yellow-100 border-yellow-500 text-yellow-800', high: 'bg-orange-200 border-orange-600 text-orange-900' },
      frost: { low: 'bg-cyan-100 border-cyan-500 text-cyan-800', moderate: 'bg-cyan-200 border-cyan-600 text-cyan-900', high: 'bg-blue-200 border-blue-600 text-blue-900' },
      storm: { moderate: 'bg-purple-100 border-purple-500 text-purple-800', high: 'bg-purple-200 border-purple-600 text-purple-900' },
      wind: { low: 'bg-gray-100 border-gray-500 text-gray-800', moderate: 'bg-gray-200 border-gray-600 text-gray-900' },
      fog: { low: 'bg-gray-100 border-gray-500 text-gray-800', moderate: 'bg-gray-200 border-gray-600 text-gray-900', high: 'bg-gray-300 border-gray-700 text-gray-900' },
      'dry weather': { low: 'bg-yellow-100 border-yellow-500 text-yellow-800', moderate: 'bg-orange-100 border-orange-500 text-orange-800' },
    }
    return colors[alertType.toLowerCase()]?.[severity] || 'bg-yellow-100 border-yellow-500 text-yellow-800'
  }

  const getUVIndexColor = (uv) => {
    if (uv <= 2) return 'text-green-600 bg-green-100'
    if (uv <= 5) return 'text-yellow-600 bg-yellow-100'
    if (uv <= 7) return 'text-orange-600 bg-orange-100'
    if (uv <= 10) return 'text-red-600 bg-red-100'
    return 'text-purple-600 bg-purple-100'
  }

  const getUVIndexLabel = (uv) => {
    if (uv <= 2) return 'Low'
    if (uv <= 5) return 'Moderate'
    if (uv <= 7) return 'High'
    if (uv <= 10) return 'Very High'
    return 'Extreme'
  }

  return (
    <section
      id="weather"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-agri-bg to-agri-bg"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-agri-green mb-4">
            🌤️ Weather & Climate Alerts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real-time weather updates and climate alerts for your farming decisions
          </p>
          <p className="text-sm text-gray-500 mt-3 max-w-2xl mx-auto">
            ⚠️ Note: Weather data shown is for demonstration purposes. For accurate real-time weather information, please check official meteorological department websites (IMD) or local weather services.
          </p>
        </div>

        {/* Location Selector */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Location
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent text-lg"
            >
              <option value="mumbai">Mumbai, Maharashtra</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore, Karnataka</option>
              <option value="hyderabad">Hyderabad, Telangana</option>
            </select>
          </div>
        </div>

        {/* View Mode Tabs */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-white rounded-lg p-2 shadow-md flex gap-2">
            <button
              onClick={() => setViewMode('today')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                viewMode === 'today'
                  ? 'bg-agri-green text-white shadow-md'
                  : 'text-gray-700 hover:bg-agri-bg'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setViewMode('forecast')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                viewMode === 'forecast'
                  ? 'bg-agri-green text-white shadow-md'
                  : 'text-gray-700 hover:bg-agri-bg'
              }`}
            >
              7-Day Forecast
            </button>
            <button
              onClick={() => setViewMode('hourly')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                viewMode === 'hourly'
                  ? 'bg-agri-green text-white shadow-md'
                  : 'text-gray-700 hover:bg-agri-bg'
              }`}
            >
              Hourly
            </button>
          </div>
        </div>

        {/* Current Weather - Today View */}
        {viewMode === 'today' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Main Weather Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <div className="text-6xl mb-2">{currentData.current.icon}</div>
                  <div className="text-6xl font-bold mb-2">{currentData.current.temperature}°C</div>
                  <div className="text-xl opacity-90">Feels like {currentData.current.feelsLike}°C</div>
                  <div className="text-lg mt-2">{currentData.current.condition}</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl mb-1">💧</div>
                    <div className="text-sm opacity-90">Humidity</div>
                    <div className="text-2xl font-bold">{currentData.current.humidity}%</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl mb-1">🌬️</div>
                    <div className="text-sm opacity-90">Wind</div>
                    <div className="text-2xl font-bold">{currentData.current.windSpeed} km/h</div>
                    <div className="text-xs opacity-75">{currentData.current.windDirection}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="text-3xl mb-2">🌧️</div>
                <p className="text-sm text-gray-600 mb-1">Rainfall</p>
                <p className="text-2xl font-bold text-agri-green">{currentData.current.rainfall}mm</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="text-3xl mb-2">📊</div>
                <p className="text-sm text-gray-600 mb-1">Pressure</p>
                <p className="text-2xl font-bold text-agri-green">{currentData.current.pressure} hPa</p>
              </div>
              <div className={`bg-white rounded-lg p-4 shadow-md text-center ${getUVIndexColor(currentData.current.uvIndex)}`}>
                <div className="text-3xl mb-2">☀️</div>
                <p className="text-sm mb-1">UV Index</p>
                <p className="text-2xl font-bold">{currentData.current.uvIndex}</p>
                <p className="text-xs">{getUVIndexLabel(currentData.current.uvIndex)}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="text-3xl mb-2">👁️</div>
                <p className="text-sm text-gray-600 mb-1">Visibility</p>
                <p className="text-2xl font-bold text-agri-green">{currentData.current.visibility} km</p>
              </div>
            </div>

            {/* Alerts */}
            {currentData.alerts.length > 0 && (
              <div className="space-y-4">
                {currentData.alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`border-2 rounded-lg p-5 ${getAlertColor(alert.type, alert.severity)}`}
                  >
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">⚠️</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-xl">{alert.type} Alert</h4>
                          <span className="text-xs bg-white/50 px-2 py-1 rounded">Valid until: {alert.validUntil}</span>
                        </div>
                        <p className="mb-3">{alert.message}</p>
                        <div className="mt-3 pt-3 border-t border-current/20">
                          <p className="font-semibold mb-2">Recommendations:</p>
                          <ul className="list-disc list-inside space-y-1">
                            {alert.recommendations.map((rec, i) => (
                              <li key={i} className="text-sm">{rec}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Farming Recommendations */}
            <div className="bg-gradient-to-br from-green-50 to-agri-bg rounded-xl p-6 shadow-md border-2 border-green-200">
              <h3 className="text-2xl font-bold text-agri-green mb-4 flex items-center">
                <span className="mr-2">🌾</span> Farming Recommendations
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">🌱 Best Sowing Time</p>
                  <p className="text-lg font-semibold text-agri-green">{currentData.farmingRecommendations.bestSowingTime}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">💧 Irrigation</p>
                  <p className="text-lg font-semibold text-gray-800">{currentData.farmingRecommendations.irrigation}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">🌾 Harvesting</p>
                  <p className="text-lg font-semibold text-gray-800">{currentData.farmingRecommendations.harvesting}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">🧪 Pesticide Application</p>
                  <p className="text-lg font-semibold text-gray-800">{currentData.farmingRecommendations.pesticide}</p>
                </div>
                <div className="bg-white rounded-lg p-4 md:col-span-2">
                  <p className="text-sm text-gray-600 mb-1">🌿 Fertilizer Application</p>
                  <p className="text-lg font-semibold text-gray-800">{currentData.farmingRecommendations.fertilizer}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 7-Day Forecast View */}
        {viewMode === 'forecast' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">7-Day Weather Forecast</h3>
              <div className="space-y-3">
                {currentData.forecast.map((day, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-agri-bg to-white rounded-lg hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="text-center w-20">
                        <div className="text-2xl mb-1">{day.icon}</div>
                        <div className="text-xs text-gray-600">{day.day}</div>
                        <div className="text-xs text-gray-500">{day.date}</div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg text-gray-800">{day.condition}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          <span className="mr-4">🌧️ {day.rain}</span>
                          <span>🌬️ {day.wind}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-agri-green">{day.high}°</div>
                      <div className="text-lg text-gray-500">{day.low}°</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hourly Forecast View */}
        {viewMode === 'hourly' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">24-Hour Forecast</h3>
              <div className="overflow-x-auto">
                <div className="flex space-x-4 pb-4">
                  {currentData.hourly.map((hour, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-20 text-center bg-agri-bg rounded-lg p-3 hover:bg-green-100 transition-colors"
                    >
                      <div className="text-sm font-semibold text-gray-700 mb-2">{hour.time}</div>
                      <div className="text-3xl mb-2">{hour.icon}</div>
                      <div className="text-xl font-bold text-agri-green mb-1">{hour.temp}°</div>
                      <div className="text-xs text-blue-600">{hour.rain}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default WeatherAlerts

