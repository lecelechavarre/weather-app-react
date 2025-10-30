// server.cjs - CommonJS proxy using undici.fetch
const express = require("express");
const cors = require("cors");
// use undici's fetch
const { fetch } = require("undici");

const app = express();
app.use(cors());

app.get("/weather", async (req, res) => {
  const city = req.query.city || "";
  const API_KEY = "40db244ec213d57477c16fe039451021";
  const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${encodeURIComponent(city)}`;

  try {
    const response = await fetch(url); // ✅ this fetch comes from undici
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: error.message });
  }
});


const PORT = 8080;
app.listen(PORT, () => console.log(`✅ Proxy server running on http://localhost:${PORT}`));
