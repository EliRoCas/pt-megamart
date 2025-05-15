import { MapPin, Truck, SealPercent } from "@phosphor-icons/react";
import "./track.css";

const Track = () => {
  return (
    <div className="flex items-center justify-between w-[95%] mx-4 text-[0.8rem] box-border">
      <div className="welcome-msg text-center text-lg font-medium text-grey-500">
        <p>Welcome to worldwide Megamart!</p>
      </div>
      <div className="flex flex-row items-center justify-evenly gap-4">
        <div className="track-data">
          <MapPin
            size={20}
            className="icon"
          />{" "}
          <p className="text-sm">
            Deliver to <b>423651 </b>{" "}
          </p>
        </div>
        <div className="track-data">
          <Truck
            size={20}
            className="icon"
          />
          <p className="text-sm">Track your order</p>
        </div>
        <div className="track-data">
          <SealPercent
            size={20}
            className="icon"
          />
          <p className="text-sm">All offers</p>
        </div>
      </div>
    </div>
  );
};

export default Track;
