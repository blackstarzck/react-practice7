import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      active : false,
      selected : "",
      current : ""
    }
  }
  
  toggle = (e) => {
    this.setState({active: !this.state.active});
  }
  toggleA = (type) => {
    this.setState({selected: type});
  }
  toggleB = (item) => {
    this.setState({current: item});
  }

  render() {
    return (
      <div className="container">

        <label htmlFor="">type#1:</label>
          <ul>
            <li className={this.state.active ? 'active' : ''} onClick={(e) => this.toggle(e)}>button-A</li>
          </ul>

          <label htmlFor="">type#2:</label>
          <ul>
            <li className={this.state.selected === "type-A" ? 'active' : ''} onClick={() => this.toggleA("type-A")}>button-A</li>
            <li className={this.state.selected === "type-B" ? 'active' : ''} onClick={() => this.toggleA("type-B")}>button-B</li>
          </ul>

          <label htmlFor="">type#3:</label>
          <TabMenu 
            tabs={["button-A", "button-B"]}
            currntPage={this.state.current}
            setPage={this.toggleB}
          />
          <label htmlFor="">type#4:</label>
          <ul>
            <List name="button-A"/>
            <List name="button-B"/>
          </ul>
      </div>
    )
  }
}

// type#3
class TabMenu extends Component {
  render() {
    return (
      <ul>
        {this.props.tabs.map((item) => {
          const active = ((item === this.props.currntPage) ? 'active' : '');
          return (
            <li key={item} className={`${active}`} onClick={() => this.props.setPage(item)}>
              {item}
            </li>
          )
        })}
      </ul>
    )
  }
}

//type#4
const List = (props) => {
  const [ active, setActive ] = useState({
    on: false
  });
  return (
    <li className={active.on ? 'active' : ''} onClick={() => {setActive({on: !active.on})}}>
      {props.name}
    </li>
  )
}


export default App
