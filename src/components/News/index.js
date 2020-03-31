import React, { Component } from 'react'
import { fetchNews } from '../../actions/fetchNews'
import { connect } from 'react-redux'
import View from './view'

class News extends Component {
  componentDidMount() {
    this.props.fetchNews()
  }

  render() {
    return <View news={this.props.news} />
  }
}

const mapStateToProps = state => {
  return {
    news: state.news
  }
}

export default connect(mapStateToProps, { fetchNews })(News)