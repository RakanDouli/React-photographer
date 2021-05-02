import React from 'react'

import {motion} from 'framer-motion'
import {pageAnimation,titleAnim} from "../pages/animation"
import styled from 'styled-components';
const ContactUs=()=> {
    return (
        <ContactStyle
        
        exit="exit" variants={pageAnimation} initial="hidden" animate="show"
        style={{background:"#fff"}}>
       <Title>
           <Hide>
               <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
           </Hide>
       </Title>
       <div>
           <Hide>
           <Social variants={titleAnim}>
           <Circle/>
               <h2>Send Us a Massage</h2>
           </Social>
           </Hide>
            <Hide>
            <Social variants={titleAnim}>
           <Circle/>
               <h2>Vist our shop</h2>
           </Social>
            </Hide>
            <Hide>
                <Social variants={titleAnim}>
            <Circle/>
                <h2>Check our socialmedia</h2>
            </Social>
            </Hide>
         
       
          
       </div>
       </ContactStyle>
    )
}
const ContactStyle=styled(motion.div)`
padding:5rem 10rem;
/* color:#353535; */
min-height:90vh;
@media (max-width:1300px){
    padding:2rem 2rem;
    h2{
        font-size:2rem;
    }
}
`
const Title=styled.div`
margin-bottom:4rem;

`
const Hide=styled.div`
overflow:hidden;
`
const Circle=styled.div`
border-radius:50%;
width:3rem;
height:3rem;
background-color:#008891;
@media (max-width:1300px){
    width:1.5rem;
    height:1.5rem;
}
`
const Social=styled(motion.div)`
display:flex;
align-items:center;
h2{
  margin:2rem;  

}
`
export default ContactUs;
