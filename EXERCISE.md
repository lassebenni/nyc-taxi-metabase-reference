# Exercise: Build a Metabase Dashboard with a Date Filter

Combine two saved Questions into a dashboard, then wire up a date-range filter. The Questions'
queries are provided in `sql/` — this exercise is about the dashboard UI, not writing SQL.

## Prerequisites

- The two Questions saved in your Personal Collection ("Trip count by borough" and
  "Average fare by borough"). Their reference SQL is in `sql/` here.

## Task

### Part A — Create the dashboard
1. **New → Dashboard**, name it "NYC Taxi Analytics: [Your Name]".
2. **Add a question** and add both Questions.
3. Arrange the cards side by side, then **Done**.

### Part B — Add a date filter
1. **Edit → Filters → Date → Date Range**.
2. For each card, open the filter mapping and map it to the `pickup_datetime` column.
3. **Done**, then test: pick a 30-day range and confirm both panels update.

## Success criteria

- Dashboard contains at least 2 Questions.
- The date-range filter is mapped to both Questions.
- Filtering to a specific month changes the trip counts shown.

## Target layout

```text
NYC Taxi Analytics: Jana                         [ Date range: last 30 days ▾ ]
┌───────────────────────────┐  ┌───────────────────────────┐
│ Trip count by borough     │  │ Average fare by borough   │
│ ▄▄▄  ▄▄   ▄               │  │  ▄   ▄▄   ▄▄▄             │
└───────────────────────────┘  └───────────────────────────┘
```

> Replace this ASCII sketch with a screenshot of your finished dashboard in your submission.

## Stretch

Add a third Question — daily trip volume as a line chart (reference SQL:
`sql/daily_trip_volume.sql` in the solution branch) — and confirm the date filter connects to it too.

## Compare

Check against the `exercise-dashboard-filter-solution` branch.
