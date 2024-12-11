import React from "react";
import { useWeddingData } from "../context/WeddingDataContext";
import "../styles/SangeethInvite.css";
export default function Invitation() {
  const { hero, heroine, event, footer } = useWeddingData();

  return (
    <>
      <div className="sangeeth">
        <div className="invitation-sangeeth">
          <h1 className="dancingscript" style={{ color: "#cc9933" }}>
            Sangeeth Ceremony
          </h1>
          <div className="content">
            <div className="family">
              <h5>
                {heroine.parents[0]} & {heroine.parents[1]}
              </h5>
              <p>{heroine.address[0]},</p>
              <p>
                {heroine.address[1]},Pin:{heroine.address[2]}
              </p>
            </div>
          </div>
          <div className="content">
            <div className="title">
              <p>
                Cordially invite you for an evening of music and dinner to
                celebrate the forthcoming wedding of their daughter
              </p>
            </div>
            <div className="bridegroom">
              <h1 className="dancingscript" style={{ color: "#cc9933" }}>
                {heroine.name.split(" ")[0]}
              </h1>
              <p>with</p>
              <h1 className="dancingscript" style={{ color: "#cc9933" }}>
                {hero.name.split(" ")[0]}
              </h1>
              <p>
                S/o : {hero.parents[0]} & {hero.parents[1]}
              </p>
              <p>{hero.address[0]},</p>
              <p>
                {hero.address[1]},Pin:{hero.address[2]}
              </p>
            </div>
          </div>
          <div className="side">
            <div>
              <p>Saturday</p>
              <h3 style={{ color: "#cc9933" }}>
                18<sup>th</sup>
              </h3>
              <p>January 2025</p>
            </div>
            <div className="seperator">
              <img src="/assets/seperator.png" alt="seperator" height={"100%"} />
            </div>
            <div>
              <p>Time :</p>
              <h4 style={{ color: "#cc9933" }}>4:30 PM</h4>
              <p>to</p>
              <h4 style={{ color: "#cc9933" }}>7:30 PM</h4>
            </div>
          </div>
          <div className="location">
            <p>Venue :</p>
            <h5 style={{ color: "#cc9933" }}>SS Kalamandir</h5>
            <p>Thuravoor</p>
          </div>
          <div className="content">
            <p>
              <hr className="solid" />
              Greetings : Vignesh
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
