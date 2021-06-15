# Codegrade Setup

## Fixtures

- [codegrade_mvp.test.js](./codegrade_mvp.test.js)

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
cg-jest run -- codegrade_mvp*.test.js --forceExit
```
