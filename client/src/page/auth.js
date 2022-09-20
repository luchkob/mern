import { useState } from "react"

export default function Auth(){
var [color,setcolor]=useState('')
    return(
      <form className="m-44 bg-slate-600 align-middle">
<input value={color} placeholder='type here' className="border-blue-500"
onChange={(e)=> setcolor(e.target.value)} />
<p>{color}</p>
      </form>
    )
}