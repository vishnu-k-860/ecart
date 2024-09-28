import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlist } from '../Redux/Wishslice'
import { addToCart } from '../Redux/Cartslice'
import { Link } from 'react-router-dom'

function Wishlist() {

  const wisharray = useSelector((state)=>state.Wishlist)
  console.log(wisharray);
  
  const dispatches = useDispatch()
  return (
    <div style={{width:"100%",backgroundColor:"white"}}>
      <Row>{
      wisharray.length>0?
      wisharray.map((item)=>(
        <Col lg={3} md={3} sm={1}>
<Card style={{ width: "300px",height:"550px",margin:"15px"}}>
<Card.Img style={{width:"299px",height:"250px"}} variant="top" src= {item.image}/>
<Card.Body>
  <Card.Title>{item.title}</Card.Title>
  <Card.Text>
  {item.description.slice(1,70)}...
  </Card.Text>
  <Card.Text>
  ${item.price}
  </Card.Text>
  <Button style={{color:"red",fontSize:"30px",marginTop:"10px",marginRight:"150px"}} onClick={()=>dispatches(removeWishlist(item.id))}><i class="fa-solid fa-trash"></i></Button>
  <Button style={{color:"yellow",fontSize:"30px",marginTop:"10px"}} onClick={()=>dispatches(addToCart(item))}><i class="fa-solid fa-cart-shopping"></i></Button> 
 
</Card.Body>
</Card>
</Col>

)):<div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<img src="https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png" alt="" />
<Link to={'/'} > <Button >Back to home</Button> </Link>
</div>
}   
</Row>  
    </div>
  )
}

export default Wishlist
