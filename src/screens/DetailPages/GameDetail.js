import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

function GameDetail() {
    const location = useLocation();
    const [game, setGame] = useState(null);

    useEffect(() => {
        const tmp = location.pathname.split('/')
        const id = tmp[tmp.length - 1]
        // Oyunun detaylarını çekmek için API isteği yapın
        axios.get(`https://free-nba.p.rapidapi.com/games/` + id, {
            headers: {
                'X-RapidAPI-Key': '489a4fa2femshe401e0284dafe25p1959fejsn73d8f2d40328',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        })
            .then((res) => {
                setGame(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [location.pathname]);

    if (!game) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Game Detail</h1>
            <div className="card">
                <div className="card-body">
                    <p className="card-text"><strong>Home Team:</strong> {game.home_team.full_name}</p>
                    <p className="card-text"><strong>Visitor Team:</strong> {game.visitor_team.full_name}</p>
                    <p className="card-text"><strong>Date:</strong> {game.date}</p>
                    <p className="card-text"><strong>Season:</strong> {game.season}</p>
                    <p className="card-text"><strong>Status:</strong> {game.status}</p>
                    <p className="card-text"><strong>Period:</strong> {game.period}</p>
                    <p className="card-text"><strong>Home Team Score:</strong> {game.home_team_score}</p>
                    <p className="card-text"><strong>Visitor Team Score:</strong> {game.visitor_team_score}</p>
                    <p className="card-text"><strong>Conference:</strong> {game.visitor_team.conference}</p>
                    <p className="card-text"><strong>Division:</strong> {game.visitor_team.division}</p>
                </div>
            </div>
        </div>
    );
}

export default GameDetail;
