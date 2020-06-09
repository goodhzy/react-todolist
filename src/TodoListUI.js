import React, { Fragment } from 'react'
import { Input,Button,List } from 'antd';


const TodoListUI = (props)=>{
    return (
        <Fragment>
                {/* 这是jsx注释内容 */}
            <div style={{margin: 10}}>
                <Input value={props.inputValue} onChange={props.handleInputChange} style={{width: 300,marginRight:20}} />
                <Button onClick={props.handleBtnClick}>提交</Button>
            
            <List
                style={{width: 300,marginTop: 20}}
                size="small"
                bordered
                dataSource={props.list}
                renderItem={(item,index) => <List.Item onClick={()=>props.handleItemDel(index)}>{item}</List.Item>}
            />
            </div>
            </Fragment>
    )
}

export default TodoListUI