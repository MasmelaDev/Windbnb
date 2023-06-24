/* eslint-disable react/prop-types */
import { HiStar } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function StayCard({ stay }) {
  return (
    <AnimatePresence>
      <motion.article
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <img
          className="h-64 rounded-3xl w-full overflow-hidden object-cover"
          src={stay.photo}
          alt="stay Photo"
        />
        <div className="flex text-[#828282] mt-4 items-center">
          {stay.superHost && (
            <p className="rounded-xl p-1 text-xs border-2 border-[#4F4F4F] font-bold text-[#4F4F4F] mr-2">
              SUPER HOST
            </p>
          )}
          <p className="mr-2">{stay.type}</p>
          <p>{stay.beds ? `${stay.beds} beds` : ""}</p>
          <div className="flex justify-center items-center text-[#4F4F4F] ml-auto">
            <HiStar size={19} color="#EB5757" />
            <p className="ml-[1px]">{stay.rating}</p>
          </div>
        </div>
        <p className="text-[#333] font-semibold mt-2">{stay.title}</p>
        <p className=" text-[#EB5757]">{stay.city}</p>
      </motion.article>
    </AnimatePresence>
  );
}

export { StayCard };
