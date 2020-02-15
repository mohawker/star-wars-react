import React, { Component } from 'react'
import axios from 'axios'
//css
import './App.css'
//assets
import Logo from './assets/star-wars-logo.png'
import Loading from './assets/BB8-loading.gif'
import Yoda from './assets/baby-yoda.gif'
// components
import PeopleList from './components/PeopleList'
import Pagination from './components/Pagination'

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
    this.setState({ currentPage: index })
  }

  render() {
    return (
      <div className="container mt-3" >
        <img src={Logo} className="center" alt="Logo" />
        <h3 style={{ textAlign: 'center', marginBottom: '0px' }}>Character Encyclopedia</h3>
        <Pagination currentPage={this.state.currentPage} lastPage={this.state.lastPage} pageButtonClick={this.pageButtonClick}/>
        {this.state.loading === true ? <img src={Loading} className="center" alt="Loading..." /> : <PeopleList data={this.state.data}/>}
        <Pagination currentPage={this.state.currentPage} lastPage={this.state.lastPage} pageButtonClick={this.pageButtonClick}/>
        <p style = {{textAlign: 'center'}}>  Created by: Jun Jia <img src={Yoda} style = {{width:"8%"}} alt=":)" /> </p>
      </div>
    )
  }
}

export default App