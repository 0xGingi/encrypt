const APP_URL = self.location.origin + "/file";
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const sigCodes = {
  v1: "Encrypted Using encrypt.0xgingi.com",
  v2_symmetric: "zDKO6XYXioc",
  v2_asymmetric: "hTWKbfoikeg",
};

module.exports = {
  APP_URL,
  encoder,
  decoder,
  sigCodes,
};
