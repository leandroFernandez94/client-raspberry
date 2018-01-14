import React, { Component } from 'react';
import { Layout, Spin } from 'antd'

import ContentCard from "../ContentCard/ContentCard.component";

import './TabContent.css'
import { fetchLibraryData } from '../../services/App.service';

const { Content } = Layout;

class TabContent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    fetchLibraryData(this.props.tab.name)
      .then(
      resp => this.setState({
        files: resp.data.files,
        directories: resp.data.directories,
        loading: false
      })
      )
  }



  render() {
    const { tab } = this.props

    return (
      <Content className="container">
        <div className="content">
          {
            this.state.loading ?
              <Spin className="spin"/>
              : this.state.directories.map(dir => <ContentCard>{dir}</ContentCard>)
          }
        </div>
      </Content>
    );
  }
}

export default TabContent;
