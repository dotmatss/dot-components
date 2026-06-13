# Integration

Use this skill when connecting two systems, wiring a new API boundary, or validating how one module talks to another.

## Goals

- Confirm the contract on both sides of the integration.
- Minimize assumptions about payload shape, timing, and error handling.
- Keep the integration isolated and easy to test.

## Workflow

1. Identify the producer and consumer.
2. Document the request, response, and error contract.
3. Check authentication, retries, and timeout behavior if applicable.
4. Verify the integration with a focused test or manual check.

## Good Practices

- Prefer narrow adapters over cross-cutting coupling.
- Keep failure handling explicit.
- Add tests that cover success and failure paths.

