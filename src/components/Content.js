import React from 'react';

class Content extends React.Component {
  state = {
    title: null
  };

  setTitleText = event => {
    this.setState({ title: event.target.value });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.group(`${this.constructor.name}/shouldComponentUpdate`);
    console.log(nextProps);
    console.log(nextState);
    console.groupEnd();
    return true;
  }

  render() {
    const { text, setTitle } = this.props;
    return (
      <div>
        <p className="App-intro">
          {text}
        </p>
        <p>
          <input type="text" onChange={this.setTitleText} />
        </p>
        <p>
          <button onClick={setTitle.bind(null, this.state.title)}>
            Change Title
          </button>
        </p>
      </div>
    );
  }
}

export default Content;
