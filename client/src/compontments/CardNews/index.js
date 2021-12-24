import React from 'react';
import './styles.scss'
import { Card } from 'react-bootstrap';
import moment from 'moment'
import 'moment/locale/vi'

moment.locale('vi')


function CardNews({ feed }) {
   function handleClick (){
     
     window.open(feed.link) 
   }
    return (
        
    <Card onClick={handleClick} className="card-hover mt-3" >
    <Card.Img variant="top" src={feed.image} />
    <Card.Body>
    <Card.Title>{feed.title}</Card.Title>
      <Card.Text>
        {feed.description}
      </Card.Text>
      <div className="d-flex justify-content-between">
        <img  width="100px" height="20px" src={feed.category} alt="logo"/>
        <p className="iso-date"> {moment(feed.date).format('MMMM Do YYYY, h:mm a')}</p>

      </div>
     
    </Card.Body>
  </Card>
    );
}

export default CardNews;