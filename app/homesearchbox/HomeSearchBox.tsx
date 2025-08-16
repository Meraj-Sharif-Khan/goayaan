import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  HotelIcon,
  FlightIcon,
  TourIcon,
  VisaIcon,
} from "@/components/ui/icons";
import FlightSearch from "@/features/flight-search/FlightSearch";
const HomeSearchBox = () => {
  const tabStyle =
    "p-[20px] flex flex-row items-center cursor-pointer grayscale data-[state=active]:grayscale-0 data-[state=active]:text-[#00026E] text-[16px] font-[Gilroy-Bold] border-b-[2px] border-b-[#fff] data-[state=active]:border-b-[2px] data-[state=active]:border-b-[#fdcc02]";
  return (
    <>
      <div className="relative w-[100%] bg-[url('/images/homepage-background.webp')] bg-no-repeat min-h-[650px] bg-cover bg-[center_bottom]">
        <div className="absolute top-[30%] w-[100%] h-[100%] ">
          <Tabs
            defaultValue="Flight"
            className="relative w-full flex flex-col items-center"
          >
            <TabsList className="absolute translate-y-[-50%] px-[60px] bg-white rounded-[10px] flex flex-row shadow-[0_4px_10px_rgba(0,117,255,.09)]">
              <TabsTrigger value="Flight" className={tabStyle}>
                <FlightIcon className="w-[25px] h-[18px] mr-[12px]" />
                <p>Flight</p>
              </TabsTrigger>
              <TabsTrigger value="Hotel" className={tabStyle}>
                <HotelIcon className="h-[17.93px] w-6 mr-[12px] " />
                Hotel
              </TabsTrigger>
              <TabsTrigger value="Tour" className={tabStyle}>
                <TourIcon className="w-[25px] h-[18px] mr-[12px]" />
                Tour
              </TabsTrigger>
              <TabsTrigger value="Visa" className={tabStyle}>
                <VisaIcon className="w-[25px] h-[18px] mr-[12px]" />
                Visa
              </TabsTrigger>
            </TabsList>
            <div className="bg-white w-full max-w-[1115px] min-h-[192.79px]  pt-[50px] pr-[30px] pb-[40px] pl-[30px] rounded-[20px]">
              <TabsContent value="Flight">
                <FlightSearch />
              </TabsContent>
              <TabsContent value="Hotel">Hotel</TabsContent>
              <TabsContent value="Tour">Tour</TabsContent>
              <TabsContent value="Visa">Visa</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      <div className="h-screen"></div>
    </>
  );
};

export default HomeSearchBox;
