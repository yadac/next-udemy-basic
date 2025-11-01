'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ServerComponent() {
    const [count, setCount] = useState(0);
    const router = useRouter()
    console.log("client side log")
    return (
        <div>
            <h3>クライアント</h3>
            <div>
                <button onClick={() => setCount(count + 1)}>Count:{count}</button>
            </div>
            <Link href="/about">About</Link>
            <button onClick={() => router.push('/about')}>Goto About</button>
        </div>
    )
}
