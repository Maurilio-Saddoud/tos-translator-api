const openaiService = require("../service/openaiService");

exports.readContract = async (req, res) => {
  try {
    const message = req.body.content;
    const response = await openaiService.readContract(message);
    res.json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
