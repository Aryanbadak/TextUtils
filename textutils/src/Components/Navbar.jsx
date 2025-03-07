import { Link } from 'react-router-dom'


function Navbar(props) {

  return (
    <div>
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Textutils</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/about'}>About</Link>
                </li>
              </ul>
              <div className="form-check form-switch me-2">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.fixGrayMode} defaultChecked />
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Gray Mode</label>
              </div>
              <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.fixMode} defaultChecked />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar