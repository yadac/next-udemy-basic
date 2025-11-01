'use client'

import { useState } from "react"

export default function ServerComponent() {
    const [count, setCount] = useState(0);
    console.log("client side log")
    return (
        <div>
            クライアント
            <button onClick={() => setCount(count + 1)}>Count:{count}</button>
        </div>
    )
}
