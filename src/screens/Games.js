// Games.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall, faCalendar } from '@fortawesome/free-solid-svg-icons';
import '../styles/Games.css';

function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get("https://free-nba.p.rapidapi.com/games", {
            params: {
                page: '0',
                per_page: '25'
            },
            headers: {
                'X-RapidAPI-Key': '489a4fa2femshe401e0284dafe25p1959fejsn73d8f2d40328',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        })
            .then((res) => {
                setGames(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container mt-5" >
            <h1 className="mb-4">Games</h1>
            <ul className="calendar" >
                {games.map(game => (
                    <li key={game.date} className="day">
                        <ul className="games-list" >
                            <li className="game">
                                <div className="team-names">
                                    <strong>{game.home_team.full_name}</strong> vs <strong>{game.visitor_team.full_name}</strong>
                                </div>
                                <div className="date-section">
                                    <p><FontAwesomeIcon icon={faCalendar} className="calendar-icon" /> Date: {game.date}</p>
                                </div>
                                <Link to={`/games/${game.id}`}>
                                    <button className="details-btn">
                                        <p><FontAwesomeIcon icon={faBasketballBall} className="basketball-icon" /> Detail</p>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Games;
