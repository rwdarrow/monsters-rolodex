import React from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    // State changes as a result of user interaction. It exists in one location and
    // trickles down the component tree as props to whatever component needs it.
    // So, state -> props as state is passed down to child components.
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // When the component mounts (or is created), the fetch function will fetch users
  // from the URL provided, convert it to JSON and set the monster list param of our state
  // to be the list of users.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }

  // Normally, must bind handleChange to 'this' of the class so that JS knows that it is
  // referring to this particular class. If you do not bind, it will not work because
  // this.handleChange would be undefined due to the way JS handles function calls:
  //    this.handleChange = this.handleChange.bind(this)
  // However, due to ES6 lexically scoping arrow functions to classes, we can instead
  // define handleChange as an arrow function and its scope will automically be part of
  // this class without having to bind. This is what we are doing below.
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    // Destructure this.state into monsters and searchField objects. We do this
    // because we do not want to modify the base objects in this.state. This is
    // equivalent to:
    // 'const monsters = this.state.monsters'
    //                and
    // 'const searchField = this.state.searchField'
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
