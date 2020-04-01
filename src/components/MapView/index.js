import React, { Component } from 'react'
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { fetchCountryData } from '../../actions/fetchCountryData'
import { connect } from 'react-redux'
import { countries } from 'country-data';
import { geoUrl } from '../../constants'
import '../../styles/mapChart.css'
import View from './view'

class MapView extends Component {
  state = { country: '', confirmed: '', recovered: '', deaths: '' }

  toolTipContent = async (countryData, country) => {
    return countryData.map((singleCountry) => {
      return this.setState({
        country: country,
        confirmed: singleCountry.confirmed,
        recovered: singleCountry.recovered,
        deaths: singleCountry.deaths
      })
    })
  }


  render() {
    return <div>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <Geographies className='geo-style' geography={geoUrl}>
          {({ geographies }) => geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={async () => {
                const { NAME } = geo.properties;
                await this.props.fetchCountryData(NAME)
                await this.toolTipContent(this.props.countryData, NAME)
              }
            }
              onMouseLeave={() => {
                this.setState({
                  country: '',
                  confirmed: '',
                  recovered: '',
                  deaths: ''
                })
              }}

            />
          ))
          }
        </Geographies>
      </ComposableMap>
      <View
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
