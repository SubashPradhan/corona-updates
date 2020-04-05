import React, { Component } from 'react'
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { fetchCountryData } from '../../actions/fetchCountryData'
import { connect } from 'react-redux'
import { geoUrl } from '../../constants'
import '../../styles/mapChart.css'
import View from './view'
import NavBar from '../Navbar'
import countryList from 'iso-3166-country-list'

class MapView extends Component {
  state = { country: '', confirmed: '', recovered: '', deaths: '', toolTip: false }

  toolTipContent = async (singleCountry, NAME) => {
    await this.setState({
      country: NAME,
      confirmed: singleCountry.confirmed,
      recovered: singleCountry.recovered,
      deaths: singleCountry.deaths,
      toolTip: true
    })
  }

  render() {
    return <div>
      <NavBar />
      <ComposableMap className='map' data-tip="" projectionConfig={{ scale: 200 }}>
        <Geographies className='geo-style' geography={geoUrl}>
          {({ geographies }) => geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={async () => {
                const { NAME } = await geo.properties;
                const countryCode = await countryList.code(NAME)
                await this.props.fetchCountryData(countryCode)
                await this.toolTipContent(this.props.countryData, NAME)
              }
              }
              onMouseLeave={async () => {
                await this.setState({
                  country: '',
                  confirmed: 0,
                  recovered: 0,
                  deaths: 0, 
                  toolTip: false 
                })
              }} 

            />
          ))
          }
        </Geographies>
      </ComposableMap>
      <View
        country={this.state.country}
        confirmed={this.state.confirmed}
        recovered={this.state.recovered}
        deaths={this.state.deaths}
        toolTip={this.state.toolTip}
      />
    </div>
  }
}

const mapStateToProps = state => {
  return {
    countryData: state.countryData
  }
}

export default connect(mapStateToProps, { fetchCountryData })(MapView)
