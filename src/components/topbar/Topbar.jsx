import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={menuOpen ? 'topbar active' : 'topbar'}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>010-7673-6879</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>zowoz8819@gmail.com</span>
          </div>
          <div className="itemContainer">
            <a
              href="https://github.com/shinhonggyu"
              target="_blank"
              className="itemContainer"
            >
              <GitHubIcon className="icon github" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
