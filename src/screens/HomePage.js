import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="home-page-div">
      <div class="wrapper">
        <div class="" style={{ width: '100%', display: 'flex', justifyContent: 'center', height: 400, marginTop: 300 }}>
          <input type="radio" name="slide" id="c1" />

          <label for="c1" class="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div class="row " >
              <div class="description justify-content-center align-items-center" style={{ backgroundColor: 'lightblue', opacity: 0.1, borderRadius: 20 }}>
                <Link style={{ textDecoration: 'none' }} to="players">
                  <h4>Oyuncular</h4>
                </Link>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c2" />
          <label for="c2" class="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div class="row " >
              <div class="description justify-content-center align-items-center" style={{ backgroundColor: 'lightblue', opacity: 0.1, borderRadius: 20 }}>
                <Link style={{ textDecoration: 'none' }} to="teams">
                  <h4>Takımlar</h4>
                </Link>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c3" />
          <label for="c3" class="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div class="row " >
              <div class="description justify-content-center align-items-center" style={{ backgroundColor: 'lightblue', opacity: 0.1, borderRadius: 20 }}>
                <Link style={{ textDecoration: 'none' }} to="games">
                  <h4>Maçlar</h4>
                </Link>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c4" />
          <label for="c4" class="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div class="row " >
              <div class="description justify-content-center align-items-center" style={{ backgroundColor: 'lightblue', opacity: 0.1, borderRadius: 20 }}>
                <Link style={{ textDecoration: 'none' }} to="stats">
                  <h4>İstatistikler</h4>
                </Link>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div >
  );
}

export default HomePage;
