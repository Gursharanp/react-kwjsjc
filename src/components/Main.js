import React,{useState} from 'react'

function Main(){
  const[counter1,setConter1]=useState(0)
  const[counter2,setConter2]=useState(0)

const incrementOne=()=>{
  setConter1(counter1+1);
}
const incrementTwo=()=>{
  setConter2(counter2+1);
}
const isEven=() =>{
  let i=0
  while(i<20000000000)i++
  return counter1%2==0
}

return(
<div>
    <div>
      <button onClick={incrementOne}>
        counter1 {counter1}
      </button>
      <span>{isEven()? 'Even':'Odd'} </span>
    </div>
    <div>
    <button onClick={incrementTwo}>
        counter2 {counter2}
      </button>
    </div>



</div>

)

}

export default Main