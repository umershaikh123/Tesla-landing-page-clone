import React, { useState } from 'react'
import styled from 'styled-components';
import logo from './img/logo.svg';
import { Link,animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

 


function Header() {

    const [SideMenuStatus , setSideMenuStatus] = useState(false);

  return (
    <div className='' id='Parent'>
      <nav className='fixed z-10 flex flex-row items-center justify-between w-full p-4 mx-auto '>

        <div>  
        <img src={logo} className="ml-5 w-28" alt='Tesla logo'/>
        </div>
  
        <div className='flex-row items-center justify-between hidden ml-0 space-x-1 font-bold text-gray-600 list-none rounded-full xl:flex'   id='links'>          
       
          <li><Link activeClass="active" to="Model3" spy={true} smooth={true} offset={0} duration={500} > <a href='#Model3'>Model 3</a></Link></li>                   
          <li><Link activeClass="active" to="ModelY" spy={true} smooth={true} offset={0} duration={500} > <a href='#ModelY'>Model Y</a></Link></li>
          <li> <Link activeClass="active" to="ModelS" spy={true} smooth={true} offset={0} duration={500} > <a href='#ModelS'>Model S</a></Link></li>
          <li><Link activeClass="active" to="ModelX" spy={true} smooth={true} offset={0} duration={500} > <a href='#ModelX'>Model X</a></Link></li>          
          <li><Link activeClass="active" to="SolarPanels" spy={true} smooth={true} offset={0} duration={500} > <a href='#SolarPanels'>Solar Panels</a></Link></li>
          <li><Link activeClass="active" to="SolarRoof" spy={true} smooth={true} offset={0} duration={500} > <a href='#SolarRoof'>Solar Proof</a></Link></li>
          <li><Link activeClass="active" to="Accessories" spy={true} smooth={true} offset={0} duration={500} > <a href='#Accessories'>Accessories</a></Link></li>
        </div>  


        <div className='flex items-center justify-between mr-5 space-x-4 font-bold text-gray-800 list-none' id='links'>          
          <li > <a href='#Shop' className='hidden xl:block' >Shop</a></li>
          <li> <a href='#Account'  className='hidden xl:block'>Account</a></li>
          <li> <a href='#Menu' onClick={ ()=> setSideMenuStatus(true)} >Menu</a></li>
        </div>

 
         

        <Menu show = {SideMenuStatus}>

          <div className='mb-5 text-right w-44 '>
          <span class="material-symbols-outlined cursor-pointer " onClick={ ()=> setSideMenuStatus(false)}>
           close
          </span>
          </div>

          <div className='justify-between mb-5 space-y-5 xl:hidden'>
          <li> <a href='#ModelS'>Model S</a></li>
          <li> <a href='#Model3'>Model 3</a></li>
          <li> <a href='#ModelY'>Model Y</a></li>
          <li> <a href='#ModelX'>Model X</a></li>
          <li> <a href='#Solar Roof'>Solar Roof</a></li>
          <li> <a href='#Solar panels'>Solar panels</a></li>

          </div>


          {/* Mobile menu  */}
          <div className='space-y-5 xl:hidden'>
          <li> <a href='#'>Existing Inventory</a></li>
          <li> <a href='#'>Used Inventory  </a></li>
          <li> <a href='# '>Trade-in  </a></li>
          <li> <a href='# '>Test Dirve  </a></li>
          <li> <a href='# '>Insurance  </a></li>
          <li> <a href='# '>PowerWall  </a></li>
          <li> <a href='# '>Commercial Energy  </a></li>
          <li> <a href='# '>Utilities  </a></li>
          <li> <a href='# '>Charging  </a></li>
          <li> <a href='# '>Find Us  </a></li>
          <li> <a href='# '>Support  </a></li>
          <li> <a href='# '>Investor Relations  </a></li>
          <li> <a href='# '>Shop  </a></li>
          <li> <a href='# '>Account  </a></li>
          <div className=' flex items-center'>
          <li> <a href='#' id='m'>More</a></li>
          <span class="material-symbols-outlined  cursor-pointer">chevron_right</span>
          </div>

          <div className='flex flex-row  ml-3 items-center' >
          <span class="material-symbols-outlined">language</span>
          <div className='flex flex-col ' id='language'>
          <li> <a href='# '>United States</a></li>
          <li> <a href='# '>English</a></li>
          </div>  
          </div>

          </div>

          {/* Desktop menu */}
          <div className='space-y-5 xl:block hidden '>
          <li> <a href='#'>Existing Inventory</a></li>
          <li> <a href='#'>Used Inventory  </a></li>
          <li> <a href='# '>Trade-in  </a></li>
          <li> <a href='# '>Test Dirve  </a></li>
          <li> <a href='# '>Insurance  </a></li>
          <li> <a href='# '>Cybertruck  </a></li>
          <li> <a href='# '>Roadster  </a></li>
          <li> <a href='# '>Semi  </a></li>
          <li> <a href='# '>Charging  </a></li>
          <li> <a href='# '>Powerwall </a></li>
          <li> <a href='# '>Commercial Energy  </a></li>
          <li> <a href='# '>Utilities </a></li>
          <li> <a href='# '>Find Us  </a></li>
          <li> <a href='# '>Support </a></li>
          <li> <a href='# '>Investor Relations</a></li>
 
          <div className='flex flex-row  ml-3 items-center' >
          <span class="material-symbols-outlined">language</span>
          <div className='flex flex-col ' id='language'>
          <li> <a href='# '>United States</a></li>
          <li> <a href='# '>English</a></li>
          </div>  
          </div>

          </div>
        

          </Menu>
      
        
      </nav>

      

      </div>
  )
}

export default Header


  
const Menu = styled.div`
position: absolute;
top: 0px;
right: 0px;
display: flex;
flex-direction: column;
padding: 1.25rem;
padding-left: 2rem;
padding-right: 3rem;
font-weight: 600;
text-align: left ;
list-style-type: none;
background-color: white;
height: 100vh;
overflow-y: scroll;

font-size: 14px;
 
a {
  padding: 0.6rem 1rem 0.6rem 1rem ;  
}

li a:hover {

  transition: all 0.2s linear;
  background-color: rgba(0, 0, 0, 0.623);
  color: white;
}

#language a  , #m{
  pointer-events: none;
}


transform: ${props => props.show ? 'translateX(0)' :'translateX(100%)' };
transition: transform 0.2s;

`