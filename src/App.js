 import React,{useState} from 'react'
 
 function App() {
  const [color,setColor]=useState("yellow")
   return (
     <div className=" w-full h-screen duration-200" 
     style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 -mb-2 inset-x-0  px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-sm  ">

        <button className="outline-none rounded-3xl px-4 text-white"style={{backgroundColor:"red"}}    onClick={()=>setColor("red")}>Red</button>
        <button className="outline-none rounded-3xl px-4 text-white"style={{backgroundColor:"green"}}  onClick={()=>setColor("green")}>green</button>
        <button className="outline-none rounded-3xl px-4 text-white"style={{backgroundColor:"black"}}  onClick={()=>setColor("black")}>black</button>
        <button className="outline-none rounded-3xl px-4 text-white"style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>orange</button>
        <button className="outline-none rounded-3xl px-4 text-white"style={{backgroundColor:"blue"}}   onClick={()=>setColor("blue")}>blue</button>
        <button className="outline-none rounded-3xl px-4 text-white"style={{backgroundColor:"pink"}}   onClick={()=>setColor("pink")}>pink</button>
      </div>
      
      </div>
     </div>
    
   )
 }
 
 export default App
  