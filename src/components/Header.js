import { useState } from "react";

// Components
import DisconnectionButton from "../components/DisconnectionButton";
import RedirectButton from "../components/RedirectButton";

// Icons
import list from "../assets/icons/list.svg";

// Functions
import displayDate from "../assets/functions/displayDate";

const Header = ({ handleToken, displayDisconnectButton }) => {
  const [date] = useState(displayDate());

  return (
    <div className="header">
      <div className="container">
        {/* <div className="line-center"> */}
        <RedirectButton style="icon" icon={list} page="/" />
        {/* <img src={list} className="icon" alt="icon" />
        <h1>To-do List</h1> */}
        {/* </div> */}

        <div className="line-center">
          <div className="line-center">
            <p className="date">{date}</p>
          </div>

          {displayDisconnectButton && (
            <DisconnectionButton handleToken={handleToken} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
