-- Top 10 pickup zones by trip count.
-- Metabase visualisation: Bar chart. Save as "Top 10 pickup zones".
SELECT pickup_zone,
       COUNT(*) AS trip_count
FROM dev_yourname.fct_trips
GROUP BY pickup_zone
ORDER BY trip_count DESC
LIMIT 10;
