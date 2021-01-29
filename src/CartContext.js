import React, { useState} from "react"

export  const CartContext = React.createContext(1)

export const Context= ({children}) => {

    const [cantidad,setCantidad] = useState(1)
       
    return (
     <CartContext.Provider value={[cantidad,setCantidad]}>
            {children}
     </CartContext.Provider>
     )
   }
   
