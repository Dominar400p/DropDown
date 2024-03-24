import axios from "axios";
import { countries } from "./Data";
import './DropDown.css';
import { useState } from "react";

let DropDown = () => {

    let [selectedCountry, setSelectedCountry] = useState()
    let [selectedState, setSelectedState] = useState()
    let [selectedCity, setSelectedCity] = useState()


    //Handling Country Change
    let handleCountryChange = (e) => {
        e.preventDefault();
        let countryName = e.target.value;
        setSelectedCountry(countryName);
        setSelectedState("")
    }

    //Fetching States Based On Selected Country
    let states = selectedCountry ? countries[selectedCountry] : ""
    console.log("STATES : ", states)


    //Handling State Change
    let handleStateChange = (e) => {
        let stateName = e.target.value;
        setSelectedState(stateName)
        setSelectedCity("")
    }

    //Fetching Cities Based On Selected State
    let cities =selectedState ? states[selectedState] || []: []
    console.log("CITIES : ", cities)

    return (
        <>
            <div style={{ marginTop: "50px" }}>
                <div className="card col-md-5 mx-auto">
                    <div className="card-header text-center">
                        <h3>Drop Down</h3>
                    </div>
                    <div className="card-body">
                        <label htmlFor="country">Select Country</label>
                        <select id="country" className="form-control" onChange={handleCountryChange} value={selectedCountry}>
                            <option>--choose a country--</option>
                            {
                                Object.keys(countries).map((country) => (
                                    <option key={country}>{country}</option>
                                ))
                            }
                        </select>
                        {
                            selectedCountry && (
                                <div>
                                    <label htmlFor="state">Select State</label>
                                    <select id="state" className="form-control" onChange={handleStateChange} value={selectedState}>
                                        <option>--choose a state--</option>
                                        {
                                            Object.keys(states).map((state) => (
                                                <option key={state}>{state}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            )
                        }
                        {
                            selectedState && (
                                <div>
                                    <label htmlFor="city">Select City</label>
                                    <select id="city" className="form-control" onChange={e=>setSelectedCity(e.target.value)} value={selectedCity}>
                                        <option>--choose a city--</option>
                                        {
                                            cities.map((city) => (
                                                <option key={city}>{city}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
};


export default DropDown;