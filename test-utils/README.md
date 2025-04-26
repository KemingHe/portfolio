# Test Utilities

This directory contains centralized testing utilities for the project. It provides a consistent way to test components with all necessary providers and configurations.

## Usage

Import testing utilities from this directory:

```typescript
import { render, screen, userEvent } from '@/test-utils';
```

## Available Utilities

### `render`

A custom render function that automatically wraps components with Mantine's provider and theme:

```typescript
test('my component test', () => {
  render(<MyComponent />); // Automatically wrapped with MantineProvider
  // ... rest of your test
});
```

### Other Exports

- All utilities from `@testing-library/react`
- `userEvent` from `@testing-library/user-event`

## Why This Setup?

1. **Simplified Imports**: Import all testing utilities from a single location
2. **Consistent Environment**: Components are tested with the same providers and configurations as production
3. **Encapsulation**: Internal implementation details can be changed without affecting test files
4. **Mantine Integration**: Automatic wrapping of components with Mantine's provider and theme
