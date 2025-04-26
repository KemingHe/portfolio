# Git Hooks Setup

This directory contains Git hooks configured with [Husky](https://typicode.github.io/husky/) to enforce consistent commit messages and pre-commit checks.

## Key Files

- `pre-commit`: Runs `pnpm verify` before each commit to ensure:
  - Changeset status is valid
  - Code passes linting
  - TypeScript types are correct
  - Tests pass

- `prepare-commit-msg`: Integrates with [Commitizen](https://commitizen-tools.github.io/commitizen/) to guide developers through conventional commit messages
  - Falls back to default editor if Commitizen is not available
  - Requires `.czrc` config file in root directory

## Required Dependencies

Make sure these dev dependencies are in your `package.json`:

```json
{
  "devDependencies": {
    "commitizen": "^4.3.1",
    "cz-conventional-changelog": "^3.3.0",
    "husky": "^9.1.7"
  }
}
```

## Why This Setup?

1. **Consistent Commits**: Conventional commits enable automated changelog generation and versioning
2. **Quality Gates**: Pre-commit hooks prevent broken code from being committed
3. **Developer Experience**: Interactive commit messages guide developers to write meaningful commits
4. **CI/CD Integration**: Works seamlessly with GitHub Actions and other CI environments

## Installation

Husky is automatically installed when running `pnpm install` via the `prepare` script in `package.json` (and skipped in ci or production environments.)
