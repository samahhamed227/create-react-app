import React from 'react';
import Card from 'react-bootstrap/Card';


class HornedBeasts extends React.Component {

  constructor() {
    super();
    this.state = {
      Votes: 0
       

    };
  }
  increaseHorneVotes = () => {
    this.setState({
      Votes: this.state.Votes + 1 
      
    });
    

  }
 

  render() {


    return (
      <div>
       
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={this.props.imagurl } onClick={this.increaseHorneVotes}  />
          <Card.Body>
            <Card.Title>The Title : {this.props.title}</Card.Title>
            <Card.Text>
              number of horns: {this.props.horns}
            </Card.Text>
            <Card.Text>
             Descriptions: {this.props.descriptions}
            </Card.Text>
            <Card.Text>
              Number of votes : {this.state.Votes} 💓
          
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}


export default HornedBeasts;