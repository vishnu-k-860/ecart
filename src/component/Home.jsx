import { Button } from '@mui/material'
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Cartslice';
import { addWishlist } from '../Redux/Wishslice';




function Home() {
  const[product,Setproduct]= useState([])
  const[searchproduct,setSearchproduct] = useState([])
  const dispatch = useDispatch()
  const cardValue = async()=>{
    const output = await fetch('https://fakestoreapi.com/products')    
    const items = await output.json()
     Setproduct(items) 
     setSearchproduct(items)
     console.log(items);
        
  }
  useEffect(()=>{
    cardValue()
  },[])

  const searchoutput = (name)=>{
    Setproduct(searchproduct.filter(item=>item.title.includes(name)))
  }

  return (
   
        <div>
          <Row style={{display:'flex',alignItems:"center",justifyContent:"center",marginTop:"10px"}}>
          <input onChange={(e)=>searchoutput(e.target.value)} className="mb-3" style={{width:"250px",height:"30px"}} type="text" placeholder=" Search.." />
          </Row>
        
        
          <Row>
          {
            product.length>0?
            product.map((item)=>(
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
         <div style={{display:"flex",flexDirection:"row",alignItems:"end"}}>
            <Button style={{color:"red",fontSize:"30px",marginTop:"10px",marginRight:"150px"}} onClick={()=>dispatch(addWishlist(item))}><i class="fa-regular fa-heart"></i></Button>
            <Button style={{color:"yellow",fontSize:"30px",marginTop:"10px"}} onClick={()=>dispatch(addToCart(item))}><i class="fa-solid fa-cart-shopping"></i></Button>
         </div>
        </Card.Body>
      </Card>
           </Col>
      
)):"Nothing to display"
} 
</Row>      
        </div>
  )
}

export default Home
