-- Daily trip volume from the pre-aggregated daily mart.
-- Metabase visualisation: Line chart. Save as "Daily trip volume".
-- Table: dev_<name>.fct_daily_borough_stats (replace dev_<name> with your schema).
SELECT pickup_date,
       SUM(trip_count) AS total_trips
FROM dev_yourname.fct_daily_borough_stats
GROUP BY pickup_date
ORDER BY pickup_date;
