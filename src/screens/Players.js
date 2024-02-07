// Players.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Player.css";

function Players() {
  const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 10;
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get("https://free-nba.p.rapidapi.com/players", {
        params: {
          page: currentPage,
          per_page: playersPerPage,
          order_by: "id",
          search: search,
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
  }, [currentPage, search]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container">
      <h1 className="player-list-heading">Player List</h1>
      <input onChange={(e) => setSearch(e.target.value)} type="text" className="form-control my-5" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />

      <ul className="player-list">
        {players.map((player) => (
          <li className="player-list-item" key={player.id}>
            <Link to={`/players/${player.id}`} style={{ width: "100%" }}>
              {player.first_name} {player.last_name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="player-pagination">
        {/* Sayfalama düğmeleri */}
        {currentPage > 1 && (
          <button
            className="player-page-btn"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous Page
          </button>
        )}
        <span style={{ color: "black" }}> Page {currentPage} </span>
        <button
          className="player-page-btn"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Players;
