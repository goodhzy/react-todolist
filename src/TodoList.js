import React, { Component } from "react";
import TodoListUI from "./TodoListUI";
import { message } from "antd";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemChangeAction,
  getDelItemChangeAction,
  getInitListChangeAction
} from "./store/actionCreators";
import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...store.getState(),
    };
    this.textInput = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleItemDel = this.handleItemDel.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDel={this.handleItemDel}
      />
    );
  }
  componentDidMount() {
    axios.get('http://localhost:8000/list').then(res=>{
            const data = res.data.data
            const action = getInitListChangeAction(data)
            store.dispatch(action)  
        })
  }
  handleInputChange(e) {
    const value = e.target.value;
    const action = getInputChangeAction(value);
    store.dispatch(action);
  }
  handleBtnClick() {
    if (!this.state.inputValue) {
      message.warn("输点内容吧,亲");
      return;
    }
    const list = [...this.state.list, this.state.inputValue];

    const action = getAddItemChangeAction(list);
    store.dispatch(action);
  }
  handleItemDel(index) {
    const action = getDelItemChangeAction(index);
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
}

export default TodoList;
