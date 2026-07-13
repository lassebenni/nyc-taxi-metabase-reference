-- Trip count by pickup borough, busiest first.
-- Metabase visualisation: Bar chart. Save as "Trip count by borough".
SELECT pickup_borough,
       COUNT(*) AS trip_count
FROM dev_yourname.fct_trips
GROUP BY pickup_borough
ORDER BY trip_count DESC;
