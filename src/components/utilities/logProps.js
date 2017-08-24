import React from 'react';

export default function logProps(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`logProps/${WrappedComponent.name}/componentDidMount`);
    }

    componentWillReceiveProps(nextProps) {
      console.group(
        `logProps/${WrappedComponent.name}/componentWillReceiveProps`
      );
      console.log(nextProps);
      console.groupEnd();
    }

    componentWillUnmount() {
      console.log(`logProps/${WrappedComponent.name}/componentWillUnmount`);
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.group(`logProps/${WrappedComponent.name}/shouldComponentUpdate`);
      console.log(nextProps);
      console.log(nextState);
      console.groupEnd();
      return true;
    }

    componentWillUpdate(nextProps, nextState) {
      console.group(`logProps/${WrappedComponent.name}/componentWillUpdate`);
      console.log(nextProps);
      console.log(nextState);
      console.groupEnd();
    }

    componentDidUpdate() {
      console.log(`logProps/${WrappedComponent.name}/componentDidUpdate`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
