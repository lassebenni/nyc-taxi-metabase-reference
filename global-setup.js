// Logs in to the shared Metabase instance once per CI run and stores the
// session cookie for every test to reuse, so we authenticate the same way a
// human does (cookie session) instead of typing credentials into the UI.
const fs = require("fs");

module.exports = async () => {
  const baseURL = process.env.METABASE_URL;
  const username = process.env.METABASE_CI_USER;
  const password = process.env.METABASE_CI_PASSWORD;

  if (!baseURL || !username || !password) {
    throw new Error(
      "METABASE_URL, METABASE_CI_USER, METABASE_CI_PASSWORD must be set."
    );
  }

  const res = await fetch(`${baseURL}/api/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    throw new Error(`Metabase login failed: ${res.status} ${await res.text()}`);
  }
  const { id: sessionId } = await res.json();

  const domain = new URL(baseURL).hostname;
  const storageState = {
    cookies: [
      {
        name: "metabase.SESSION",
        value: sessionId,
        domain,
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "Lax",
      },
    ],
    origins: [],
  };
  fs.writeFileSync("storageState.json", JSON.stringify(storageState));
};
