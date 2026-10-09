# Copilot Perf Lab

This tiny JavaScript project is built to demonstrate a realistic performance review. It includes a hot path that was implemented with quadratic work and a targeted optimization that makes the same logic linear.

## 10 performance improvements to consider

1. Replace O(n²) duplicate scans with a Set-based lookup.
2. Cache repeated regex compilation instead of recreating pattern objects per iteration.
3. Batch file writes and avoid repeated open/close cycles.
4. Use object pooling for short-lived temporary values in hot loops.
5. Convert repeated string concatenation to array joins for larger payloads.
6. Avoid repeated property lookups inside nested loops by hoisting references.
7. Short-circuit expensive validation before doing deep serialization.
8. Use lazy evaluation for optional list transforms until values are actually needed.
9. Memoize deterministic computations used across repeated requests.
10. Cap or debounce redundant polling loops that trigger work without new input.

## Current optimization

The project’s duplicate check originally scanned the full list for every item. The optimized implementation uses a Set so each value is checked once, reducing the complexity from O(n²) to O(n).

## Run tests

```bash
npm test
```
