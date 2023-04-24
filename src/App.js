import { Data } from "./data.js";
import { React, useState } from "react";

function App() {
  
  const [searchText, setSearchText] = useState("");
  const [info, setInfo] = useState(Data);

  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (lowerCaseValue === "") setInfo(Data);
    else {
      const filteredData = Data.filter(item => {
        return Object.keys(item).some(key => {
          return item[key].toString().toLowerCase().includes(lowerCaseValue);
        })
      });
      setInfo(filteredData);
    }
  }

  return (
    <div className="App">
      Search: <input 
      type="text"
      placeholder="Type here..."
      value={searchText}
      onChange={e => handleChange(e.target.value)}
      />

      <div className="box-container">
        {info.map((d, i) => {
          return <div className="box" key={i} style={{ backgroundColor: "#4DBA87" }}>
            <b>Breed: </b>{d.breed}<br />
            <b>Country of Origin: </b>{d.country}<br />
            <b>Fur Color: </b>{d.furcolor}<br />
            <b>Height (in): </b>{d.height}<br />
            <b>Eye Color: </b>{d.eyecolor}<br />
            <b>longevity: </b>{d.longevity}<br />
            <b>Character Traits: </b>{d.character}<br />
            <b>Common Health Problems: </b>{d.health}<br />
            </div>
        })}
        <div className="clearboth"></div>
        {info.length === 0 && <span>No records found</span>}
      </div>
    </div>
  );
}

export default App;