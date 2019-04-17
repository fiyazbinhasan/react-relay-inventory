import * as React from 'react';

class Root extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>Everything starts from here!</p>
        {this.props.children}
      </div>
    );
  }
}

export default Root;
