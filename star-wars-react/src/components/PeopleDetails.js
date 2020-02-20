import React, { Component } from "react";
import axios from "axios";

class PeopleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      expanded: false,
      homeworld: null,
      species: null,
      films: [],
      vehicles: [],
      starships: []
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ expanded: !this.state.expanded });
  }

  getVehicles() {
    var vehiclesArray = [];
    const vehiclesURL = this.props.peopleDetails.vehicles;
    vehiclesURL.forEach(URL =>
      axios
        .get(URL)
        .then(res => {
          vehiclesArray.push(res.data.name);
        })
        .catch(err => {
          console.log(err);
        })
    );
    this.setState({ vehicles: vehiclesArray });
  }

  getStarships() {
    var starshipsArray = [];
    const starshipsURL = this.props.peopleDetails.starships;
    starshipsURL.forEach(URL =>
      axios
        .get(URL)
        .then(res => {
          starshipsArray.push(res.data.name);
        })
        .catch(err => {
          console.log(err);
        })
    );
    this.setState({ starships: starshipsArray });
  }

  getFilms() {
    var filmsArray = [];
    const filmsURL = this.props.peopleDetails.films;
    filmsURL.forEach(URL =>
      axios
        .get(URL)
        .then(res => {
          filmsArray.push(res.data.title);
          this.setState({ loading: false });
        })
        .catch(err => {
          console.log(err);
        })
    );
    this.setState({ films: filmsArray });
  }

  getHomeworld() {
    const homeworldURL = this.props.peopleDetails.homeworld;
    axios
      .get(homeworldURL)
      .then(res => {
        this.setState({
          homeworld: res.data.name
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getSpecies() {
    const speciesURL = this.props.peopleDetails.species;
    axios
      .get(speciesURL)
      .then(res => {
        this.setState({
          species: res.data.name
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getHomeworld();
    this.getSpecies();
    this.getFilms();
    this.getVehicles();
    this.getStarships();
  }

  render() {
    const details = this.props.peopleDetails;

    if (!this.state.expanded) {
      return (
        <div>
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={this.toggle}
            style={{ float: "right" }}
          >
            Show Details
          </button>
        </div>
      );
    } else if (this.state.expanded && this.state.loading) {
      return (
        <div>
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={this.toggle}
            style={{ float: "right" }}
          >
            Loading
          </button>
        </div>
      );
    }

    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={this.toggle}
          style={{ float: "right" }}
        >
          Hide Details
        </button>
        <ul>
          <li>Height: {details.height}</li>
          <li>Mass: {details.mass}</li>
          <li>Hair Color: {details.hair_color}</li>
          <li>Skin Color: {details.skin_color}</li>
          <li>Eye Color: {details.eye_color}</li>
          <li>Birth Year: {details.birth_year}</li>
          <li>Gender: {details.gender}</li>
          <li>Homeworld: {this.state.homeworld}</li>
          <li>Films: {this.state.films.join(", ")}</li>
          <li>Species: {this.state.species} </li>
          <li>Vehicles: {this.state.vehicles.join(", ")}</li>
          <li>Starships: {this.state.starships.join(", ")}</li>
        </ul>
      </div>
    );
  }
}

export default PeopleDetails;
