import { useState } from "react";

// Components
import DisconnectionButton from "../components/DisconnectionButton";
import RedirectButton from "../components/RedirectButton";

// Icons
import list from "../assets/icons/list.svg";

// Functions
import displayDate from "../assets/functions/displayDate";

const Header = ({ handleTokenAndName, displayDisconnectButton, userName }) => {
  const [date] = useState(displayDate(new Date()));

  return (
    <div className="header">
      <div className="container">
        <RedirectButton styled="icon" icon={list} page="/" />

        <div className="line-center">
          <div className="column-center">
            <p className="name">{userName}</p>
            <p className={!displayDisconnectButton ? "date" : "date mg-r"}>
              {date}
            </p>
          </div>

          {displayDisconnectButton && (
            <DisconnectionButton handleTokenAndName={handleTokenAndName} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
