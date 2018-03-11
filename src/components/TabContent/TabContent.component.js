import React, { Component } from 'react';
import { Layout, Spin } from 'antd'
import Link from 'react-router-dom/Link';

import ContentCard from "../ContentCard/ContentCard.component";

import './TabContent.css'

import { fetchLibraryData } from '../../services/App.service';
import { fetchItemData } from "../../services/App.service";

const { Content } = Layout;

class TabContent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      files: [],
      directories: []
    }

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    fetchLibraryData(this.props.tab)
      .then(
      resp =>{ 
        console.log('movies found', resp)
        this.setState({
        directories: resp.data,
        loading: false
      })
      })
  }

  handleItemClick(item){
    console.log('item', item)
    fetchItemData(this.props.tab,item)
    .then(resp => console.log(resp))
  }

  render() {
    const { tab } = this.props
    console.log('directories', this.state.directories)
    return (
      <Content className="container">
        <div className="content">
          {
            this.state.loading ?
              <Spin className="spin"/>
              : this.state.directories.map(dirData => (
                <Link key={dirData.id} to={`/${tab}/${dirData.id}`}>
                  <ContentCard 
                    title={dirData.title}
                    posterPath={dirData.posterPath}
                    releaseDate={dirData.releaseDate}
                  />
                </Link>
              ))
          }
        </div>
      </Content>
    );
  }
}

export default TabContent;
