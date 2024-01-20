import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Stats() {
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
            })
            .catch((er) => {
                console.log(er);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h2>Stats</h2>
            <h2> <Link to={`StatDetail`} style={{ textDecoration: 'none' }}>Go Details</Link></h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                       
                        <th scope="col">Player</th>
                        <th scope="col">Team</th>
                        <th scope="col">Points</th>
                        <th scope="col">Assists</th>
                        <th scope="col">Rebounds</th>
                        <th scope="col">Field Goals Made</th>
                        <th scope="col">3-Point Field Goals Made</th>
                        <th scope="col">Free Throws Made</th>
                        {/* Diğer sütunları buraya ekleyebilirsiniz */}
                    </tr>
                </thead>
                <tbody>
                    {stats.map((stat) => (
                       
                       <tr key={stat.id}>
                           
                            <td>{stat.player.first_name} {stat.player.last_name}</td>
                            <td>{stat.team.full_name}</td>
                            <td>{stat.pts}</td>
                            <td>{stat.ast}</td>
                            <td>{stat.reb}</td>
                            <td>{stat.fgm}</td>
                            <td>{stat.fg3m}</td>
                            <td>{stat.ftm}</td>
                            {/* Diğer sütun değerlerini buraya ekleyebilirsiniz */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Stats;
