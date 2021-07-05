import rss from '../../assets/rs_school_js.svg';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://rs.school/js/">
        <img src={rss} alt="rs school js" className="footer__rss" />
      </a>
      <div>
        <span>☺ 2021</span>
        <span>
          ☺ made by
          <a className="footer__link" href="https://github.com/Eka-G">
            Eka-G
          </a>
        </span>
      </div>
      <div className="footer__info">
        Icons made by{' '}
        <a className="footer__link" href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a className="footer__link" href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
