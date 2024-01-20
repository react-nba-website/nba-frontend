import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function TeamDetail() {
    const location = useLocation();
    const [teamDetails, setTeamDetails] = useState(null);

    useEffect(() => {
        const tmp = location.pathname.split('/');
        const id = tmp[tmp.length - 1];

        axios.get(`https://free-nba.p.rapidapi.com/teams/` + id, {
            headers: {
                'X-RapidAPI-Key': '489a4fa2femshe401e0284dafe25p1959fejsn73d8f2d40328',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        })
            .then((res) => {
                setTeamDetails(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [location.pathname]);

    if (!teamDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-3">{teamDetails.full_name}</h2>
            <div className="card">
                <div className="card-body">
                    <p className="card-text"><strong>Full Name:</strong> {teamDetails.full_name}</p>
                    <p className="card-text"><strong>Name:</strong> {teamDetails.name}</p>
                    <p className="card-text"><strong>Abbreviation:</strong> {teamDetails.abbreviation}</p>
                    <p className="card-text"><strong>City:</strong> {teamDetails.city}</p>
                    <p className="card-text"><strong>Conference:</strong> {teamDetails.conference}</p>
                    <p className="card-text"><strong>Division:</strong> {teamDetails.division}</p>
                    

                    {/* <p className="card-text"><strong>Abbreviation:</strong> {teamDetails.abbreviation}</p> */}
                 


                    {/* Ekstra bilgileri buraya ekleyebilirsiniz */}
                </div>
            </div>
        </div>
    );
}

export default TeamDetail;
