import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <main>
                <DoingTodo doingLists={ this.props.todoLists }
                    onDelItem={ this.props.onDelItem }
                    onExchangeList={ this.props.onExchangeList }
                    onRenameTodo={ this.props.onRenameTodo } />
                <DoneTodo doneLists={ this.props.doneLists }
                    onDelItem={ this.props.onDelItem }
                    onExchangeList={ this.props.onExchangeList }
                    onRenameTodo={ this.props.onRenameTodo } />
            </main>
        )
    }
}

// 正在进行
class DoingTodo extends React.Component {
    render() {
        return (
            <div className="doing">
                <div className="doing-head">
                    <div className="head-text">正在进行</div>
                    <div className="head-num">
                        { this.props.doingLists.length }
                    </div>
                </div>

                <TodoList lists={ this.props.doingLists }
                    className="doing-list"
                    listType="todoList"
                    onDelItem={ this.props.onDelItem }
                    onExchangeList={ this.props.onExchangeList }
                    onRenameTodo={ this.props.onRenameTodo } />
            </div>
        )
    }
}

// 已经完成
class DoneTodo extends React.Component {
    render() {
        return (
            <div className="done">
                <div className="done-head">
                    <div className="head-text">正在进行</div>
                    <div className="head-num">
                        { this.props.doneLists.length }
                    </div>
                </div>

                <TodoList lists={ this.props.doneLists }
                    className="done-list"
                    listType="doneList"
                    onDelItem={ this.props.onDelItem }
                    onExchangeList={ this.props.onExchangeList }
                    onRenameTodo={ this.props.onRenameTodo } />
            </div>
        )
    }
}

// 复用的列表组件
class TodoList extends React.Component {
    render() {
        // 获取列表项目内容
        var lists = this.props.lists || [];

        var elLists = Array.prototype.map.call(
            lists,
            (item, idx) => (
            <TodoListItem item={ item } key={ idx }
                listType={ this.props.listType } idx={ idx }
                onDelItem={ this.props.onDelItem }
                onExchangeList={ this.props.onExchangeList }
                onRenameTodo={ this.props.onRenameTodo } />
            )
        );

        return (
            <ul className={ this.props.className }>
                { elLists }
            </ul>
        )
    }
}

// 复用的列表单项组件
class TodoListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isInput: false
        }
        this.inputRef = React.createRef();
    }

    handleDragStart(evt) {
        evt.dataTransfer.setData('text/plain', 'hello')
    }

    handleDrop(evt) {
        console.log()
    }

    render() {
        return (
            <li className="todo-list-item" draggable="true"
                onDragStart={ () => this.handleDragStart() }
                onDrop={ () => this.handleDrop() }
            >
                
                {/* 标记完成或待做 */}
                {
                this.props.listType === 'todoList' ?
                    <input type="checkbox" className="item-check"
                        onClick={ (evt) => this.props.onExchangeList(this.props.idx,
                        this.props.listType, evt) } /> :
                    <input type="checkbox" className="item-check"
                        onChange={ (evt) => this.props.onExchangeList(this.props.idx,
                        this.props.listType, evt) } checked />
                }

                {/* 内容编辑状态切换 */}
                {
                this.state.isInput ?
                    <input className="item-content-input"
                        value={ this.props.item } ref={ this.inputRef }
                        onChange={ evt => this.props.onRenameTodo(
                            this.props.idx, this.props.listType, evt
                        )}
                        onBlur={ () => this.setState({
                            isInput: !this.state.isInput
                        })} /> :
                    <p className="item-content-p"
                        onClick={ () => {
                            this.setState({
                                isInput: !this.state.isInput
                            }, () => {
                                this.inputRef.current.focus();
                            });
                        }}
                    >{ this.props.item }</p>
                }
                
                {/* 删除项目 */}
                <span className="item-delete"
                    onClick={ () => this.props.onDelItem(this.props.idx, 
                    this.props.listType) }
                >X</span>
            </li>
        )
    }
}

export default Main;