const express = require("express");
const cors = require('cors')
const openaiRoutes = require("./routes/openaiRoutes")
const weatherRoutes = require("./routes/weatherRoutes")

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/openai", openaiRoutes);
app.use('/api/weather', weatherRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
