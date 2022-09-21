 
import {useEffect, useState} from 'react'
  import axios from 'axios'
const Home=()=>{
var [name,setname]=useState('')
useEffect(()=>{
axios.get('http://localhost:4000')
.then(res => res.data)
.then(e => console.log(e))
.catch( e => console.log(e))
})
    return(
 <form >

 <input type='text' placeholder='type here' onChange={(e)=> setname(e.target.value)} />

<label>your name:{name}</label>


 </form>


    )
}
export default Home;