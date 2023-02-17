const bcrypt = require("bcrypt");

async function validatePassword(password1, password2) {
  const passwordsMatch = await bcrypt.compare(password1, password2);
  return passwordsMatch;
}

module.exports = { validatePassword };
