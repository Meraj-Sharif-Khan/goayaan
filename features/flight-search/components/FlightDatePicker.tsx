import React from "react";

const FlightDatePicker = ({
  label,
  date,
  month,
  year,
  day,
}: {
  label: string;
  date: string;
  month: string;
  year: string;
  day: string;
}) => {
  return (
    <div className="w-full h-full flex flex-col cursor-pointer px-[15px] py-[8px]">
      <p className="uppercase font-[Gilroy-Light] text-[#00026E] text-[12px] mb-1">
        {label}
      </p>
      <span className="flex flex-row gap-1 h-[18px]">
        <p className="font-[Gilroy-Bold] text-[#00026E] text-[18px] leading-none">
          {date}
        </p>
        <p className="font-[Gilroy-Light] text-[#00026E] text-[14px]">{`${month}'${year}`}</p>
      </span>
      <span className="text-[12px] text-[#5d6974]">{day}</span>
    </div>
  );
};

export default FlightDatePicker;
