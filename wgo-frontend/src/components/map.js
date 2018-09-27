import {connect} from 'react-redux'
import React, {Component} from 'react';
import ReactMapboxGl, { Marker, Cluster, Popup } from 'react-mapbox-gl';


const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'
});

const clusterMarkerStyle= {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#51D5A0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    border: '2px solid #56C498',
    cursor: 'pointer'
  }

const markerStyle= {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#E0E0E0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #C9C9C9'
  }


// const StyledPopup = {
//   background: 'white',
//   color: '#3f618c',
//   'font-weight': 400,
//   padding: '5px',
//   'border-radius': '2px'
// }


class MapContainer extends Component{
  state={
    center: [-96, 37.8]
  }

  geojson=()=>{

    let geo = this.props.events.map(event=>{
      return(
        {
          id: event.id,
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [parseFloat(event.location.split(' ')[0]), parseFloat(event.location.split(' ')[1])]
          },
          properties: {
            title: event.title,
            description: event.description,
            type: event.event_type,
            dressCode: event.dress_code,
            openTo: event.open_to,
            likes: event.likes,
            rating: event.rating,
            price: event.price,
            closingTime: event.closing_time
          }
        }
      )
    })
    return {type: "FeatureCollection", features: geo}
  }

  componentDidMount=()=>{
    navigator.geolocation.getCurrentPosition(p=> this.setState({center: [p.coords.longitude, p.coords.latitude]}))
  }

  clusterMarker = (coordinates, pointCount) => (
    <Marker coordinates={coordinates} key={coordinates.toString()} style={clusterMarkerStyle}>
      <div>{pointCount}</div>
    </Marker>
  )

  handleClick= feature=> (
      <Popup offset={[0, -50]} coordinates={feature.geometry.coordinates}>

            {feature.properties.title}

      </Popup>
  )



  render(){
    return(
      <React.Fragment>
        <Map
        style='mapbox://styles/mapbox/streets-v10'
        center= {this.state.center}
        zoom= {[10]}
        className='myMap'
        containerStyle={{
          height: "60vh",
          width: "75vw",
        }}>

        <Cluster ClusterMarkerFactory={this.clusterMarker}>
          {this.geojson().features.map(feature => (
            <Marker
              key={feature.id}
              style={markerStyle}
              coordinates={feature.geometry.coordinates}
              data-feature={feature}
              onClick={()=>this.handleClick(feature)}
              data-set={feature}
            >
              <div data-set={feature} title={feature.properties.title}>
                {feature.properties.type[0]}
              </div>
            </Marker>
          ))}
        </Cluster>
        </Map>
      </React.Fragment>
    )
  }

}

const mapStateToPros= state=>{
  return {
    events: state.events,
    users: state.user.all
  }
}

export default connect(mapStateToPros)(MapContainer)
