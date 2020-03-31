import React, { Component } from 'react'
import { fetchData } from '../../actions/fetchData'
import { connect } from 'react-redux'
import View from './view'

class GlobeData extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return <View data={this.props.data} />
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, { fetchData })(GlobeData)