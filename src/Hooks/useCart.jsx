import { useEffect, useState } from "react";

const useCart = () => {
    const [cartLength, setCartLength] = useState(0)

    const updateCartLength = () => {
        const cart = JSON.parse(localStorage.getItem("cart"))
        setCartLength(cart?.length)
    }

    useEffect(() => {
        updateCartLength()

        const listener = () => updateCartLength()
        window.addEventListener("cartUpdated", listener)

        return () => removeEventListener("cartUpdated", listener)
    }, [])
    return cartLength
};

export default useCart;