import { AppBar, Badge, Button, Toolbar, Typography} from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {

  const wishcount = useSelector(state=>state.Wishlist)
  var count = wishcount.length
  const cartcount = useSelector(state=>state.cart)
  var carttotal = cartcount.length

    return (
    <div>
        
      <AppBar style={{backgroundColor:"gray",justifyContent:"space-evevly",width:"100%"}} position="static">
        <Toolbar>
        <div className="col-6" style={{marginLeft:"20px"}}>
              <Typography style={{color:"black"}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Teerex 
              </Typography>
        </div>
              
        <div className="col-6" style={{marginLeft:"360px"}}>
        <Link to={'/Wishlist'} >  <Button style={{backgroundColor:"whitesmoke",color:"black",width:"150px",height:"50px",marginRight:"5px",}}  color="inherit"> <i style={{paddingRight:"10px"}} class="fa-solid fa-heart"></i> WishList <Badge style={{marginLeft:"15px"}} badgeContent={count} color="secondary"></Badge></Button> </Link> 

        <Link to={'/Cart'} >  <Button style={{backgroundColor:"whitesmoke",color:"black",width:"150px",height:"50px"}}  color="inherit"><i style={{paddingRight:"10px"}} class="fa-solid fa-cart-shopping"></i>Cart  <Badge style={{marginLeft:"15px"}} badgeContent={carttotal} color="secondary"></Badge></Button> </Link>  
        </div>
         
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar

