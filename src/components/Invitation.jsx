import React from "react";
import { useWeddingData } from "../context/WeddingDataContext";
import "../styles/Invitation.css";
import DateFormatter from "./DateFormatter";

export default function Invitation() {
  const { heroine, hero, event, footer } = useWeddingData();

  return (
    <div className="invitation-card">
      <div className="screen">
        <div className="content">
          <img
            className="title-image"
            src="/assets/ganesha.png"
            alt="Ganesha"
          />
          <h4>Sree Kuladevata Prasanna</h4>
        </div>
        <div className="content">
          <div className="side">
            <div className="family">
              <h3>{heroine.parents[0]} &</h3>
              <h3>{heroine.parents[1]}</h3>
              <p>{heroine.address[0]},</p>
              <p>
                {heroine.address[1]},Pin:{heroine.address[2]}
              </p>
              <p>Mob: {heroine.phone}</p>
            </div>
            <div className="family">
              <h3>{hero.parents[0]} &</h3>
              <h3>{hero.parents[1]}</h3>
              <p>{hero.address[0]},</p>
              <p>
                {hero.address[1]},Pin:{hero.address[2]}
              </p>
              <p>Mob: {hero.phone}</p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="title">
            <p>
              Solicit your esteemed presence with family to grace the auspicious
              occasion of the marriage of
            </p>
          </div>
          <div className="side">
            <div className="bridegroom">
              <h2>Sow. {heroine.name}</h2>
              <p>D/o the former and granddaughter of</p>
              <p>{heroine.paternalGrandParents[0]} & </p>
              <p>{heroine.paternalGrandParents[1]} and</p>
              <p>{heroine.maternalGrandParents[0]} & </p>
              <p>{heroine.maternalGrandParents[1]}</p>
            </div>
            <div>
              <p>with</p>
            </div>
            <div className="bridegroom">
              <h2>Chi. {hero.name}</h2>
              <p>S/o the latter and grandson of</p>
              <p>{hero.paternalGrandParents[0]} & </p>
              <p>{hero.paternalGrandParents[1]} and</p>
              <p>{hero.maternalGrandParents[0]} & </p>
              <p>{hero.maternalGrandParents[1]}</p>
            </div>
          </div>
        </div>
        <div className="content">
          <p>
            on{" "}
            <strong>
              <DateFormatter date={event.date}></DateFormatter>
            </strong>{" "}
            (6th Makaram 1200)
          </p>
          <p>at {event.location}</p>
          <p>
            Muhurtham :{" "}
            <strong>
              {event.time[0]} to {event.time[1]}
            </strong>{" "}
            {event.muhurtham}
          </p>
          <p>and for lunch thereafter</p>
          <p className="border-above">
            <hr className="solid" />
            Regards:{" "}
            {footer.people.length > 1
              ? `${footer.people.join(", ")} `
              : footer.people[0]}
          </p>
        </div>
      </div>
    </div>
  );
}
