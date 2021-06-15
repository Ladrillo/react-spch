# Codegrade Setup

## 1- Fixtures

### Student-Facing

- [codegrade_mvp.test.js](./codegrade_mvp.test.js)

### Non-Student-Facing

- [codegrade_mvp.test1.js](./codegrade_mvp1.test.js)

## 2- Global setup script

```bash
cg-jest install
```

## 3- Per-student setup script

```bash
mv $FIXTURES/* . && npm install
```

## 4- Auto Tests

```bash
cg-jest run -- --forceExit
```

## 5- Rubric

etc etc
