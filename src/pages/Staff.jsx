import React from "react";
import user1 from "../imgs/user1.png";
import user2 from "../imgs/user2.png";
import user3 from "../imgs/user3.png";
import user4 from "../imgs/user4.png";
import user5 from "../imgs/user5.png";

const Staff = () => {
  return (
    <div className="container mt-1">
      <h3 className="text-center text-white mb-5">Meet our staff!</h3>
      <div className="row">
        <div className="col-md-3 text-center">
          <img
            src={user1}
            alt="user1"
            className="rounded-5 img-thumbnail img-fluid"
          />
          <h4 className="text-white">Micheal_Fx2G</h4>
          <p className="text-white">Owner</p>
        </div>
        <div className="col-md-3 text-center">
          <img
            src={user2}
            alt="user2"
            className="rounded-5 img-thumbnail img-fluid"
          />
          <h4 className="text-white">Jonny413X</h4>
          <p className="text-white">Co-Owner</p>
        </div>
        <div className="col-md-3 text-center">
          <img
            src={user3}
            alt="user3"
            className="rounded-5 img-thumbnail img-fluid"
          />
          <h4 className="text-white">X_KanDeMK_X</h4>
          <p className="text-white">Admin</p>
        </div>
        <div className="col-md-3 text-center">
          <img
            src={user4}
            alt="user4"
            className="rounded-5 img-thumbnail img-fluid"
          />
          <h4 className="text-white">NotLucky215</h4>
          <p className="text-white">Moderator</p>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-md-3 text-center">
          <img
            src={user5}
            alt="user5"
            className="rounded-5 img-thumbnail img-fluid"
          />
          <h4 className="text-white">KxngBobR1</h4>
          <p className="text-white">Moderator</p>
        </div>
      </div>
    </div>
  );
};

export default Staff;
