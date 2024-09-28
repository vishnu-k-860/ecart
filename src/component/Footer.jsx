import { Button } from '@mui/material'
import React from 'react'

function Footer() {
  return (
   <div id="footerpart" style={{marginTop:"5px",width:"100%",height:"60vh",border:"1px solid grey"}}>
        <div style={{display:"flex",flexDirection:"row",height:"55vh",justifyContent:"space-between"}}>
        <div style={{height:"100%",width:"500px",display:"flex",flexDirection:"column",marginTop:"30px"}}>
            <h2 style={{margin:"20px"}}><i class="fa-solid fa-truck"></i>Teerex</h2>
            <h5 style={{margin:"20px",color:"grey"}}>Designed and built with all the love in the world by the Teerex team with the help of our contributors.</h5>
            <h5 style={{margin:"20px",color:"grey"}}>Code licensed Teerex team, docs CC BY 3.0.</h5>
            <h5 style={{margin:"20px",color:"grey"}}>Currently v1.0.0.</h5>
        </div>
        <div style={{display:"flex",flexDirection:"column",marginTop:"30px"}}>
           <h4 style={{margin:"20px"}}>Links</h4>
           <a style={{margin:"20px",textDecoration:"none",color:"black"}} href="">Home</a>
           <a style={{margin:"20px",textDecoration:"none",color:"black"}} href="">Cart</a>
           <a style={{margin:"20px",textDecoration:"none",color:"black"}} href="">Wishlist</a>
        </div>
        <div style={{display:"flex",flexDirection:"column",marginTop:"30px"}}>
            <h4 style={{margin:"20px"}}>Guides</h4>
           <a style={{margin:"20px",textDecoration:"none",color:"black"}} href="">React</a>
           <a style={{margin:"20px",textDecoration:"none",color:"black"}}href="">React Bootstrap</a>
           <a style={{margin:"20px",textDecoration:"none",color:"black"}} href="">Routing</a>
        </div>
        <div  style={{display:"flex",flexDirection:"column",marginTop:"30px",marginRight:"10px"}}>
             <h4 style={{margin:"20px"}}>Contact Us</h4>
             <div>
                 <input className="mb-3" style={{width:"170px",height:"30px"}} type="text" placeholder=" Enter Email Id.." />
                 <Button style={{width:"90px",height:"35px",backgroundColor:"grey"}} variant="contained">Subscribe</Button>
                 
             </div>
             <div style={{margin:"20px",flexDirection:"row"}}>
                 <i style={{margin:"10px"}} class="fa-brands fa-facebook"></i>
                 <i style={{margin:"10px"}} class="fa-brands fa-instagram"></i>
                 <i style={{margin:"10px"}} class="fa-brands fa-twitter"></i>
                 <i style={{margin:"10px"}} class="fa-brands fa-linkedin-in"></i>
             </div>

        </div>
       </div>
       <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
          <h5>Copyright © 2023 E-Cart. Built with React.</h5>
       </div>
   </div>
  )
}

export default Footer
