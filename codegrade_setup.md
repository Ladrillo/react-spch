# Codegrade Setup

## Fixtures

### Student-Facing

- [codegrade_mvp.test.js](./codegrade_mvp.test.js)

### Non-Student-Facing

- [codegrade_mvp.test1.js](./codegrade_mvp1.test.js)

## Global setup script

```bash
cg-jest install
```

## Per-student setup script

```bash
mv $FIXTURES/* . && npm install
```

## Auto Tests

```bash
cg-jest run -- --forceExit
```
