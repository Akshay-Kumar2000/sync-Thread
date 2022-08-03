import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import '../App.css';
import "./Cards.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export const Shedule = () => {

    const CardInfo = [
        {title:"Pune", text:"Search for Pune"},
        {title:"Delhi", text:"Search for Delhi"},
        {title:"Kerala", text:"Search for Kerala"},
        {title:"Goa", text:"Search for Goa"},
        {title:"Mumbai", text:"Search for Mumbai"},
        {title:"Himachal Pradesh", text:"Search for Himachal Pradesh"},
        {title:"Kolkata", text:"Search for Kolkata"},
        {title:"Haryana", text:"Search for Haryana"},
    ]

    const renderCard = (card,index) => {
        return(
            <Card style={{ width: '18rem' }} key={index} classNane="box">
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        )
    }
  return (
    <>
    <Navbar/>
    <hr />
    <div className='divcc'>
    <div className="Shedule">      
      <h2 className='h2'>Location Cards</h2>
    </div>
    </div>
    <br />
    <div className="grid">{CardInfo.map(renderCard)}</div>
    
    </>
  );
}


