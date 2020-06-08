import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class TodoList extends Component {
    constructor(props){
        super(props)
        console.log('init');
        
        this.state = {
            inputValue: '',
            list: []
        }
        this.textInput = React.createRef();
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleItemDel = this.handleItemDel.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
    }

    UNSAFE_componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');  
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    render(){
    console.log('parent render');
    
        return (
            <Fragment>
                {/* 这是jsx注释内容 */}
            <div>
                <label htmlFor="inputArea">输入内容</label>
                <input ref={this.textInput} id="inputArea" value={this.state.inputValue} onChange={this.handleInputChange} />
                <button onClick={this.handleBtnClick}>提交</button>
            </div>
            <ul>
               {this.getTodoItem()}
            </ul>
            </Fragment>
        )
    }

    getTodoItem(){
        return  this.state.list.map((item,index)=>{
            return (
             <TodoItem content={item} key={index} index={index} deleteItem={this.handleItemDel} />
            )
        })
    }
    handleInputChange(e){
        const value = e.target.value
        
        this.setState(()=>({inputValue: value}))
    }
    handleBtnClick(){
        this.setState((prevState)=>({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    handleItemDel(index){
        this.setState((prevState)=>{
            const list = [...prevState.list]
            list.splice(index, 1)
            return {list}
        })
    }
}

TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

export default TodoList