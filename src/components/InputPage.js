import React from 'react';

class InputPage extends React.Component {
  chartRef = React.createRef();

  state = {
    inputX: '',
    inputY: '',
    coordinates: [],
    labels: []
  };

  chart;

  componentDidMount() {
    const coordinates = JSON.parse(localStorage.getItem('coordinates')) || [];
    const labels = JSON.parse(localStorage.getItem('labels')) || [];
    
    this.setState({ coordinates, labels });
  }

  onFormSubmit = e => {
    e.preventDefault();
  
    const coordinates = this.state.coordinates
    coordinates.push({ x: this.state.inputX, y: this.state.inputY });

    const labels = this.state.labels
    labels.push('Point ' + coordinates.length);

    this.setState({ coordinates, labels });
    // save to localStorage
    localStorage.setItem('coordinates', JSON.stringify(this.state.coordinates));
    localStorage.setItem('labels', JSON.stringify(this.state.labels));
  };

  changeType = e => {
    this.setState({ type: e });
  };

  renderList() {
    return (
      <ul>
        {this.state.coordinates.map((item, index) => {
          return <li key={index}>Point {index + 1}: [{item.x},{item.y}]</li>;
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="row">
        <div className="App container">
          <form onSubmit={this.onFormSubmit} className="mt-5">
            <div className="form-group">
              <label htmlFor="x-coordinate">X Coordinate</label>
              <input
                type="number"
                className="form-control"
                id="x-coordinate"
                placeholder="Input Point X"
                value={this.state.inputX}
                onChange={e => this.setState({ inputX: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="y-coordinate">Y Coordinate</label>
              <input
                type="number"
                className="form-control"
                id="y-coordinate"
                placeholder="Input Point Y"
                value={this.state.inputY}
                onChange={e => this.setState({ inputY: e.target.value })}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="container mt-5">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default InputPage;
