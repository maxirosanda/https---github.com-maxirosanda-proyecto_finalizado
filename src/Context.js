import React, { useState} from "react"

export  const CartContext = React.createContext([])

export const Context= ({children}) => {

    const [llevar,setLlevar] = useState([])
 
    return (
     <CartContext.Provider value={[llevar,setLlevar]}>
            {children}
     </CartContext.Provider>
     )
   }

