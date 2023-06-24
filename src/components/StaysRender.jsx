/* eslint-disable react/prop-types */
import { StayCard } from "./StayCard";
function StaysRender({ filteredStays }) {
  return (
    <section
     
      className="StaysRender "
    >
      {filteredStays.map((stay) => (
        <StayCard key={stay.title} stay={stay} />
      ))}
    </section>
  );
}

export { StaysRender };
