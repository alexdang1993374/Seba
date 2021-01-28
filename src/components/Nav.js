import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Nav = ({
  libraryStatus,
  setLibraryStatus,
  infoStatus,
  setInfoStatus,
}) => {
  const libraryHandler = () => {
    setLibraryStatus(!libraryStatus);
    setInfoStatus(false);
  };

  const infoHandler = () => {
    setInfoStatus(!infoStatus);
    setLibraryStatus(false);
  };

  return (
    <nav>
      <h1>Seba</h1>
      <div className="nav-buttons">
        <button onClick={libraryHandler}>
          Library
          <FontAwesomeIcon className="font-icon" icon={faMusic} />
        </button>
        <button className="info-button" onClick={infoHandler}>
          Info
          <FontAwesomeIcon className="font-icon" icon={faBookOpen} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
