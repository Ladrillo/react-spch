import { rest } from 'msw'

function helloWorld(req, res, ctx) {
  return res(
    ctx.status(200),
    ctx.json({ message: 'hello world' }),
  )
}

export const handlers = [
  rest.get('http://localhost:5000/*', helloWorld),
]
