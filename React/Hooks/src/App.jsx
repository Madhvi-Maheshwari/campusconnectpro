

//we can't display the value of a on the web beacuse here we haven't use the hook 
// import React from 'react'



// const App = () => {

//   let a=120;
//   const change=()=>{
//     a=a+1;
//   }
//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={change}>Click</button>
//     </div>
//   )
// }

// export default App



//Learning
// import React, { useState } from 'react'

// const App = () => {

//   const [a, setA] = useState(0)
//   const [username, setUsername] = useState('madhvi')
//   const [users, setUsers] = useState([10,20,30])

//   function changeVal(){
//     setA(20)
//     setUsername('nishankh')
//     setUsers([20,40,50])
//   }
//   return (
//     <div>
//       <h1>Value of a is {a} <br/> value of user is {username} <br/> value of user is {users.join(', ')}
// </h1>
//       <button onClick={changeVal}>Click</button>
//     </div>
//   )
// }

// export default App


//Counter
import React, { useState } from 'react'

const App = () => {
  
  const [i, seti] = useState(0)
  function inc(){
    seti(i+1);
  }
  function dec(){
    seti(i-1);
  }

  return (
    <div className="container">
      <div className="counter">
      <h1>{i}</h1>
      <button onClick={inc} >Increse</button>
      <button onClick={dec}>Decrease</button>
      </div>
    </div>
  )
}

export default App