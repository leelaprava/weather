import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    
    getRows(cityData){
        const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
    }
    render(){
        return (
            <div>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Weather</th>
                        <th scope="col">Humidity</th>
                        <th scope="col">Pressure</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.getRows)}
                </tbody>
            </table>

            
             </div>
        );
    };
}

function mapStatetoProps({weather}){
    return {weather};
}

export default connect(mapStatetoProps)(WeatherList);