import React, { useState } from 'react'

export default function Counter() {

    const [data, setData] = useState();
    var count = 0;

    const increment = () =>{
        console.log('increment clicked');
            setTimeout(() =>{
                count =  count + 1;
                console.log(count);
            },1000)
    }
    // const increment = () =>{
    //     console.log('clicked');
    // }
    // setTimeout(() =>{
    //     count =  count + 1;
    //    increment()
    //     console.log(count);
    // },1000)
    // console.log(data);


    const decrement = () =>{
        setTimeout(() =>{
            count =  count -1;
            console.log(count);
        },1000)
        // console.log('dec clicked');
    }
  return (
    <>
        <div className="bx">
            <h1 className='title'>Counter App</h1>
            <h1>0</h1>
           <div className='btn_cls'>
                <button className='btn btn-primary' onClick={increment}>Increment</button>
                <button className='btn btn-success' onClick={decrement}>Decrement</button>
           </div>
        </div>
    </>
  )
}
