import React, { Component } from 'react'
import { fetchNewUpdates } from '../../actions/fetchNewUpdates'
import { connect } from 'react-redux'
import View from './view'

class Footer extends Component {
  componentDidMount() {
    this.props.fetchNewUpdates()
  }

  render() {
    return <View newUpdates={this.props.newUpdates} />
  }
}

const mapStateToProps = state => {
  return {
    newUpdates: state.newUpdates
  }
}

export default connect(mapStateToProps, { fetchNewUpdates })(Footer)