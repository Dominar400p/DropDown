import { useState } from "react";

let DropDown = () => {

    //Countries List
    let countries = [
        {
            name: "USA", states: ["New York", "California", "Texas", "Florida", "Alaska", "Hawaii", "New Jersey", "Washington", "Massachusetts", "Pennsylvania"]
        },
        {
            name: "China", states: ["Qinghai", "Sichuan", "Gansu", "Heilongjiang", "Yunnan", "Shaanxi", "Hebei", "Jilin", "Guangdong", "Guizhou"]
        },
        {
            name: "Russia", states: ["Bashkortostan", "Tatarstan", "Dagestan", "Udmurtia", "Chuvashia", "Buryatia", "Sakha Republic", "Mordovia", "Khakassia", "Adygea"]
        },
        {
            name: "India", states: ["Andhra Pradesh", "Tamil Nadu", "Kerala", "Karnataka", "Telangana", "Maharashtra", "West Bengal", "Gujarat", "Madhya Pradesh", "Rajasthan"]
        },
        {
            name: "SouthKorea", states: ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Ulsan", "Suwon", "Changwon", "Seongnam"]
        }
    ]

    let [name, setName] = useState('')
    let [company, setCompany] = useState('')
    let [country, setCountry] = useState('')
    let [state, setState] = useState([])
    let [empId, setEmpId] = useState('')
    let [stateData, setStateData] = useState('')

    let handleCountryChange = (e) => {
        let countryName = e.target.value;
        setCountry(countryName);
        let selectedCountry = countries.find((country) => country.name === countryName)
        if (country) {
            setState(selectedCountry.states)
        }
    }


    let handleStateChange = (e) => {
        setStateData(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(company)
        console.log(country);
        console.log(stateData)
        console.log(empId)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div style={{ paddingLeft: "500px", paddingRight: "500px", paddingTop: "100px" }}>
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Fill The Form</h3>
                        </div>
                        <div className="card-body">
                            <div>
                                <label htmlFor="name">Enter Name</label>
                                <input id="name" type="text" className="form-control" placeholder="enter name" onChange={e => setName(e.target.value)} value={name}></input>
                            </div>
                            <div>
                                <label htmlFor="company">Enter Company Name</label>
                                <input id="company" type="text" className="form-control" placeholder="enter company name" onChange={e => setCompany(e.target.value)} value={company}></input>
                            </div>
                            <div>
                                <label htmlFor="country">Select Country</label>
                                <select id="country" className="form-control" onChange={handleCountryChange} value={country}>
                                    <option>--choose a country--</option>
                                    {
                                        countries.map((country) => (
                                            <option key={country.name} value={country.name}>{country.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="state">Select State</label>
                                <select id="state" className="form-control" onChange={handleStateChange} value={stateData}>
                                    <option>--choose a state--</option>
                                    {
                                        countries && (
                                            state.map((state) => (
                                                <option>{state}</option>
                                            ))
                                        )
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="id">Enter Employee I'd</label>
                                <input type="text" id="id" className="form-control" placeholder="enter employee I'd" onChange={e => setEmpId(e.target.value)} value={empId}></input>
                            </div><br></br>
                            <div>
                                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
};


export default DropDown;