import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state={searchTerm:''};
        this.searchTermChange = this.searchTermChange.bind(this);
        this.submitCity = this.submitCity.bind(this);
    }

    searchTermChange(event){
        this.setState({searchTerm:event.target.value});
    }
    
    submitCity(event){
        event.preventDefault();
        this.props.getWeather(this.state.searchTerm);
        this.setState({searchTerm:''});
    }

    render(){
      return (
          <form onSubmit={this.submitCity} className="input-group">
              <input 
               value={this.state.searchTerm}
               onChange={this.searchTermChange}
               placeholder="Enter the city where you want the weather forecast for..."
               className="form-control"
               />
                <span  className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
              </form>
      );
    }
} 

function mapDispatchtoProps(dipatch){
    return bindActionCreators({getWeather},dipatch);
}
export default connect(null,mapDispatchtoProps)(SearchBar);