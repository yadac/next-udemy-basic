import ClientComponent from "@/app/components/ClientComponent"
export default function ServerComponent() {
    console.log("server side log")
    return (
        <div>
            Server
            <div><ClientComponent /></div>
        </div>
    )
}
