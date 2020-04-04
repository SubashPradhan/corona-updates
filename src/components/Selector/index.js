import React, { Component } from 'react'
import { fetchCountryData } from '../../actions/fetchCountryData'
import { connect } from 'react-redux'
import View from './view'
import CountryData from '../CountryData/view'

class Selector extends Component {
  state = { country: null, select: false, isMobile: false }

  onSelectFlag = async (countryCode) => {
    await this.setState({
      country: countryCode,
      select: true
    })
    this.props.fetchCountryData(this.state.country)
  }
  
  onResize = () => {
    window.innerWidth < 600 ? 
    this.setState({
      isMobile: true
    }) : 
    this.setState({
      isMobile: false
    })
    console.log(this.state.isMobile)
  }
  render() {
    return <div>
      <View
        select={this.state.select}
        onSelectFlag={this.onSelectFlag} 
        isMobile={this.isMobile}
        />
      <CountryData
        countryData={this.props.countryData}
        select={this.state.select} />
    </div>
  }
}
const mapStateToProps = state => {
  return {
    countryData: state.countryData
  }
}

export default connect(mapStateToProps, { fetchCountryData })(Selector)
