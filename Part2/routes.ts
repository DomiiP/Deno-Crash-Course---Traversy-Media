import {Router} from 'https://deno.land/x/oak/mod.ts'
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct} from './controllers/products.ts'

const router = new Router()

// router.get('/api/v1/products', ({response} : {response: any}) => { 
//     response.body = 'Hello World'
// })
router.get('/api/v1/products', getProducts)
    .get('/api/v1/products/:id', getProduct)
    .post('/api/v1/products/:id', addProduct)
    .put('/api/v1/products/:id', updateProduct)
    .delete('/api/v1/products/:id', deleteProduct)


//Takes arrow function as second parameter
//Takes object of response and it can be anything (any)
//Hello World means what it responds with

export default router