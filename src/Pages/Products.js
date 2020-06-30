import React from "react";
import Worker from "../components/Hero";
import Head from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
const Rooms = () => {
  return (
    <>
      <Worker hero="roomsHero">
        <Head title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Head>
      </Worker>
      <RoomsContainer />
    </>
  );
};

export default Rooms;