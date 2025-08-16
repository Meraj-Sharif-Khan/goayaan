import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setTripType } from "@/lib/store/slices/flightSearchSlice";
import { RadioInactive, RadioActive } from "@/components/ui/icons";
import OneWayForm from "./forms/OneWayForm";
import RoundWayForm from "./forms/RoundWayForm";
import MultiCityForm from "./forms/MultiCityForm";

const FlightSearch = () => {
  const { tripType } = useAppSelector((state) => state.flightSearchSlice);
  const dispatch = useAppDispatch();

  const tabStyle = "cursor-pointer font-[Gilroy-Bold] text-[#00026E] mr-[15px]";

  return (
    <div className="flex flex-row flex-wrap">
      <Tabs
        defaultValue={tripType}
        onValueChange={(value) => dispatch(setTripType(value))}
        className="w-full"
      >
        <TabsList className="flex mb-[4px]">
          <TabsTrigger value="one-way" className={tabStyle}>
            <div className="flex flex-row items-center">
              <span className="w-[20px] h-[20px] mr-[5px]">
                {tripType === "one-way" ? <RadioActive /> : <RadioInactive />}
              </span>
              <p
                className={`${
                  tripType === "one-way" ? "opacity-[100]" : "opacity-[0.3]"
                }`}
              >
                One Way
              </p>
            </div>
          </TabsTrigger>
          <TabsTrigger value="round-way" className={tabStyle}>
            <div className="flex flex-row items-center">
              <span className="w-[20px] h-[20px] mr-[5px]">
                {tripType === "round-way" ? <RadioActive /> : <RadioInactive />}
              </span>
              <p
                className={`${
                  tripType === "round-way" ? "opacity-[100]" : "opacity-[0.3]"
                }`}
              >
                Round way
              </p>
            </div>
          </TabsTrigger>
          <TabsTrigger value="multi-city" className={tabStyle}>
            <div className="flex flex-row items-center">
              <span className="w-[20px] h-[20px] mr-[5px]">
                {tripType === "multi-city" ? (
                  <RadioActive />
                ) : (
                  <RadioInactive />
                )}
              </span>
              <p
                className={`${
                  tripType === "multi-city" ? "opacity-[100]" : "opacity-[0.3]"
                }`}
              >
                Multi City
              </p>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="one-way">
          <OneWayForm/>
        </TabsContent>
        <TabsContent value="round-way">
          <RoundWayForm/>
        </TabsContent>
        <TabsContent value="multi-city">
          <MultiCityForm/>
        </TabsContent>
      </Tabs>
      
    </div>
  );
};

export default FlightSearch;
