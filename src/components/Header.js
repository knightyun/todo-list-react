import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // 新增 todo
  handleSubmit(evt) {
    evt.preventDefault();

    // 处理空白字符
    this.setState(pre => ({
      todo: pre.todo.trim()
    }), () => {
      // 非空则提交
      if (this.state.todo.length > 0) {
        // 调用父组件方法
        this.props.onAddTodo(this.state.todo);
        // 清空输入
        this.setState({
          todo: ''
        })
      }
    })
  }

  handleChange(evt) {
    this.setState({
      todo: evt.target.value
    })
  }

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <label className="header-label">ToDoList</label>
          <input className="header-input" type="text"
            onChange={this.handleChange}
            value={this.state.todo}
            placeholder="添加 ToDo"
          />
        </form>
      </header>
    )
  }
}

export default Header;