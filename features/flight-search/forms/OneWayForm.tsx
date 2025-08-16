import React from "react";
import LocationInput from "../components/LocationInput";
import FlightDatePicker from "../components/FlightDatePicker";
import PassengerSelector from "../components/PassengerSelector";

const OneWayForm = () => {
  const locationInputStyle =
    "px-[15px] py-[8px] border border-[#dbdde0] rounded-[10px] w-[100%] max-w-[253px] shrink-0";
  return (
    <div className="flex flex-row flex-wrap items-center gap-[10px]">
      <div className={locationInputStyle}>
        <LocationInput
          label="from"
          city="New York"
          airportCode="jfk"
          airportName="John F Kennedy International Airport"
        />
      </div>
      <div className={locationInputStyle}>
        <LocationInput
          label="to"
          city="Jessore"
          airportCode="jsr"
          airportName="Jessore Airport"
        />
      </div>
      <div className="flex w-[100%] max-w-[318.4px] flex-row justify-between border border-[#dbdde0] rounded-[10px] shrink-0">
        <div className="w-[100%] max-w-[158.7px] border-r border-[#dbdde0]">
          <FlightDatePicker
            label="departure Date"
            date="22"
            month="Aug"
            year="25"
            day="Friday"
          />
        </div>
        <div className="w-[100%] max-w-[158.7px]">
          <FlightDatePicker
            label="return Date"
            date="23"
            month="Aug"
            year="25"
            day="Saturday"
          />
        </div>
      </div>
        <div className="px-[15px] py-[8px] border border-[#dbdde0] max-h-[73.6px] rounded-[10px] w-[100%] max-w-[200.4px] shrink-0">
        <PassengerSelector label="traveler, Class" travelerCount="1" travelClass="Business"/>
      </div>
      
    </div>
  );
};

export default OneWayForm;
