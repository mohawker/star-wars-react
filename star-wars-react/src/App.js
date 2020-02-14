import React, { Component } from 'react';
import axios from 'axios';
import Logo from './assets/star-wars-logo.png';
import Loading from './assets/BB8-loading.gif';
import PeopleDetails from './components/PeopleDetails';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      lastPage: 1, // actually depends on the api
      data: [],
      loading: false
    }
  }

  componentDidMount() {
    this.fetchData(1)
  }

  fetchData = index => {
    this.setState({ loading: true })
    axios
      .get('https://swapi.co/api/people?page=' + index)
      .then(res => {
        this.setState({
          loading: false,
          data: res.data.results,
          lastPage: res.data.count / 10 + 1 // or something else
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  pageButtonClick = index => {
    console.log('fetching ' + index + ' page')
    this.fetchData(index)
    this.setState({currentPage: index})
  }

  renderButtons() {
    const buttons = []
    for (let i = 1; i <= this.state.lastPage; i++) {
      buttons.push(
        <li className={"page-item" + (this.state.currentPage === i ? ' active' : '')}> 
        <button className="page-link"onClick={() => this.pageButtonClick(i)}>{i}</button>
        </li>
      )
    }
    return <div> <ul className = "pagination" style={{justifyContent: 'center', marginTop: '8px'}}> {buttons} </ul> </div>
  }

  renderData() {
    const data = this.state.data.map(item => {
      return (<div className="list-group">
        <li key={item.id} className="list-group-item">
        <h5>{item.name}</h5>
        <hr style={{marginTop:'0', borderColor:"#AAAAAA", opacity:"25%"}}/>
        <PeopleDetails peopleDetails={item} />
      </li>
      </div>
      )
    })
    return data
  }

  render() {
    return (
      <div className="container mt-5">
        <img src={Logo} style={{width:'25%', display:'block', marginLeft:'auto', marginRight:'auto'}} alt="Logo" />
        <h3 style={{textAlign:'center', marginBottom:'0px'}}>Character Encyclopedia</h3>
        {this.renderButtons()}
        {this.state.loading === true ? <img src={Loading} style={{width:'20%', display:'block', marginLeft:'auto', marginRight:'auto'}} alt="Loading..."/> : this.renderData()}
        {this.renderButtons()}
      </div>
    )
  }
}

export default App