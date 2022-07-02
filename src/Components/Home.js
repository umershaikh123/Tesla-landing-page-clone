import React from 'react'
import Section from './Section'
// Images
import modelS from './img/model-s.jpg';
  import modelY from './img/model-y.jpg';
 import model3 from './img/model-3.jpg';
 import modelx from './img/model-x.jpg';
 import solarPanels from './img/solar-panel.jpg';
 import solarRoof from './img/solar-roof.jpg';
 import accessories from './img/accessories.jpg';
 import { Link,animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 


const Home = () => {


  return (
    <div className=' h-full-page'>   



       
       
        <Section        
        title="Model 3"
        backgroundImg= {model3}
        id = "Model3"
        />

       
        <Section
        title="Model Y" 
        backgroundImg= {modelY}
        
        id = "ModelY"
        />

        <Section
        title="Model S" 
        backgroundImg= {modelS}
        id = "ModelS"
       
        />

        <Section
        title="Model X" 
        backgroundImg= {modelx}
        id = "ModelX"
        />

        <Section
        title="Solar Panels" 
        backgroundImg= {solarPanels}
        description = "Lowest Cost Solar Panels in America" 
        link = "" 
        leftBtnText = "Order Now"
        RightBtnText = "Learn More"
        id = "SolarPanels"
        />                        
 
        <Section
        title="Solar Roof" 
        backgroundImg= {solarRoof}
        description = "Produce Clean Energy From Your Roof" 
        link = "" 
        leftBtnText = "Order Now"
        RightBtnText = "Learn More"
        id = "SolarRoof"
        />       
 

        <Section
          title="Accessories" 
          backgroundImg= {accessories}
          description = "" 
          link = " " 
          leftBtnText = "Shop Now"
          RightBtnText = ""
          displayBtn = "none"       
          id = "Accessories"
         
          />   
           
    </div>
  )
}

 

export default Home


 