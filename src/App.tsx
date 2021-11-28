import React from "react";
import {
  FwButton,
  FwDropdownButton,
  FwModal,
  FwModalContent,
  FwModalFooter,
  FwModalTitle,
  FwSelect,
  FwSelectOption,
} from "@freshworks/crayons/react";
function App() {
  return (
    <div className="App">
      <FwButton onFwClick={() => console.log("fwclicked")}>
        Default button with custom event handling
      </FwButton>
      <br /> <br />
      <FwButton onClick={() => console.log("oncliked")}>
        Default Button
      </FwButton>
      <br /> <br />
      <FwButton
        color="danger"
        onFwClick={() => console.log("fwClick event emitted from button")}
      >
        Danger button
      </FwButton>
      <br /> <br />
      <FwDropdownButton
        searchable
        label="Click me"
        split
        color="primary"
        placeholder="efwewe"
      >
        <div slot="dropdown-options">
          <option id="1" value="Ullu">
            Ullu
          </option>
          <option id="2" value="Hotstar">
            Hotstar
          </option>
          <option id="3" value="Amazon">
            Amazon
          </option>
          <option id="4" value="Netflix">
            Netflix
          </option>
          <option id="5" value="Mx player">
            Mx Player
          </option>
          <option id="6" value="Share it">
            Share it
          </option>
          <option id="7" value="Prime">
            Amazon Prime
          </option>
          <option id="8" value="Watch32">
            Watch32
          </option>
          <option id="9" value="YTS Movies">
            YTS Movies
          </option>
          <option id="10" value="Telegram">
            Telegram
          </option>
          <option id="11" value="Solar Movies">
            Solar Movies
          </option>
          <option id="12" value="Yifi torrents">
            Yifi torrents
          </option>
        </div>
      </FwDropdownButton>
      <br /> <br />
      <FwButton modalTriggerId="small"> Open Modal </FwButton>
      <FwModal id="small" size="small" submitColor="danger">
        <FwModalTitle titleText="Welcome"></FwModalTitle>
        <FwModalContent>
          <div>Content text</div>
        </FwModalContent>
        <FwModalFooter></FwModalFooter>
      </FwModal>
      <br /> <br />
      <FwSelect
        label="Names"
        placeholder="Your choices"
        state-text="Select multiple options"
        multiple
      >
        <FwSelectOption value="1" selected>
          Starks
        </FwSelectOption>
        <FwSelectOption value="2">Lannisters</FwSelectOption>
        <FwSelectOption value="3">Sand</FwSelectOption>
        <FwSelectOption value="4">Greyjoys</FwSelectOption>
        <FwSelectOption value="5">Tyrell</FwSelectOption>
      </FwSelect>
      <br /> <br />
    </div>
  );
}

export default App;
