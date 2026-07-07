# NYC Taxi — Metabase Reference

Reference SQL for the **HYF Data Track Week 11 (Dashboarding)** Metabase exercises. Every Question
you build in Metabase is driven by a SQL query against the Week 10 dbt mart `fct_trips` — those
queries live here as runnable `.sql` files so you have a checkable source of truth. The
dashboard *assembly* (adding cards, wiring the date filter) stays in the Metabase UI, because the
whole point of the week is learning the BI tool.

`main` holds the finished reference SQL. Each exercise is a **branch** with an `EXERCISE.md`
(the click-steps) and either a SQL stub to complete or the reference SQL to paste. Diff against the
matching `-solution` branch.

## Exercises

| Exercise | Start branch | Solution branch |
| --- | --- | --- |
| Write a Metabase SQL Question | [`exercise-sql-question`](../../tree/exercise-sql-question) | [`exercise-sql-question-solution`](../../tree/exercise-sql-question-solution) |
| Build a dashboard with a date filter | [`exercise-dashboard-filter`](../../tree/exercise-dashboard-filter) | [`exercise-dashboard-filter-solution`](../../tree/exercise-dashboard-filter-solution) |

## Setup

```bash
git clone https://github.com/lassebenni/nyc-taxi-metabase-reference.git
cd nyc-taxi-metabase-reference
git switch exercise-sql-question     # then read EXERCISE.md
```

Then log in to HYF Metabase and follow the `EXERCISE.md`. Replace `dev_yourname` in every query
with your actual schema (e.g. `dev_jana`).

## Prerequisites

- Logged in to HYF Metabase (URL in the Week 11 chapter).
- Your Week 10 `fct_trips` table populated in `dev_<name>` on the shared Azure Postgres, visible
  in Metabase under **Browse data**.
