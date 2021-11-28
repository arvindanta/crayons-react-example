
import React, { useState, useEffect, useRef} from "react";
import {
  FwButton,
  FwDropdownButton,
  FwModal,
  FwModalContent,
  FwModalFooter,
  FwModalTitle,
  FwSelect,
  FwSelectOption,
  ToastController,
  FwToast,
  FwToastMessage,
} from "@freshworks/crayons-1/react";
function App() {
  const el = useRef<any>(null);
  const el1 = useRef<any>(null);
  const [val,setVal] = useState(1)
  const toast = ToastController();

  useEffect(() => {
   el1.current.onclick = function() {
     console.log("custom action handled here");
     setVal(22)
   }
    
  },[])

  return (
    <div className="App">
      val - {val}
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
      <FwToastMessage type='success' id="custom-temp">
            <div>
              {/* <FwButton onclick={()=> console.log("custom action here")}>crayons button custom content</FwButton> */}
              <FwButton ref={el1}>custom action content in Typescript apps</FwButton>
              <p> Please make sure here in the above element, the event handler name is in lowercase. use `onclick` instead of `onClick`. </p>
              <p className="cus-style">custom style content</p>
            </div>
          </FwToastMessage>

      <FwToast id="type_toast" 
      timeout={5000}></FwToast>
      <FwButton
        onClick={() =>
          toast.trigger({ type: "success", content: "Successfullly triggered" })
        }
      >
        Success
      </FwButton>
      <FwButton
        onClick={() =>
          el.current.trigger({
            type: "error",
            content: "something went wrong!",
          })
        }
      >
        Error
      </FwButton>
      <FwButton
        onClick={() =>
          el.current.trigger({ type: "warning", content: "This is a warning!" })
        }
      >
        Warning
      </FwButton>
      <FwButton
        onClick={() =>
          el.current.trigger({
            type: "inprogress",
            content: "Request is in progress",
          })
        }
      >
        Inprogress
      </FwButton>
      <FwButton
        onClick={() =>
          toast.trigger({ contentref: "#custom-temp", sticky: true })
        }
      >
        trigger custom{" "}
      </FwButton>

     
    </div>
  );
}

export default App;
