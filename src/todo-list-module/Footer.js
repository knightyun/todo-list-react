import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <span>
                    Copyright &copy; 2020
                    <a className="author" href="https://github.com/knightyun">
                        knightyun.
                    </a>
                </span>
                <span className="clear-todo"
                    onClick={ this.props.onCLearTodo }
                >clear</span>
            </div >
        )
    }
}

export default Footer;