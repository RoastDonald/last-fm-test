import "dotenv/config";

export default {
  name: "lastFmTest",
  version: "1.0.0",
  extra: {
    apiKey: process.env.API_KEY,
  },
};
