import { createReadStream } from 'node:fs'
import { access } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('.', import.meta.url)), 'dist')
const port = Number(process.env.PORT || 4173)
const types = { '.css': 'text/css', '.js': 'text/javascript', '.html': 'text/html' }

createServer(async (request, response) => {
  if (request.url === '/healthz') {
    response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' })
    response.end('ok\n')
    return
  }

  const requested = normalize(new URL(request.url, 'http://localhost').pathname)
  const relative = requested === '/' ? 'index.html' : requested.replace(/^[/\\]+/, '')
  const candidate = join(root, relative)
  const file = await access(candidate).then(() => candidate).catch(() => join(root, 'index.html'))

  response.writeHead(200, { 'content-type': types[extname(file)] || 'text/plain' })
  createReadStream(file).pipe(response)
}).listen(port, '0.0.0.0', () => {
  console.log(`KAZI listening on ${port}`)
})
