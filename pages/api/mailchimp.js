const mailchimp = require("@mailchimp/mailchimp_marketing");

const handler = async (req, res) => {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER,
  });

  const { email } = req.body;

  try {
    await mailchimp.lists.addListMember("c6cad57233", {
      email_address: email,
      status: "subscribed",
    });

    return res.status(200).json({ message: "Subscribed successfully" });
  } catch (exception) {
    return res.status(500).json({ message: "An error as occurred." });
  }
};

export default handler;
