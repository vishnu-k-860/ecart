import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../Redux/Cartslice';
import { Box, CardActions, CardContent, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);


function Cart() {

  const navigate = useNavigate()

  const cartcounts = useSelector(state=>state.cart)
  var cartlength = cartcounts.length


  const cartArray = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  const[sum,setSum]=useState("")
  

  const checkout=()=>{
    alert("order success..")
    dispatch(emptyCart())
    navigate('/')
  }

  const totalsum=()=>{ 
  if(cartArray.length>0){
    var total = cartArray.map(n=>n.price)
    setSum(total.reduce((n1,n2)=>n1+n2))
  }}

  useEffect(()=>{
     totalsum()
  },[cartArray])

return(
    <div style={{width:"100%",backgroundColor:"white",height:"auto"}}>
      
            <Row>{

      cartArray.length>0?
      cartArray.map((item)=>(
        <Col lg={3} md={3} sm={1}>

<Card style={{ width: "300px",height:"580px",margin:"15px"}}>
<Card.Img style={{width:"299px",height:"250px"}} variant="top" src= {item.image}/>
<Card.Body>
  <Card.Title>{item.title}</Card.Title>
  <Card.Text>
  {item.description.slice(1,70)}...
  </Card.Text>
  <Card.Text>
  ${item.price}
  </Card.Text>
  <Button style={{color:"red",fontSize:"30px",marginTop:"10px",marginRight:"180px"}} onClick={()=>dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash"></i></Button>
</Card.Body>
</Card>

</Col>

)): <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
  <img src="https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png" alt="" />
  <Link to={'/'} > <Button style={{marginBottom:"10px"}} >Back to home</Button> </Link>

</div>

}
</Row>

{
cartArray.length>0 ?

<div id="summary">
  <Card  style={{display:"flex",alignItems:"center",justifyContent:"center",width:"300px"}} >
      <CardContent>
        <Typography style={{fontSize:"30px",color:"yellowgreen"}}>
          Cart Summary
        </Typography>
        <Typography style={{fontSize:"25px",color:"green"}} sx={{ mb: 1.5 }} color="text.secondary">
        Total Items:{cartlength}
        </Typography>
        <Typography style={{fontSize:"25px",color:"red"}} variant="body2">
        Total: ${sum}
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={()=>checkout()} >Check Out</Button> </CardActions>
    </Card>
  </div> 
  :""
  }     
  </div>
)
}
export default Cart
