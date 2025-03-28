import { images } from "../../assets/images";
import './Header.css';

const { banner } = images;

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1 className="indie-flower header-title">El aroma mágico</h1>
        <hr />
        <div className="caffe-banner">
          <img src={banner} alt="caffe-banner" style={{ width: '100%' }} />
        </div>
        <hr />
      </div>
    </header>
  );
};

export { Header };