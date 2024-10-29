import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div>
      <div className="header_content">
        <h3>3D game Dev</h3>

        <h1>
          Work that we <br />
          produce for our <br />
          clients
        </h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>

        <a href="#">Get more details</a>
      </div>

      <div className="header_img">
        <img id="joyStick" src="./img/joy_stick 1.png" />
        {/* <img id="img1" src="./img/img1.png" />
        <img id="img2" src="./img/img2.png" />
        <img id="img3" src="./img/img3.png" /> */}
      </div>
    </div>
  );
};

export default Header;