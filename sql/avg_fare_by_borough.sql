-- Average fare by pickup borough, excluding zero-fare trips.
-- Metabase visualisation: Bar chart. Save as "Average fare by borough (non-zero)".
SELECT pickup_borough,
       AVG(fare_amount) AS avg_fare
FROM dev_yourname.fct_trips
WHERE fare_amount > 0
GROUP BY pickup_borough
ORDER BY avg_fare DESC;
