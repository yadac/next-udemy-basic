import ClientComponent from "@/app/components/ClientComponent"
import Link from "next/link"

export default function ServerComponent() {
    console.log("server side log")
    return (
        <div>
            Server
            <div><ClientComponent /></div>
            <Link href="/about">About</Link>
        </div>
    )
}
