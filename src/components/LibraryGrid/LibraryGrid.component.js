import React, { Component } from 'react';
import { fetchLibraryData } from '../../services/App.service';

class LibraryGrid extends Component {

  constructor(props) {
    super(props)
    this.state = {
      directories: [],
      files: [],
      loading: true
    }
  }

  componentDidMount() {
    fetchLibraryData(this.props.library).then(
      resp => {
        this.setState({
          files: resp.data.files,
          directories: resp.data.directories,
          loading: false
        })
      }
    )
  }

  render() {
    return (
      <ul>
        {
          this.state.loading ?
            <li>Loading...</li>
            : this.state.directories.map(item => <li key={`${this.props.library}-${item}`}>{item}</li>)
        }
      </ul>
    );
  }
}

export default LibraryGrid;