import { NextResponse } from "next/server"


/* export async function GET(){
    return new Response("hello world")
} */
export async function GET(){
    return NextResponse.json({"message" : "hlw next js"})
}