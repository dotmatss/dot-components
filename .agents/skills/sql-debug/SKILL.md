# SQL Debug

Use this skill when a task involves broken SQL, unexpected query results, or database-layer behavior that needs tracing.

## Goals

- Identify the exact query or ORM path involved.
- Check assumptions about joins, filters, grouping, null handling, and sort order.
- Reduce the issue to a minimal reproducible query.

## Workflow

1. Find the query source and the expected result shape.
2. Inspect parameter values and any dynamic query branches.
3. Compare the generated SQL with the intended logic.
4. Validate the fix against a realistic data case.

## Good Practices

- Prefer smallest possible query changes.
- Be explicit about database-specific behavior.
- Verify edge cases with empty sets, duplicate rows, and null values.

