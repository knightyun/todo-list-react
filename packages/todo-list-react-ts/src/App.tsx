import React, { ChangeEvent, MouseEvent } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import TodoContext from "./components/TodoContext";

/** class 组件 的 props 类型 */
interface Props {}

/** todo 单项类型 */
export type Item = string;

/** todo 列表类型 */
export type Lists = Item[];

/** class 组件 state 的类型 */
export interface Todo {
  readonly todoLists: Lists;
  readonly doneLists: Lists;
}

interface IApp extends App {}

/** 传递给子组件的处理函数 */
export interface Handlers {
  handleDelItem: IApp["handleDelItem"];
  handleExchangeList: IApp["handleExchangeList"];
  handleRenameTodo: IApp["handleRenameTodo"];
}

/** todo 项目类型 */
export type TodoType = "todoList" | "doneList";

// 组件的类型参数：第一个为组件接收参数的类型，第二个为 state 的类型；
export default class App extends React.Component<Props, Todo> {
  readonly state: Todo = {
    todoLists: [], // 待做项
    doneLists: [], // 完成项
  };

  handlers: Handlers = {
    handleDelItem: this.handleDelItem.bind(this),
    handleExchangeList: this.handleExchangeList.bind(this),
    handleRenameTodo: this.handleRenameTodo.bind(this),
  };

  constructor(props: Props) {
    super(props);
    if (localStorage.todo) this.state = JSON.parse(localStorage.todo);

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleDelItem = this.handleDelItem.bind(this);
    this.handleExchangeList = this.handleExchangeList.bind(this);
    this.handleRenameTodo = this.handleRenameTodo.bind(this);
    this.handleClearTodo = this.handleClearTodo.bind(this);
  }

  /**
   * 新增 todo 项（正在进行）
   *
   * @param {Item} item - todo 项目
   * @memberof App
   */
  handleAddTodo(item: Item): void {
    this.setState((pre: Todo) => ({
      todoLists: Array.prototype.concat.call(pre.todoLists, item).reverse(),
    }));
  }

  /**
   * 删除 todo 单项（包括待做和已完成项）
   *
   * @param {number} idx  - 要删除的项目索引
   * @param {string} type - 在指定列表中删除
   * @memberof App
   */
  handleDelItem(idx: number, type: TodoType): void {
    if (type === "todoList") {
      this.setState((pre) => {
        const _todoLists: Todo["todoLists"] = pre.todoLists.slice();

        Array.prototype.splice.call(_todoLists, idx, 1);

        return { todoLists: _todoLists };
      });
    } else if (type === "doneList") {
      this.setState((pre) => {
        const _doneLists: Todo["doneLists"] = pre.doneLists.slice();

        Array.prototype.splice.call(_doneLists, idx, 1);

        return { doneLists: _doneLists };
      });
    }
  }

  /**
   * 切换项目待做或已完成状态
   *
   * @param {number} idx                   - 要删除的项目索引
   * @param {TodoType} type                - 在指定列表中删除
   * @param {MouseEvent | ChangeEvent} evt - 事件对象
   * @memberof App
   */
  handleExchangeList(
    idx: number,
    type: TodoType,
    evt: MouseEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>
  ): void {
    evt.preventDefault();

    // 待做切换完成
    if (type === "todoList") {
      this.setState((pre) => ({
        doneLists: Array.prototype.concat.call(
          pre.todoLists[idx],
          pre.doneLists
        ),
      }));
      this.handleDelItem(idx, type);
    }

    // 完成切换待做
    if (type === "doneList") {
      this.setState((pre) => ({
        todoLists: Array.prototype.concat(pre.todoLists, pre.doneLists[idx]),
      }));
      this.handleDelItem(idx, type);
    }
  }

  /**
   * 修改 todo 项内容（包括待做与完成项）
   *
   * @param {number} idx      - 要删除的项目索引
   * @param {TodoType} type   - 在指定列表中删除
   * @param {ChangeEvent} evt - 事件对象
   * @memberof App
   */
  handleRenameTodo(
    idx: number,
    type: TodoType,
    evt: ChangeEvent<HTMLInputElement>
  ): void {
    const newTodo: TodoType = evt.target.value as TodoType;

    if (type === "todoList") {
      this.setState((pre) => {
        var _todoLists = pre.todoLists;

        _todoLists[idx] = newTodo;

        return { todoLists: _todoLists };
      });
    } else if (type === "doneList") {
      this.setState((pre) => {
        var _doneLists = pre.doneLists;

        _doneLists[idx] = newTodo;

        return { doneLists: _doneLists };
      });
    }
  }

  /**
   * 清空所有 todo 项
   *
   * @memberof App
   */
  handleClearTodo(): void {
    this.setState({
      todoLists: [],
      doneLists: [],
    });
  }

  render() {
    // 本地存储 todo
    const todo: Todo = this.state;
    localStorage.setItem("todo", JSON.stringify(todo));

    return (
      <TodoContext.Provider value={this.handlers}>
        <Header onAddTodo={this.handleAddTodo} />
        <Main
          todoLists={this.state.todoLists}
          doneLists={this.state.doneLists}
        />
        <Footer onCLearTodo={this.handleClearTodo} />
      </TodoContext.Provider>
    );
  }
}
