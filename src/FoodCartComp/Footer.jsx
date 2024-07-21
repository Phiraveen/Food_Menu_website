import React from "react";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="FootermainCont">
      <div className="about">
        <h2>Contact</h2>
        <p>1st Floor, North lane, Express Avenue Mall, Chennai - 600089</p>
      </div>
      <div className="contactIcons">
        <button className="tweet">
          <FaTwitter />
        </button>
        <button className="fb">
          <FaFacebookSquare />
        </button>
        <button className="insta">
          <FaInstagramSquare />
        </button>
        <button className="utube">
          <FaYoutube />
        </button>
        <button className="gmail">
          <SiGmail />
        </button>
        <button className="snap">
          <FaSnapchatSquare />
        </button>
      </div>

      <div className="designedBy">
        <p>
          <span>&copy;</span> 2024 Developed By Phiraveen
        </p>
      </div>
    </div>
  );
}
