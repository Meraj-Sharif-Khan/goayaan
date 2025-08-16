import React from 'react'

const PassengerSelector = ({
  label,
  travelerCount,
  travelClass
}: {
  label: string;
  travelerCount: string;
  travelClass: string;
}) => {
  return (
    <div className="w-full h-full flex flex-col cursor-pointer">
      <p className="uppercase font-[Gilroy-Light] text-[#00026E] text-[12px] mb-1">
        {label}
      </p>
      <p className="font-[Gilroy-Bold] text-[#00026E] text-[18px] leading-none">{travelerCount} Traveler</p>
      <span className="text-[12px] text-[#5d6974]">
        {travelClass}
      </span>
    </div>
  )
}

export default PassengerSelector
