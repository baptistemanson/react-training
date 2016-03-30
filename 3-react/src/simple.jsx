import React from "react"
import ReactDom from "react-dom"

class SimpleComponent extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}



ReactDom.render(<SimpleComponent name="World" />, document.getElementById('main'));