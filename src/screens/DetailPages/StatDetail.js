import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function StatDetail() {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        axios.get("https://free-nba.p.rapidapi.com/stats", {
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
                setStats(res.data.data);
                console.log(res.data.data);

            })
            .catch((er) => {
                console.log(er);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h2>StatDetail</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Assists</th>
                        <th>Blocks</th>
                        <th>Defensive Rebounds</th>
                        <th>3-Point FG %</th>
                        <th>3-Point FG Attempted</th>
                        <th>3-Point FG Made</th>
                        <th>Field Goal %</th>
                        <th>Field Goals Attempted</th>
                        <th>Field Goals Made</th>
                        <th>Free Throw %</th>
                        <th>Free Throws Attempted</th>
                        <th>Free Throws Made</th>
                        <th>Game</th>
                        <th>Minutes</th>
                        <th>Offensive Rebounds</th>
                        <th>Personal Fouls</th>
                        <th>Player</th>
                        <th>Points</th>
                        <th>Rebounds</th>
                        <th>Steals</th>
                        <th>Team ID</th>
                        <th>Team Abbreviation</th>
                        <th>Team City</th>
                        <th>Team Conference</th>
                        <th>Team Division</th>
                        <th>Team Full Name</th>
                        <th>Team Name</th>
                        <th>Turnovers</th>
                    </tr>
                </thead>
                <tbody>
                    {stats.map((stat) => (
                        <tr key={stat.id}>
                            <td>{stat.id}</td>
                            <td>{stat.ast}</td>
                            <td>{stat.blk}</td>
                            <td>{stat.dreb}</td>
                            <td>{stat.fg3_pct}</td>
                            <td>{stat.fg3a}</td>
                            <td>{stat.fg3m}</td>
                            <td>{stat.fg_pct}</td>
                            <td>{stat.fga}</td>
                            <td>{stat.fgm}</td>
                            <td>{stat.ft_pct}</td>
                            <td>{stat.fta}</td>
                            <td>{stat.ftm}</td>
                            <td><Link to={"/games/"+stat.game.id}>Game</Link></td> 
                            <td>{stat.min}</td>
                            <td>{stat.oreb}</td>
                            <td>{stat.pf}</td>
                            <td>{stat.player.first_name} {stat.player.last_name}</td>
                            <td>{stat.pts}</td>
                            <td>{stat.reb}</td>
                            <td>{stat.stl}</td>
                            <td>{stat.team.id}</td>
                            <td>{stat.team.abbreviation}</td>
                            <td>{stat.team.city}</td>
                            <td>{stat.team.conference}</td>
                            <td>{stat.team.division}</td>
                            <td>{stat.team.full_name}</td>
                            <td>{stat.team.name}</td>
                            <td>{stat.turnover}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StatDetail;
