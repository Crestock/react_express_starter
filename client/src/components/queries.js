import React, { Component } from "react";
import "./query.css";

class Queries extends Component {
  constructor() {
    super();
    this.state = {
      queries: []
    };
  }

  componentDidMount() {
    fetch("/api/queries")
      .then(res => res.json())
      .then(queries =>
        this.setState({ queries }, () =>
          console.log("Queries fetched fetched...", queries)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>queries</h2>
        <ul>
          {this.state.queries.map(query => (
            <li key={query.id}>
              {query.supplierName} {query.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Queries;
