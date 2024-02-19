const express = require("express");
const cors = require('cors')
const openaiRoutes = require("./routes/openaiRoutes")

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/openai", openaiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
