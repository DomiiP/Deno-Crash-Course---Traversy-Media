import {Router} from 'https://deno.land/x/oak/mod.ts'
import { getProducts } from './controllers/products.ts'

const router = new Router()

// router.get('/api/v1/products', ({response} : {response: any}) => { 
//     response.body = 'Hello World'
// })
router.get('/api/v1/products', getProducts)


//Takes arrow function as second parameter
//Takes object of response and it can be anything (any)
//Hello World means what it responds with

export default router