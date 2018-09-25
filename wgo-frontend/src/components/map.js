import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Button } from 'semantic-ui-react'

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
var myMap

class Map extends Component{
  state={
    select: false
  }

  geojson=()=>{
    return this.props.events.map(event=>{

      return(
        {
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
  }


  setMap= ()=>{
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVzbWFuY28iLCJhIjoiY2prd29qMWxjMDAxZzNwcWhyc2w5c2U0ZSJ9.BB30P0oz6N6FHfryWck6Hg';
    myMap = new mapboxgl.Map({
      container: 'eventMap',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [-96, 37.8],
      zoom: 10
    });
    myMap.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }))
  }

  componentDidUpdate = ()=>{
    this.geojson().forEach(marker=> {
    var el = <div classNme='marker'></div>

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
      .setHTML(
        `<h3>
          ${marker.properties.title}
        </h3>
        <p>
          ${marker.properties.description }
        </p>`
    ))
    .addTo(myMap);
  });
  }

    handleClick = ()=> {
      debugger
    console.log('hola')

  }

  componentDidMount=()=>{
    this.setMap()
    navigator.geolocation.getCurrentPosition(p=>myMap.jumpTo({center: [p.coords.longitude, p.coords.latitude]}))
  }

  render(){
    return(
      <React.Fragment>
      <div className='myMap' id='eventMap'></div>
     {this.state.select ?
     <Button>DETAILS</Button>
   : null}
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

export default connect(mapStateToPros)(Map)
