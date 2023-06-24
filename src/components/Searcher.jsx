/* eslint-disable react/prop-types */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import { MdPlace } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
function Searcher({ filters, setFilters }) {
  const [isOpenSearchMenu, setIsOpenSearchMenu] = React.useState(false);
  const [openLocations, setOpenLocations] = React.useState(false);
  const [openGuests, setOpenGuests] = React.useState(false);
  const [adultGuests, setAdultGuests] = React.useState(0);
  const [childrenGuests, setChildrenGuests] = React.useState(0);

  const handleClickLocation = (e) => {
    const location = e.target.id;
    setFilters({ ...filters, location: location });
  };
  const locations = ["Helsinki", "Turku", "Vaasa", "Oulu"];
  return (
    <>
      <button
        onClick={() => setIsOpenSearchMenu(true)}
        className="flex divide-x-2 w-[333px] self-center divide-[#F2F2F2F2] rounded-2xl shadow-[0_1px_6px_0_rgba(0,0,0,0.10)] h-16"
      >
        <div className="px-2 h-full w-[150px] flex items-center text-[#333] justify-center">
          {filters.location === null
            ? "Finland"
            : `${filters.location}, Finland`}
        </div>
        <div className="px-2 text-[#BDBDBD] h-full w-[118px] flex items-center justify-center">
          {filters.guests ? `${filters.guests} Guests` : "Add Guests"}
        </div>
        <div className="h-full flex items-center w-[65px] justify-center">
          <AiOutlineSearch color="#EB5757" size={27} />
        </div>
      </button>
      <AnimatePresence>
        {isOpenSearchMenu && (
          <>
            <motion.div
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              exit={{ y: -1000 }}
              transition={{ duration: 0.4 }}
              className="bg-white fixed w-full z-30 top-0 right-0 pt-14 h-[55%] md:h-[45%]"
            >
              <div className="flex rounded-2xl overflow-hidden flex-col md:h-16 md:flex-row w-4/5 md:3/5  mx-auto  shadow-[0_1px_6px_0_rgba(0,0,0,0.10)]">
                <div
                  onClick={() => {
                    setOpenLocations(true);
                    setOpenGuests(false);
                  }}
                  className={`w-full md:w-2/4 flex flex-col  py-2 pl-6 rounded-2xl transition-all ${
                    openLocations ? "border-black border" : ""
                  }`}
                >
                  <label
                    className="font-bold text-xs text-[#333] "
                    htmlFor="location"
                  >
                    LOCATION
                  </label>
                  <input
                    id="location"
                    className=" h-full focus:outline-none focus:ring-transparent"
                    type="text"
                    value={
                      filters.location == null
                        ? "Finland"
                        : `${filters.location}, Finland`
                    }
                    readOnly
                  />
                </div>
                <div className="h-full w-[2px] bg-[#F2F2F2F2]"></div>
                <div
                  onClick={() => {
                    setOpenGuests(true);
                    setOpenLocations(false);
                  }}
                  className={`w-full md:w-2/4 flex flex-col py-2 pl-6 rounded-2xl transition-all ${
                    openGuests ? "border-black border" : ""
                  }`}
                >
                  <label
                    className="font-bold text-xs text-[#333]"
                    htmlFor="guests"
                  >
                    GUESTS
                  </label>
                  <input
                    id="guests"
                    className={`focus:outline-none focus:ring-transparent h-full ${
                      filters.guests ? "" : "text-[#BDBDBD]"
                    }`}
                    type="text"
                    readOnly
                    value={
                      filters.guests ? `${filters.guests} guests` : "Add guests"
                    }
                  />
                </div>
                <div className="h-full w-[2px] bg-[#F2F2F2F2]"></div>
              </div>
              <div className="flex w-4/5 md:3/5 mx-auto mt-3 ">
                {openLocations && (
                  <motion.div
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full md:w-2/4 p-3"
                  >
                    {locations.map((location) => (
                      <p
                        className="cursor-pointer mb-8 flex items-center gap-1 text-[#4F4F4F]"
                        onClick={handleClickLocation}
                        key={location}
                        id={location}
                      >
                        <MdPlace size={25} />
                        {location}, Finland
                      </p>
                    ))}
                  </motion.div>
                )}
                {openGuests && (
                  <motion.div
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full md:pl-[50%] p-3 text-[#333] font-medium"
                  >
                    <div className="mt-2 pl-5">
                      <p className="flex flex-col mb-2">
                        Adults{" "}
                        <span className="text-sm text-[#BDBDBD]">
                          Ages 13 or above
                        </span>
                      </p>
                      <div className="flex gap-5">
                        <button
                          className="rounded-md border border-[#828282] text-[#828282]  w-7 h-7 flex justify-center items-center"
                          onClick={() => {
                            setAdultGuests((prev) =>
                              prev > 0 ? prev - 1 : prev
                            );
                            setFilters({
                              ...filters,
                              guests:
                                adultGuests - 1 > 0
                                  ? adultGuests - 1 + childrenGuests
                                  : childrenGuests,
                            });
                          }}
                        >
                          -
                        </button>
                        <p>{adultGuests}</p>
                        <button
                          className="rounded-md border border-[#828282] text-[#828282]  w-7 h-7 flex justify-center items-center"
                          onClick={() => {
                            setAdultGuests((prev) => prev + 1);
                            setFilters({
                              ...filters,
                              guests: adultGuests + 1 + childrenGuests,
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="mt-8 pl-5">
                      <p className="flex flex-col mb-2">
                        Children{" "}
                        <span className="text-sm text-[#BDBDBD]">
                          Ages 2-12
                        </span>
                      </p>
                      <div className="flex gap-5">
                        <button
                          className="rounded-md border border-[#828282] text-[#828282]  w-7 h-7 flex justify-center items-center"
                          onClick={() => {
                            setChildrenGuests((prev) =>
                              prev > 0 ? prev - 1 : prev
                            );
                            setFilters({
                              ...filters,
                              guests:
                                childrenGuests - 1 > 0
                                  ? childrenGuests - 1 + adultGuests
                                  : adultGuests,
                            });
                          }}
                        >
                          -
                        </button>
                        <p>{childrenGuests}</p>
                        <button
                          className="rounded-md border border-[#828282] text-[#828282]  w-7 h-7 flex justify-center items-center"
                          onClick={() => {
                            setChildrenGuests((prev) => prev + 1);
                            setFilters({
                              ...filters,
                              guests: childrenGuests + 1 + adultGuests,
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <button
                onClick={() => setIsOpenSearchMenu(false)}
                className="absolute right-3 top-3"
              >
                <GrFormClose size={30} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="h-screen fixed bg-black  w-full z-20  top-0 right-0"
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export { Searcher };
