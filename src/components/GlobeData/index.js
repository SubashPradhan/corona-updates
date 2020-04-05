import React, { Component } from 'react'
import { fetchData } from '../../actions/fetchData'
import { connect } from 'react-redux'
import View from './view'

class GlobeData extends Component {
  state= {isLoading: true}

  componentDidMount() {
    this.props.fetchData()
    this.setState({
      isLoading: false
    })
  }

  render() {
    return <View data={this.props.data} 
      isLoading={this.state.isLoading}
    />
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, { fetchData })(GlobeData)