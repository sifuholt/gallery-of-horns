// first import react

import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import data from './data/data.json'
import { Form, ListGroup } from 'react-bootstrap';
import SelectedBeast from './Components/SelectedBeast';
import Modal from 'react-bootstrap/Modal';





// second class component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      SelectedBeast: '',
      image_url: '',
      beastDescription: '',
      heart: '',
      sortedData: data
    }
  }

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  }


  handleOpenModal = (title, description, image_url) => {
    this.setState({
      showModal: true,
      title: title,
      description: description,
      image_url: image_url,

    })
  }
  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  }

  handleSelect = (event) => {
    let selected = event.target.value;

    console.log (selected)

    if (selected === '1') {
      let newData = data.filter(beast => beast.horns === 1);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '2') {
      let newData = data.filter(beast => beast.horns === 2);
      this.setState({
        sortedData: newData
      })
    } else if (selected === '3') {
      let newData = data.filter(beast => beast.horns === 3);
      this.setState({
        sortedData: newData
      })
    }  else if (selected === '100') {
      let newData = data.filter(beast => beast.horns === 100);
      this.setState({
        sortedData: newData
      })
    } else if (selected === 'all') {
      let newData = data.filter(beast => beast.horns === 'all');
      this.setState({
        sortedData: newData
      })
    }
  } 


  addHearts = () => {
    this.setState({
      heart: this.state.heart + ''

    });

  }
  render() {
    return (
      <>
        <Header />

        <Form>
          <Form.Group>
            <Form.Select name="selected" onChange={this.handleSelect}>
              <option>Open this select menu</option>
              <option value = '1'>1</option>
              <option value = '2'>2</option>
              <option value = '3'>3</option>
              <option value = '100'>100</option>
              <option value = 'all'>all</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Main
          data={this.state.sortedData}
          handleOpenModal={this.handleOpenModal}
        />
        <SelectedBeast
          data={data}
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          title={this.state.title}
        />

        <Footer />

      </>
    )
  }
}


// third export component

export default App;








