import React from "react";
import { Navbar } from "./components/Navbar";
import { stays } from "./data/stays";
import { StaysRender } from "./components/StaysRender";
function App() {
  const [filters, setFilters] = React.useState({
    location: null,
    guests: null,
  });

  const filteredStays = stays.filter((stay) => {
    if (filters.location === null && !filters.guests) {
      return stay;
    } else {
      if (stay.city === filters.location) {
        if (filters.guests <= stay.maxGuests) {
          return stay;
        }
      }
      if (filters.location == null && filters.guests <= stay.maxGuests) {
        return stay;
      }
    }
  });

  return (
    <>
      <Navbar filters={filters} setFilters={setFilters} />
      <main>
        <div className="flex flex-col md:flex-row pt-12 pb-10 justify-between text-center gap-2">
          <h2 className="font-bold text-2xl text-[#333]  ">
            {filters.location === null
              ? "Stays in Finland"
              : `Stays in ${filters.location}, Finland`}
          </h2>
          <p className="font-medium text-[#4F4F4F] ">
            {filteredStays.length} stays
          </p>
        </div>
        <StaysRender filteredStays={filteredStays} />
      </main>
    </>
  );
}

export default App;
