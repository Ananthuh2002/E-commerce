import React, { createContext } from 'react';
import all_product from '../Components/Assests/all_product'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const  contextvalue = {all_product}

    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;