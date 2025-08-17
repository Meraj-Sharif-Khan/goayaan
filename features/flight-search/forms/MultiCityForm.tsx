import React from 'react'
import LocationInput from "../components/LocationInput";
import FlightDatePicker from "../components/FlightDatePicker";
import PassengerSelector from "../components/PassengerSelector";

const MultiCityForm = () => {
      const locationInputStyle =
    "px-[15px] py-[8px] border border-[#dbdde0] rounded-[10px] w-[100%] max-w-[253px] shrink-0";
  return (
    <div className="flex flex-row flex-wrap items-center gap-[10px] mb-[10px]">
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
        <div className="w-[100%] max-w-[263px] border border-[#dbdde0] rounded-[10px]">
          <FlightDatePicker
            label="departure Date"
            date="22"
            month="Aug"
            year="25"
            day="Friday"
          />
      </div>
        <div className="px-[15px] py-[8px] border border-[#dbdde0] max-h-[73.6px] rounded-[10px] w-[100%] max-w-[253px] shrink-0">
        <PassengerSelector label="traveler, Class" travelerCount="1" travelClass="Business"/>
      </div>
      
    </div>
  )
}

export default MultiCityForm
