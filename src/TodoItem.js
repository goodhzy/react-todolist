import React, { Component } from 'react'
class TodoItem extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }
    render(){
    console.log('child render');
    
        //TODO 视频说父组件的render函数被运行时,它的子组件的的render也会被运行,经测试不会,待验证
        // 当props或state发生改变时,会执行一次render函数 
    const {content} = this.props
    return <li onClick={this.handleClick}>{content}</li>
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    handleClick(){
        const { deleteItem, index} = this.props
        deleteItem(index)
    }
}

export default TodoItem