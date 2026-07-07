# Exercise: Write a Metabase SQL Question

Practice writing a SQL Question in Metabase against your `fct_trips` dbt mart. The `.sql` in this
repo is your checkable source of truth — get the query right here, then run it inside Metabase.

## Task

1. In `sql/trip_count_by_borough.sql`, replace the `TODO` with a query that returns
   `trip_count` by `pickup_borough`, ordered descending.
2. In Metabase: **New → SQL query**, select the **Azure Postgres (HYF)** database, paste your
   query, and run it. Replace `dev_yourname` with your actual schema.
3. Set the visualisation to **Bar chart**.
4. Save the Question to **Your Personal Collection** as "Trip count by borough".

## Success criteria

- The Question runs without error.
- The bar chart shows at least 3 boroughs with non-zero counts.
- The Question is saved in your Personal Collection.

## Stretch

Write a second Question: average `fare_amount` by `pickup_borough`, excluding trips where
`fare_amount = 0`. Save it as "Average fare by borough (non-zero)". (Reference SQL for this lives
in the solution branch as `sql/avg_fare_by_borough.sql`.)

## Compare

Check your SQL against the `exercise-sql-question-solution` branch.
