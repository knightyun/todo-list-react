import React from 'react';
import Header from './todo-list-module/Header';
import Main from './todo-list-module/Main';
import Footer from './todo-list-module/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);

        // 获取本地存储数据
        var todo = {
            todoLists: [], // 待做项
            doneLists: []  // 完成项
        }
        this.state = localStorage.todo ?
                     JSON.parse(localStorage.todo) : todo;

        this.handleAddTodo      = this.handleAddTodo.bind(this);
        this.handleDelItem      = this.handleDelItem.bind(this);
        this.handleExchangeList = this.handleExchangeList.bind(this);
        this.handleRenameTodo   = this.handleRenameTodo.bind(this);
        this.handleClearTodo    = this.handleClearTodo.bind(this);
    }
    
    /**
     * 新增 todo 项（正在进行）
     *
     * @param {string} item - todo 项目
     * @memberof App
     */
    handleAddTodo(item) {
        this.setState(pre => ({
            todoLists: Array.prototype.concat.call(
                pre.todoLists, item
            ).reverse()
        }), () => {
            // 由于 setState 是异步的，同步任务中不能马上得到当前改变值，
            // 设置在回调函数中执行
            // console.log('todoLists:', this.state.todoLists);
        });
    }

    /**
     * 删除 todo 单项（包括待做和已完成项）
     * 
     * @param {number} idx  - 要删除的项目索引
     * @param {string} type - 在指定列表中删除
     * @memberof App
     */
    handleDelItem(idx, type) {
        if (type === 'todoList') {
            this.setState(pre => {
                var _todoLists = pre.todoLists.slice();
                
                Array.prototype.splice.call(_todoLists, idx, 1);
    
                return { todoLists: _todoLists }
            });
            return;
        }

        if (type === 'doneList') {
            this.setState(pre => {
                var _doneLists = pre.doneLists.slice();
                
                Array.prototype.splice.call(_doneLists, idx, 1);
    
                return { doneLists: _doneLists }
            });
            return;
        }
    }

    /**
     * 切换项目待做或已完成状态
     *
     * @param {number} idx  - 要删除的项目索引
     * @param {string} type - 在指定列表中删除
     * @param {Event}  evt  - 事件对象
     * @memberof App
     */
    handleExchangeList(idx, type, evt) {
        evt.preventDefault();

        // 待做切换完成
        if (type === 'todoList') {
            this.setState(pre => ({
                doneLists: Array.prototype.concat.call(
                    pre.todoLists[idx],
                    pre.doneLists,
                )
            }));
            this.handleDelItem(idx, type);
        }

        // 完成切换待做
        if (type === 'doneList') {
            this.setState(pre => ({
                todoLists: Array.prototype.concat(
                    pre.todoLists,
                    pre.doneLists[idx]
                )
            }));
            this.handleDelItem(idx, type);
        }
    }

    /**
     * 修改 todo 项内容（包括待做与完成项）
     *
     * @param {number} idx  - 要删除的项目索引
     * @param {string} type - 在指定列表中删除
     * @param {Event}  evt  - 事件对象
     * @memberof App
     */
    handleRenameTodo(idx, type, evt) {
        var newTodo = evt.target.value;

        if (type === 'todoList') {
            this.setState(pre => {
                var _todoLists = pre.todoLists;

                _todoLists[idx] = newTodo;

                return { todoLists: _todoLists }
            })
        }
        if (type === 'doneList') {
            this.setState(pre => {
                var _doneLists = pre.doneLists;

                _doneLists[idx] = newTodo;

                return { doneLists: _doneLists }
            })
        }
    }
    
    /**
     * 清空所有 todo 项
     *
     * @memberof App
     */
    handleClearTodo() {
        this.setState({
            todoLists: [],
            doneLists: []
        })
    }

    render() {
        // 本地存储 todo
        var todo = this.state;
        localStorage.setItem(
            'todo', JSON.stringify(todo)
        );

        return (
            <React.Fragment>
                <Header onAddTodo={ this.handleAddTodo } />

                <Main todoLists={ this.state.todoLists }
                    doneLists={ this.state.doneLists }
                    onDelItem={ this.handleDelItem }
                    onExchangeList={ this.handleExchangeList }
                    onRenameTodo={ this.handleRenameTodo } />

                <Footer onCLearTodo={ this.handleClearTodo } />
            </React.Fragment>
        )
    }
}

export default App;