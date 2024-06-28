// import { useMemo } from "react";

// const CarsPage = ({ image14, mapPin, location1, propMinWidth }) => {
//   const locationStyle = useMemo(() => {
//     return {
//       minWidth: propMinWidth,
//     };
//   }, [propMinWidth]);

//   return (
//     <div className="w-[284.3px] shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.04)] rounded-xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-start justify-start text-left text-base text-green-900 font-manrope">
//       <div className="self-stretch h-[223px] relative overflow-hidden shrink-0">
//         <img
//           className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
//           loading="lazy"
//           alt=""
//           src={image14}
//         />
//         <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] z-[1]" />
//       </div>
//       <div className="self-stretch flex flex-col items-start justify-start py-s pr-0 pl-s gap-[20px]">
//         <div className="w-[292px] flex flex-col items-start justify-start">
//           <b className="self-stretch relative">Brand - Model</b>
//           <div className="flex flex-row items-start justify-center gap-[4px]">
//             <div className="relative inline-block min-w-[32px]">Year</div>
//             <div className="w-[11px] relative inline-block">•</div>
//             <div className="relative inline-block min-w-[49px]">Milage</div>
//             <div className="w-[11px] relative inline-block">•</div>
//             <div className="relative inline-block min-w-[36px]">Gear</div>
//           </div>
//         </div>
//         <div className="w-[292px] flex flex-col items-start justify-start">
//           <b className="self-stretch relative">25,093 USDC</b>
//           <div className="relative mt-[-1px]">From 2,590 USDC/month</div>
//         </div>
//         <div className="flex flex-row items-center justify-start gap-[8px]">
//           <img
//             className="h-8 w-8 relative overflow-hidden shrink-0"
//             loading="lazy"
//             alt=""
//             src={mapPin}
//           />
//           <b
//             className="relative inline-block min-w-[41px]"
//             style={locationStyle}
//           >
//             {location1}
//           </b>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarsPage;
