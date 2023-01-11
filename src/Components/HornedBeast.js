import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CarouselItem } from 'react-bootstrap';



class HornedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      likes: 0,
    }
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  }


  render() {
    return (
      <>
        <article>
          <Card style={{ width: '17rem' }}>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.state.likes}Likes</Card.Text>
              <Card.Img src={this.props.image_url}></Card.Img>
              <Button variant="primary" onClick={this.handleLikes}>Likes</Button>
            </Card.Body>
          </Card>
        </article>
      </>
    )
  }

}

export default HornedBeast;

  // render() {
    // return (
      // <>
      {/* <article> */}
        {/* <h2>{this.props.title}</h2> */}
{/*  */}
        {/* <img src={this.props.image}  */}
          // alt={this.description} 
          // title={this.props.title} />
{/*  */}
        {/* <p>{this.props.description}</p> */}
      {/* </article> */}
      {/* </> */}
    // )
  // }


