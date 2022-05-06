import { MFEController } from "./controller";
import { useNavigate } from "react-router-dom";

export function useAppSubscribers(namespace) {
    let navigate = useNavigate();
    const EVENTS = {
       [namespace + ":ROUTE_CHANGE"]: routeChange(navigate)
    }
   
    return {
        addSubscribers: addSubscribers(EVENTS)
    }

}

function routeChange(navigate) {
   return (msg) => {
    console.log(`Event MSG ${msg}`);

    const { action, payload } = msg;
    if (action.type === "navigate") {
      const { to } = payload;
      console.log("to ", to);
      navigate(to);
    }
  }
}

function addSubscribers(events) {


    return ()  => {

      Object.keys(events).forEach(event =>{
        MFEController.__mfe_subscribe(event, events[event]);
      })

    }
}