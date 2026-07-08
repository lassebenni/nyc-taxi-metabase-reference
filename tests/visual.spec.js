const fs = require("fs");
const path = require("path");
const { test } = require("@playwright/test");
const { argosScreenshot } = require("@argos-ci/playwright");

// Every exercise/solution SQL file targets a placeholder schema
// (dev_yourname). CI substitutes the real, frozen reference schemas so the
// query is identical to what a student would run, just pointed at fixed data.
const SCHEMA_TRIPS = process.env.METABASE_SCHEMA_TRIPS || "dev_lasse";
const SCHEMA_BOROUGH = process.env.METABASE_SCHEMA_BOROUGH || "dev_lasse_borough";
const DATABASE_ID = Number(process.env.METABASE_DATABASE_ID || 2);

function resolveSchema(sql) {
  return sql.includes("fct_daily_borough_stats")
    ? sql.replace(/dev_yourname/g, SCHEMA_BOROUGH)
    : sql.replace(/dev_yourname/g, SCHEMA_TRIPS);
}

function questionUrl(baseUrl, sql) {
  const payload = {
    dataset_query: {
      type: "native",
      native: { query: sql },
      database: DATABASE_ID,
    },
    display: "table",
    visualization_settings: {},
  };
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64");
  return `${baseUrl}/question#${encoded}`;
}

const sqlDir = path.join(__dirname, "..", "sql");
const sqlFiles = fs.existsSync(sqlDir)
  ? fs.readdirSync(sqlDir).filter((f) => f.endsWith(".sql"))
  : [];

for (const file of sqlFiles) {
  test(`${file} renders in Metabase`, async ({ page, baseURL }) => {
    const rawSql = fs.readFileSync(path.join(sqlDir, file), "utf8");
    const sql = resolveSchema(rawSql);

    await page.goto(questionUrl(baseURL, sql));
    await page
      .getByTestId("run-button")
      .click({ timeout: 15_000 })
      .catch(() => {}); // some branches auto-run on load

    // A result state is either a rendered table/chart or a visible error —
    // both are legitimate, deterministic outcomes worth diffing (a starter
    // branch's `SELECT 1;` stub is expected to look different from the
    // solution's real query).
    await page
      .locator('[data-testid="query-visualization-root"], [data-testid="query-builder-main"]')
      .first()
      .waitFor({ state: "visible", timeout: 30_000 });

    await argosScreenshot(page, `metabase-${file.replace(".sql", "")}`, {
      fullPage: true,
    });
  });
}
