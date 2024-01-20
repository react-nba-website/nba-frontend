import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Players() {
  const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 25;

  useEffect(() => {
    // Sıralama ve sayfalama için gerekli parametreleri ekleyin
    axios
      .get("https://free-nba.p.rapidapi.com/players", {
        params: {
          page: currentPage,
          per_page: playersPerPage,
          // Sıralama kriterini ekleyin (örneğin, ID'ye göre sıralama)
          order_by: "id",
        },
        headers: {
          "X-RapidAPI-Key":
            "489a4fa2femshe401e0284dafe25p1959fejsn73d8f2d40328",
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
        },
      })
      .then((res) => {
        setPlayers(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1>Player List</h1>

      <ul class="list-group list-group-flush">
        {players.map((player) => (
          <li class="list-group-item" key={player.id}>
            <Link to={`/players/${player.id}`}>
              {player.first_name} {player.last_name}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        {/* Sayfalama düğmeleri */}
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            Previous Page
          </button>
        )}
        <span> Page {currentPage} </span>
        <button onClick={() => handlePageChange(currentPage + 1)}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Players;
