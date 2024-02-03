import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/PlayerDetail.css";

function PlayerDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const goBackHandler = () => {
    navigate(-1);
  };
  const playerId =
    pathSegments.length === 3 && pathSegments[1] === "players"
      ? pathSegments[2]
      : null;

  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    if (playerId) {
      axios
        .get(`https://free-nba.p.rapidapi.com/players/${playerId}`, {
          headers: {
            "X-RapidAPI-Key":
              "489a4fa2femshe401e0284dafe25p1959fejsn73d8f2d40328",
            "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
          },
        })
        .then((res) => {
          setPlayerData(res.data);
        })
        .catch((er) => {
          console.error(er);
        });
    }
  }, [playerId]);

  if (!playerData) {
    return (
      <div
        style={{
          color: "darkblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
        }}
      >
        Loading....
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">
            {playerData.first_name} {playerData.last_name}
          </h1>
          <div className="img-container">
            <img
              src="https://www.wallmonkeys.com/cdn/shop/products/50745528-LRG_530x.jpg?v=1578661137" // Resmin URL'sini buraya ekleyin
              alt="Player"
            />
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Team:</strong> {playerData.team.full_name}
            </li>
            <li className="list-group-item">
              <strong>City:</strong> {playerData.team.city}
            </li>
            <li className="list-group-item">
              <strong>Positions:</strong> {playerData.position}
            </li>
            <li className="list-group-item">
              <strong>Conference:</strong> {playerData.team.conference}
            </li>
            <li className="list-group-item">
              <strong>Division:</strong> {playerData.team.division}
            </li>
            <li className="list-group-item">
              <strong>Height Feet:</strong> {playerData.height_feet}
            </li>
            <li className="list-group-item">
              <strong>Height Inches:</strong> {playerData.height_inches}
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-outline-secondary mt-3"
            onClick={goBackHandler}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetail;
