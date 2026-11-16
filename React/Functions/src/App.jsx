import React from 'react'

const App = () => {

  // function btnclicked(){
  //   console.log('clicked');
  // }
  // function MouseEnter(){
  //   console.log('mouse enter');
    
  // }
  // const InputChange=(elem)=>{
  //   console.log(elem);
  // }
  // return (

  //   <div>
      {/* <button onClick={btnclicked()}>CLICK HERE</button>  automatically chl chuka h */}
      {/* <button onClick={btnclicked}>CLICK HERE</button> */}
       {/* <button onMouseEnter={MouseEnter} onDoubleClick={btnclicked}>CLICK HERE</button> */}
       {/* <button onClick={function(){
    console.log('clicked');
  }}>CLICK HERE</button>  */}

  {/* <button onClick={()=>{
    console.log('clicked');
  }}>CLICK HERE</button>  */}


  {/* <input onChange={InputChange}type="text" placeholder="Enter Name"></input> */}


  {/* <input onChange={function(elem){console.log(elem);
  }}type="text" placeholder="Enter Name"></input> */}


  {/* <input onChange={function(elem){console.log(elem.target);
  }}type="text" placeholder="Enter Name"></input> */}

  {/* <input onChange={function(elem){console.log(elem.target.value);
  }}type="text" placeholder="Enter Name"></input> */}


  //  <input onChange={function(elem){
  //   InputChange(elem.target.value);
  // }}type="text" placeholder="Enter Name"></input>
  //   </div>


// return(
//   <div>
//     <div onMouseMove={(elem)=>{
//       console.log(elem.clientX);
      
//     }} className='box'></div>
//   </div>

// )

const scroll=(elem)=>{
  if(elem>0){
  console.log('seedhaa scrolling...');}
  else{
    console.log('ulta scrollinggg');
    
  }
}

return(
  <div onWheel={(elem)=>{scroll(elem.deltaY);
  }}>
    <div className='page1'>

    </div>
    <div className='page2'>

    </div>
    <div className='page3'>

    </div>

  </div>
)

}
export default App