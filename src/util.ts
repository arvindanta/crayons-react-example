import { MFEInstance } from "./controller";
import { useNavigate } from "react-router-dom";

export function useAppSubscribers() {
  let navigate = useNavigate();
  const EVENTS = {
    ROUTE_CHANGE: routeChange(navigate),
  };

  return {
    addSubscribers: addSubscribers(EVENTS),
  };
}

function routeChange(navigate: any) {
  return (msg: any) => {
    console.log(`Event MSG ${msg}`);

    const { action, payload } = msg;
    if (action.type === "navigate") {
      const { to } = payload;
      console.log("to ", to);
      navigate(to);
    }
  };
}
const removeSubscribersList: any = [];
function addSubscribers(events: any) {
  return () => {
    Object.keys(events).forEach((event) => {
      removeSubscribersList.push(MFEInstance.subscribe(event, events[event]));
    });
  };
}
export { removeSubscribersList }
