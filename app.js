const express = require("express");
// const testKeyRoutes = require("./routes/testKeyRoutes");
// const weatherRoutes = require("./routes/weatherRoutes");
// const openaiRoutes = require("./routes/openaiRoutes");

const app = express();
app.use(express.json());

// Directly setup your routes without waiting for DB connection
// app.use("/api/testkeys", testKeyRoutes);
// app.use("/api/weather", weatherRoutes);
// app.use("/api/openai", openaiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
