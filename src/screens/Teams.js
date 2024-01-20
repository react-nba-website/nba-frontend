import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Teams() {
    const [teams, setTeams] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchTeams();
    }, [currentPage]);

    const fetchTeams = () => {
        axios.get("https://free-nba.p.rapidapi.com/teams", {
            params: { page: currentPage },
            headers: {
                'X-RapidAPI-Key': '489a4fa2femshe401e0284dafe25p1959fejsn73d8f2d40328',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        })
            .then((res) => {
                setTeams(res.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="container mt-4">
            <h2>Teams</h2>
            <div className="row">
                {teams.map((team) => (
                    <div key={team.id} className="col-md-4 mb-4">
                        <Link to={`/teams/${team.id}`} style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{team.full_name}</h5>
                                    <p className="card-text">Conference: {team.conference}</p>
                                    <p className="card-text">Division: {team.division}</p>
                                    {/* Ekstra bilgileri buraya ekleyebilirsiniz */}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                            Previous
                        </button>
                    </li>
                    <li className="page-item active">
                        <span className="page-link">{currentPage}</span>
                    </li>
                    <li className={`page-item ${currentPage >=2  ? 'disabled' : ''}`}>
                        <button  className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Teams;
