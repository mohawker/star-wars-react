import React, { Component } from 'react'
import axios from 'axios'
import PeopleDetails from './components/PeopleDetails'

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
  }

  renderButtons() {
    const buttons = []
    for (let i = 1; i <= this.state.lastPage; i++) {
      buttons.push(
        <button onClick={() => this.pageButtonClick(i)}>{i}</button>
      )
    }
    return <div>{buttons}</div>
  }

  renderData() {
    const data = this.state.data.map(item => {
      return (<li key={item.id} className="list-group-item">
        {item.name}      
        <PeopleDetails peopleDetails={item} />
      </li>
      )
    })
    return data
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-primary mb-3">Star Wars Character Encyclopedia</h1>
        <h4 className="text-secondary mb-3">May the force be with you</h4>
        {this.state.loading === true ? 'Loading...' : this.renderData()}
        {this.renderButtons()}
      </div>
    )
  }
}

export default App