import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/TeamDetail.css'; // Stil dosyasını import et

function TeamDetail() {
    const location = useLocation();
    const [teamDetails, setTeamDetails] = useState(null);
    const navigate = useNavigate();

    const pathSegments = location.pathname.split("/");
    const goBackHandler = () => {
        navigate(-1);
    };

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
        <div id="team-detail-container" className="container mt-4">
            <div id="team-detail-card" className="card">
                <h2 className="mb-3">{teamDetails.full_name}</h2>
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/024/553/676/small/skull-wearing-crown-logo-skull-king-sticker-pastel-cute-colors-generative-ai-png.png"  // Resmin URL'sini buraya ekleyin
                    alt={teamDetails.full_name}
                    className="card-img-top team-image"
                />
                <div className="card-body">
                    <p className="card-text"><strong>Full Name:</strong> {teamDetails.full_name}</p>
                    <p className="card-text"><strong>Name:</strong> {teamDetails.name}</p>
                    <p className="card-text"><strong>Abbreviation:</strong> {teamDetails.abbreviation}</p>
                    <p className="card-text"><strong>City:</strong> {teamDetails.city}</p>
                    <p className="card-text"><strong>Conference:</strong> {teamDetails.conference}</p>
                    <p className="card-text"><strong>Division:</strong> {teamDetails.division}</p>
                    {/* Ekstra bilgileri buraya ekleyebilirsiniz */}
                </div>
                <button
                    type="button"
                    className="btn btn-go-back mt-3"
                    onClick={goBackHandler}
                >
                    Go Back
                </button>
            </div>

        </div>
    );
}

export default TeamDetail;
