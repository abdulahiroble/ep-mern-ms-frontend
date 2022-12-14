import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {AimOutlined} from '@ant-design/icons';

const AnyReactComponent = ({ text }) => <div><AimOutlined style={{ color:"red",fontSize: "20px"}} /><strong style={{fontSize:"15px"}}>{text}</strong></div>;

class GoogleMap extends Component {

    static defaultProps = {
        center: {
          lat: 55.40693,
          lng: 11.34822
        },
        zoom: 11
      };
      

    render(){
      console.log("google props===",this.props)
        return (
            <div style={{padding:"3%", width: '100%', margin:"auto", backgroundColor:"grey"}} >
              <div div style={{ height: '50vh', width: '50%', margin:"auto", backgroundColor:"grey"}} >
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_APIKEY_GOOGLE_MAPS}}
              defaultCenter={this.props.coordinates}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={this.props.lat}
                lng={this.props.lon}
                text={'Event'}
              />
            </GoogleMapReact>
          </div>
          </div>
        )
    }
}

export default GoogleMap;