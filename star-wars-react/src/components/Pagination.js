import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const buttons = [];
    for (let i = 1; i <= this.props.lastPage; i++) {
      buttons.push(
        <li
          key={i}
          className={
            "page-item" + (this.props.currentPage === i ? " active" : "")
          }
        >
          <button
            className="page-link"
            onClick={() => this.props.pageButtonClick(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    return (
      <div>
        <ul
          className="pagination"
          style={{ justifyContent: "center", marginTop: "8px" }}
        >
          {" "}
          {buttons}{" "}
        </ul>
      </div>
    );
  }
}

export default Pagination;
