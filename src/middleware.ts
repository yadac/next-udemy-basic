import { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {

    if (!request.nextUrl.pathname.includes('.')) {
        console.log("ミドルウェアのテスト")
    }
    return NextResponse.next() // requestを次の処理に進める
}