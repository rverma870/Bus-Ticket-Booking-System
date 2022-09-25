import React from "react";
import LogInSighUpModal from "../../common/components/LogInAndRegistration/Modal/LogInSighUpModal";
import FilterBus from "../../common/components/FilterBus/FilterBus";
import Listing from "../../common/components/ListingBus/Listing";
import "./Home.css";
function Home() {
  return (
    <div className="home-page">
      <LogInSighUpModal />
      <FilterBus />
      <Listing />
    </div>
  );
}

export default Home;
