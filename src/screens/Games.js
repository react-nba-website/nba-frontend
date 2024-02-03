import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div className="container mt-5">
            <h1 className="mb-4">Games</h1>
            <ul className="list-group">
                {games.map(game => (
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/games/${game.id}`}>
                        <li key={game.id} className="list-group-item">
                            <strong>{game.home_team.full_name}</strong> vs <strong>{game.visitor_team.full_name}</strong>
                            <p>Date: {game.date}</p>
                        </li>
                    </Link>

                ))}
            </ul>
        </div>
    );
}

export default Games;
