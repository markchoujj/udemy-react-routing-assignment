import React, { Component } from 'react';

class Course extends Component {
    state ={title: null}
    componentDidMount() {
      const query = new URLSearchParams(this.props.location.search);
      const title = query.get('title')
      this.setState({title: title})
    }

    componentDidUpdate(prevprops) {
      if (prevprops.match.params.id !== this.props.match.params.id) {
        const query = new URLSearchParams(this.props.location.search);
        const title = query.get('title')
        this.setState({title: title})
      }
    }

    render () {
        const title = this.state.title
        return (
            <div>
                <h1>{title}</h1>
                <p>{this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;