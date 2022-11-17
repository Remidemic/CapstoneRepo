//Foot.jsx
import React from "react";
import "./../footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      {/* <h1>Footer</h1> */}
      <div className="container">
        <div className="row">
          {/* // column1 */}
          <div className="col">
            <h4>NFT LAND INC</h4>
            <ul className="list-unstyled">
              <li>1-900-GET-PAID</li>
              <li>1515 Broadway New York, NY</li>
              <li></li>
            </ul>
          </div>
          {/* // column2 */}
          <div className="col">
            <h4>Github Link</h4>
            <ul className="list-unstyled">
              
              <a href="https://github.com/Remidemic" style={{ color: "white" }}>
                Remy
              </a>
            </ul>
          </div>
          {/* // column3 */}
          <div className="col">
            <h4>external links</h4>
            <ul className="list-unstyled">
              <a href="https://www.coinbase.com/"><li>Buy RemCoin Here</li></a>
              <a href="https://opensea.io/"><li>More NFTS</li></a>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
