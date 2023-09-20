import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

const Home = () => (
  <>
    <div className="mt-5 container d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center">Join us at</h1>
      <div className="server-url">
        <h5 className="text-center">Server IP: eu.tripewire.mc </h5>
      </div>
      <div className="server-users">
        <h6 className="mt-2 sm-txt">
          currently <span className="gray-bg borderNumber">500</span> players
          playing on the server atm
        </h6>
      </div>
    </div>
    <footer className="footer">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row border-half">
          <div className="col-lg-2">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
          </div>
          <div className="col-lg-2">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle />
            </a>
          </div>
          <div className="col-lg-2">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Home;
