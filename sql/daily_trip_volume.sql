-- Daily trip volume over time.
-- Metabase visualisation: Line chart. Save as "Daily trip volume".
SELECT date_trunc('day', pickup_datetime) AS day,
       COUNT(*) AS trips
FROM dev_yourname.fct_trips
GROUP BY 1
ORDER BY 1;
