import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{ marginBottom: '90px' }}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgb(55, 72, 97)" }}>
        <div className="container-fluid">
          <img src="https://img.freepik.com/free-vector/gradient-breaking-news-logo-design_23-2151157248.jpg?semt=ais_country_boost&w=740" alt="" height={"60px"} width={"60px"} border-radius="50%" />
          <a className="navbar-brand" href="#" >News App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent" >
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {/* business entertainment politics health science technology world education food lifestyle crime domestic environment tourism sports other*/}
              <li className="nav-item"> <Link className="nav-link active" to="/business">Business</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/politics">Politics</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/health">Health</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/science">Science</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/technology">Technology</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/world">World</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/education">Education</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/food">Food</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/lifestyle"> Lifestyle</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/crime">Crime</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/domestic">Domestic</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/enviroment">Enviroment</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/tourism">Tourism</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/sports">Sports</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/other">Others</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
