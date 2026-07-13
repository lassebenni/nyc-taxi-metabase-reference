-- Top 10 pickup zones by trip count.
-- Metabase visualisation: Bar chart. Save as "Top 10 pickup zones".
-- TODO: select pickup_zone and a trip count, group by zone, order by count
--       descending, and keep only the top 10.
SELECT pickup_zone,
       COUNT(*) AS trip_count
FROM dev_yourname.fct_trips
-- TODO: GROUP BY, ORDER BY, LIMIT
;
