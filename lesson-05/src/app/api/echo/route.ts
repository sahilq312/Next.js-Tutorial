import { NextResponse } from "next/server";
import { URL } from "url";


/* export async  function GET(request : Request) {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')
    const instrument = searchParams.get('instrument')
  return NextResponse.json({name, instrument})
}
 */

export async  function GET(request : Request) {
    const { searchParams } = new URL(request.url)
    //const instrument = searchParams.get('instrument')
    //const name = searchParams.get('name')
    //return NextResponse.json({name, instrument})
    const obj = Object.fromEntries(searchParams.entries())
    return NextResponse.json(obj)
}