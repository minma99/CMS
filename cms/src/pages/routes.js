import Home from './../pages/home/Home'
import Users from './../pages/users/Users'
import Product from './../pages/product/Product'
import ProductDetails from './../pages/productdetails/ProductDetails'


let routes =[
    {path:'/', element:<Home/>},
    {path:'/user', element:<Users/>},
    {path:'/Product', element:<Product/>},
    {path:'/Product/:productId', element:<ProductDetails/>}
]
export default routes