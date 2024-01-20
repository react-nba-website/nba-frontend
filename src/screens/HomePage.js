import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HomePage.css'

function HomePage() {
    // useEffect(() => {
    //     axios.get("https://free-nba.p.rapidapi.com/players", {
    //         params: {
    //             page: '0',
    //             per_page: '25'
    //         },
    //         headers: {
    //             'X-RapidAPI-Key': '489a4fa2femshe401e0284dafe25p1959fejsn73d8f2d40328',
    //             'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    //         }
    //     })
    //         .then((res) => {
    //             console.log(res.data)
    //         })
    //         .catch((er) => {
    //             console.log(er)
    //         })
    // }, [])
    return (

        <div className='home-page-div'>
            <Link to='players'> <div className='home-page-route-item'>Oyuncular</div></Link>
            <Link to='teams'> <div className='home-page-route-item'>Takımlar</div></Link>
            <Link to='games'> <div className='home-page-route-item'>Maçlar</div></Link>
            <Link to='stats'> <div className='home-page-route-item'>İstatistikler</div></Link>
        </div>
    )
}

export default HomePage