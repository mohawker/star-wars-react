import React, { Component } from "react";
import PeopleDetails from "./PeopleDetails";

class PeopleList extends Component {
  render() {
    const peopleList = this.props.data.map(item => {
      return (
        <div className="list-group" key={item.id}>
          <li className="list-group-item">
            <h5>{item.name}</h5>
            <hr
              style={{ marginTop: "0", borderColor: "#AAAAAA", opacity: "25%" }}
            />
            <PeopleDetails peopleDetails={item} />
          </li>
        </div>
      );
    });
    return peopleList;
  }
}

export default PeopleList;
