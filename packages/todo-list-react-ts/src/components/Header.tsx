import React, { ChangeEvent, FormEvent } from "react";

interface Props {
  onAddTodo: (item: string) => void;
}
interface State {
  todo: string;
}

export default class Header extends React.Component<Props, State> {
  readonly state: State = {
    todo: "",
  };

  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // 新增 todo
  handleSubmit(evt: FormEvent): void {
    evt.preventDefault();

    this.setState(
      (pre) => ({ todo: pre.todo.trim() }),
      () => {
        if (this.state.todo.length > 0) {
          this.props.onAddTodo(this.state.todo);
          this.setState({ todo: "" });
        }
      }
    );
  }

  handleChange(evt: ChangeEvent<HTMLInputElement>): void {
    this.setState({ todo: evt.target.value });
  }

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <label className="header-label">ToDoList</label>
          <input
            className="header-input"
            type="text"
            onChange={this.handleChange}
            value={this.state.todo}
            placeholder="添加 ToDo"
          />
        </form>
      </header>
    );
  }
}