import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import {authDataContext} from './authContext'
import axios from 'axios'
export const shopDataContext = createContext()
const ShopContext = ({children}) => {

    let [products, setProducts] = useState([])
    let [search, setSearch] = useState("")
    let [showSearch, setShowSearch] = useState(false)
    let {serverUrl} = useContext(authDataContext)
    let currency = '₹';
    let delivery_fee  = 40;

    const getProducts = async()=>{
        try{
            let result = await axios.get(serverUrl + "/api/product/list")
            console.log(result.data)
            setProducts(result.data)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
          getProducts()
    },[])

    let value = {
       products, currency, delivery_fee, getProducts, search, setSearch, showSearch, setShowSearch
    }
  return (
    <div>
      <shopDataContext.Provider value={value}>
        {children}
      </shopDataContext.Provider>
    </div>
  )
}

export default ShopContext
