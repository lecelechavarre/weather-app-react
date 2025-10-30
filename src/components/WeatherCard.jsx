export default function WeatherCard({ data }) {
  if (!data) return null;

  const { name, sys, main, weather, wind } = data;
  const weatherInfo = weather && weather[0] ? weather[0] : null;
  const description = weatherInfo ? weatherInfo.description : "";
  const icon = weatherInfo ? weatherInfo.icon : "";

  return (
    <div className="mt-6 bg-white rounded-xl p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-sky-900">
            {name}
            {sys?.country ? `, ${sys.country}` : ""}
          </h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {icon && (
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="w-20 h-20"
          />
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold text-sky-800">
            {main?.temp ? Math.round(main.temp) : "-"}°C
          </p>
          <p className="text-sm text-gray-600">Feels like {main?.feels_like ? Math.round(main.feels_like) : "-"}°C</p>
        </div>

        <div className="text-sm text-gray-700">
          <p>💧 Humidity: {main?.humidity ?? "-" }%</p>
          <p>🌬️ Wind: {wind?.speed ?? "-"} m/s</p>
        </div>
      </div>
    </div>
  );
}
