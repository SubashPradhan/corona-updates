import React, { Component } from 'react'
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { fetchCountryData } from '../../actions/fetchCountryData'
import { connect } from 'react-redux'
import { geoUrl } from '../../constants'
import '../../styles/mapChart.css'
import View from './view'
import NavBar from '../Navbar'

class MapView extends Component {
  state = { country: '', confirmed: '', recovered: '', deaths: '' }

  toolTipContent = async (countryData) => {
    return countryData.map((singleCountry) => {
      return this.setState({
        country: singleCountry.country,
        confirmed: singleCountry.confirmed,
        recovered: singleCountry.recovered,
        deaths: singleCountry.deaths
      })
    })
  }


  render() {
    return <div>
      <NavBar />
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <Geographies className='geo-style' geography={geoUrl}>
          {({ geographies }) => geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={async () => {
                const { NAME } = geo.properties;
                await this.props.fetchCountryData(NAME)
                await this.toolTipContent(this.props.countryData)
              }
            }
              onMouseLeave={() => {
                this.setState({
                  country: '',
                  confirmed: 0,
                  recovered: 0,
                  deaths: 0
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
