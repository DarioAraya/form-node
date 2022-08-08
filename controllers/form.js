const axios = require("axios");

module.exports.index = async (req, res) => {
  const response = await axios.get(
    `http://ec2-18-144-87-190.us-west-1.compute.amazonaws.com:7171/v1/companies/1829.json`
  );
  const data = response.data.data;
  res.render("index", { data });
};
