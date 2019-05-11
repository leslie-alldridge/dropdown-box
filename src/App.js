import React from "react";

const data = [
  {
    "Te Tai Tokerau": [
      { "Ngāi Takoto": [] },
      { "Ngāti Kurī": [] },
      { "Te Aupōuri": [] },
      {
        "Ngāti Kahu": [
          "Matakairiri / Pikaahu",
          "Matarahurahu",
          "Ngāi Tohianga",
          "Ngāti Ruaiti",
          "Ngāti Takiora / Ngāi Tauurutakaware",
          "Ngāti Tara ki Parapara",
          "Ngāti Tara ki Werowero",
          "Ngāti Taranga",
          "Ngāti Te Rūrunga / Te Paatu",
          "Patu Kōraha",
          "Te Paatu ki Pamāpūria",
          "Te Paatu ki Pēria",
          "Te Tahawai",
          "Te Whānau Moana",
          "Te Whānau Moana / Te Rorohuri"
        ]
      }
    ]
  },
  {
    "Te Tai Tokerau2": [
      { "Ngāi2 Takoto": [] },
      { "Ngāti2 Kurī": [] },
      { "Te Aupōuri": [] },
      {
        "Ngāti Kahu": [
          "Matakairiri / Pikaahu",
          "Matarahurahu",
          "Ngāi Tohianga",
          "Ngāti Ruaiti",
          "Ngāti Takiora / Ngāi Tauurutakaware",
          "Ngāti Tara ki Parapara",
          "Ngāti Tara ki Werowero",
          "Ngāti Taranga",
          "Ngāti Te Rūrunga / Te Paatu",
          "Patu Kōraha",
          "Te Paatu ki Pamāpūria",
          "Te Paatu ki Pēria",
          "Te Tahawai",
          "Te Whānau Moana",
          "Te Whānau Moana / Te Rorohuri"
        ]
      }
    ]
  }
];

// get area names into an array
let areaNames = [];
data.map(area => {
  for (var i in area) {
    console.log(i);
    areaNames.push(i);
  }
});

console.log(areaNames);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iwiSelected: null,
      hapuSelected: null,
      regionSelected: null
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSelect2 = this.handleSelect2.bind(this);
    this.handleSelect3 = this.handleSelect3.bind(this);
  }

  // you can tidy up these functions im just rushing through it and copy pasting

  handleSelect(event) {
    console.log(event.target.value);
    this.setState({
      regionSelected: event.target.value
    });
  }

  handleSelect2(event) {
    console.log(event.target.value);
    this.setState({
      iwiSelected: event.target.value
    });
  }

  handleSelect3(event) {
    console.log(event.target.value);
    this.setState({
      hapuSelected: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>pick an area</p>
        <select onChange={this.handleSelect}>
          {areaNames.map(area => {
            return <option>{area}</option>;
          })}
        </select>
        {this.state.regionSelected && <p>select an iwi</p>}
        {/* get all the iwi based on region */}
        {this.state.regionSelected && (
          <div>
            <select onChange={this.handleSelect2}>
              {data.map(area => {
                if (area[this.state.regionSelected] != undefined) {
                  return area[this.state.regionSelected].map(region => {
                    for (var iwi in region) {
                      return <option>{iwi}</option>;
                    }
                  });
                }
              })}
            </select>
          </div>
        )}
        {/* confirm iwi selection in state */}
        {this.state.iwiSelected && <p>select hapu</p>}
        {this.state.iwiSelected && (
          <div>
            <select onChange={this.handleSelect3}>
              {data.map(area => {
                if (area[this.state.regionSelected] != undefined) {
                  return area[this.state.regionSelected].map(region => {
                    if (
                      region[this.state.iwiSelected] != undefined &&
                      region[this.state.iwiSelected].length > 0
                    ) {
                      console.log(region[this.state.iwiSelected]);
                      return region[this.state.iwiSelected].map(hapu => {
                        return <option>{hapu}</option>;
                      });
                    } else if (
                      region[this.state.iwiSelected] != undefined &&
                      region[this.state.iwiSelected].length <= 0
                    ) {
                      return <option>No hapu found</option>;
                    }
                  });
                }
              })}
            </select>
            {this.state.hapuSelected && <p>Congrats you picked everything</p>}
          </div>
        )}
      </div>
    );
  }
}

export default App;
