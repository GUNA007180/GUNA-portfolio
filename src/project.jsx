import React from 'react'
import heart from './picture/heart.png'

function Project() {
    return (
       <section id='project'>
         <div class=' pt-10 p-14' style={{background:"radial-gradient(circle,rgba(73,22,94,1)25%,rgba(0,0,0,1)100%)",backgroundSize: "cover"}}>
            <h1 className='text-2xl  text-green-300 pl-4 font-bold' >Projects</h1>
            <p className='m-10 text-3xl pl-22     w-4/5 font-you text-white'>Develop a <span className=' text-rose-600'>CRUD Application</span> by using
                React,Node,Express,and Mongodb </p>

            <p className='m-10 text-3xl pl-22 w-4/5 font-you text-white'>Created a Simple <span className=' text-rose-600'> login form </span>by Using HTML,CSS And Javascript </p>


        </div>
       </section>
    )
}

export default Project;
