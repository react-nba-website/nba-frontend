import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PlayerDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/"); // Path'ı / karakterinden ayırarak parçalara böler
  const goBackHandler = () => {
    navigate(-1); // Go back
    // or
    // navigate('/your-url'); // Navigate to a specific URL
  };
  // Eğer URL'de "players" ve bir ID varsa, bu ID'yi al
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
          console.log(res.data);
        })
        .catch((er) => {
          console.error(er);
        });
    }
  }, [playerId]);

  if (!playerData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div key={playerData.id} style={{ margin: "5px", padding: "5px" }}>
        <h1>Player Details</h1>

        <div className="card">
          <div className="card-body">
            <h2 className="card-title">
              {playerData.first_name} {playerData.last_name}
            </h2>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Team: {playerData.team.full_name}
            </li>
            <li className="list-group-item">City: {playerData.team.city}</li>

            <li className="list-group-item">
              Positions: {playerData.position}
            </li>
            <li className="list-group-item">
              Conference: {playerData.team.conference}
            </li>
            <li className="list-group-item">
              Division: {playerData.team.division}
            </li>
            <li className="list-group-item">
              Height Feet: {playerData.height_feet}
            </li>
            <li className="list-group-item">
              Height Inches: {playerData.height_inches}
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={goBackHandler}
          >
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetail;
