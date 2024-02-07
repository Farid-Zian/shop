import React from "react";
import "./homepage.css";

function Home() {
  return (
    <div className="wrapper">
      <div className="homepage__container">
        <input
          className="input__card"
          type="radio"
          name="slide"
          id="c1"
          checked
        />
        <label htmlFor="c1" className="card">
          <div className="row">
            <div className="icon">1</div>
            <div className="description">
              <h4>Digital Technology</h4>
              <p>Empowering Tomorrow, One Block at a Time – Crypto-Maonais</p>
            </div>
          </div>
        </label>

        <input className="input__card" type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="card">
          <div className="row">
            <div className="icon">2</div>
            <div className="description">
              <h4>COINMARKETCAP</h4>
              <p>Gets better every day - stay tuned</p>
            </div>
          </div>
        </label>

        <input className="input__card" type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="card">
          <div className="row">
            <div className="icon">3</div>
            <div className="description">
              <h4>Globalization</h4>
              <p>Help people all over the world</p>
            </div>
          </div>
        </label>

        <input className="input__card" type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="card">
          <div className="row">
            <div className="icon">4</div>
            <div className="description">
              <h4>New technologies</h4>
              <p>Unlocking Potential, Uniting Communities – Crypto-Maonais</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Home;
