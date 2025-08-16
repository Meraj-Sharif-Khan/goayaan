import React from "react";

const LocationInput = ({
  label,
  city,
  airportCode,
  airportName,
}: {
  label: string;
  city: string;
  airportCode: string;
  airportName: string;
}) => {


  return (
    <div  className="w-full h-full flex flex-col cursor-pointer">
      <p className="uppercase font-[Gilroy-Light] text-[#00026E] text-[12px] mb-1">
        {label}
      </p>
      <p className="font-[Gilroy-Bold] text-[#00026E] text-[18px] leading-none">{city}</p>
      <span className="text-[12px] text-[#5d6974]">
        <p className="uppercase inline">{airportCode}, </p>
        {airportName}
      </span>
    </div>
  );
};

export default LocationInput;
