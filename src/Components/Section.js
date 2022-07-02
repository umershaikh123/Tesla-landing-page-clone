import React from 'react'
import arrow from './img/down-arrow.svg'
 
import Fade from 'react-reveal/Fade';
import { Link,animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Section({title , description , link , backgroundImg ,  leftBtnText , RightBtnText , displayBtn , id}) {
 
 

  return (


     <div className="relative Section" style={{backgroundImage: `url(${backgroundImg})`}}  id={id}>  

   

        <div className='flex flex-col items-center justify-between p-4 ml-12' >
          <div className='space-y-6 mt-44'>
          <Fade top>
          <h1 className='mx-auto text-5xl font-bold '>{title}</h1>
          <p>{description} <a href='#link' className='underline '>{link}</a></p>
          </Fade> 
          </div>
        </div>


        <div className='flex flex-col justify-center h-full md:mt-24'>
        <div className='flex flex-col items-center justify-center space-y-6 md:space-x-12 md:flex-row md:space-y-0' id='Buttons'>
        <Fade left>
          <button className='p-4 px-20 py-2 my-auto text-sm font-thin text-white uppercase bg-zinc-800 rounded-3xl h-max'  id='btn1'>{leftBtnText} </button>
           
          <button className='p-4 px-16 py-2 my-auto text-sm font-thin text-black uppercase bg-slate-200 rounded-3xl h-max' style={{ display: `${displayBtn}` }}  id='btn2'>{RightBtnText}</button>
          </Fade> 
          </div>


        
         
          
          <div className='flex-col items-center justify-center mx-auto '>          
            <a href='#down' ><img src={arrow} alt='arrow' className='h-10 mt-8 Down' /></a>                               
          </div>        
         

        </div>

        
     </div>
  )
}

Section.defaultProps = {
  title:"Model 3",
  description: "Order Online for Touchless Delivery",
  link:"Touchless Delivery", 
  leftBtnText:"Custom Order",
  RightBtnText:"Existing Inventory"
}

export default Section



 
 