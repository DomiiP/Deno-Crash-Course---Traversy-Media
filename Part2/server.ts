import {Application,Router} from 'https://deno.land/x/oak/mod.ts'
//Red line means that the line hasn't been cached, but when you run it, it should fix it
import router from './routes.ts'
const port = 5000
const app = new Application()


app.use(router.routes())
app.use(router.allowedMethods())

//Takes arrow function as second parameter
//Takes object of response and it can be anything (any)
//Hello World means what it responds with

console.log(`Server running on port ${port}`)

await app.listen({port})

//Runs with command <deno run --allow-net Part2/server.ts>
//Access the server with <http://localhost:5000/api/v1/products>