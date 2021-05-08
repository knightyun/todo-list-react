import React from 'react';

interface Props {
  onCLearTodo: () => void;
}

export default class Footer extends React.Component<Props> {
  render() {
    return (
      <footer>
        <span>
          Copyright &copy; 2020
                    <a className="author" href="https://github.com/knightyun/todo-list-react">
            knightyun.
                    </a>
        </span>
        <span className="clear-todo"
          onClick={this.props.onCLearTodo}
        >clear</span>
      </footer>
    )
  }
}
