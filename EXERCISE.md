# Exercise: Build a Metabase Dashboard with a Date Filter

Combine two saved Questions into a dashboard, then wire up a date-range filter so
stakeholders can slice by period. The Questions' queries are provided in `sql/` — this
exercise is about the dashboard UI and the filter, not writing new SQL.

## Prerequisites

- The **"Trip count by borough"** Question from Exercise 1, saved in your Collection
  (reference SQL: `sql/trip_count_by_borough.sql`, bar chart).
- A second Question, **"Daily trip volume"**, saved as a **line chart**
  (reference SQL: `sql/daily_trips.sql`). It reads the pre-aggregated
  `fct_daily_borough_stats` mart, one row per day.

## Task

### Part A — Create the dashboard
1. **New → Dashboard**, name it "Practice Dashboard: [Your Name]".
2. **Add a question** and add both Questions.
3. Put the "Trip count by borough" bar chart and the "Daily trip volume" line chart
   side by side, then **Done**.

### Part B — Add a date filter
1. **Edit → Filters → Date → Date Range**, add the filter to the dashboard.
2. Connect it to the **Daily trip volume** line chart on `pickup_date`. A native SQL
   Question only accepts a dashboard filter through a **Field Filter** variable, so add
   one to that Question's SQL: `WHERE {{trip_date}}`, then map `{{trip_date}}` to the
   `pickup_date` field.
3. **Done**, then test: pick a date range and confirm the line chart clips to it.

> The date filter will NOT affect the "Trip count by borough" bar chart unless you add
> the same `{{trip_date}}` Field Filter to its SQL. That bar aggregates over all time by
> design, which is why the line chart is the clearest demo of a date filter.

## Success criteria

- Dashboard contains both Questions.
- The date-range filter is connected to the "Daily trip volume" line chart.
- Changing the date range visibly clips the line chart to the selected period.

## Target layout

```text
Practice Dashboard: Jana                          [ Date range: Jan 2024 ▾ ]
┌───────────────────────────┐  ┌───────────────────────────┐
│ Trip count by borough     │  │ Daily trip volume         │
│ ▄▄▄  ▄▄   ▄               │  │      ╱╲    ╱╲             │
│                           │  │  ╱╲ ╱  ╲__╱  ╲            │
└───────────────────────────┘  └───────────────────────────┘
```

> Replace this ASCII sketch with a screenshot of your finished dashboard in your submission.

## Compare

Check against the `exercise-dashboard-filter-solution` branch.
