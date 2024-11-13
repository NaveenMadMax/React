import image1 from './assets/Images/bright-pop-landscape-design.jpg';
import image2 from './assets/Images/illustration-anime-city.jpg';
import image3 from './assets/Images/japan-background-digital-art.jpg';
import './App.css';
const headerStyle = {
  fontFamily: "Arial, Helvetica, sans-serif",
};
const App = () => {
  return (
    <div>
      <div>
        <div className="header">
          <div>Home</div>
          <div>Tour</div>
          <div>Destination</div>
          <div className="heading">TREVELLO.</div>
          <div>Pages</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        <div className="section">
          <div className="container">
            <div className="content">
              MAKE YOUR TOUR <br />
              AMAZING <br />
              WITH US
            </div>
            <div className="content2">
              On into not, sleeping have objects on form it project and by we
              indication a he own the office as bed in the hat ideas rippedup
            </div>
            <div className="button">
              <button className="button-style">Destination</button>
            </div>
          </div>
          <div className="container-form1">
            <div className="container-form2">
              <div className="form-header">Book Tour Now</div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Search keywords"
                  className="input-style"
                />
                <input
                  type="text"
                  placeholder="Search keywords"
                  className="input-style"
                />
                <input
                  type="text"
                  placeholder="Search keywords"
                  className="input-style"
                />
                <input
                  type="text"
                  placeholder="Search keywords"
                  className="input-style"
                />
                <input
                  type="text"
                  placeholder="Search keywords"
                  className="input-style"
                />
              </div>
            </div>
            <div className="form-button">Find Tours</div>
          </div>
        </div>
      </div>
      <div className="content-block-container">
        <div className="content-block">
          <h2 style={headerStyle}>MAKE YOUR TOUR MEMORABLE AND SAFE WITH US</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            dolorem nisi quisquam eaque unde aspernatur illo deleniti ullam sit
            quia deserunt, architecto autem rerum id, error nihil! Labore, eaque
            voluptatum!
          </div>
        </div>
        <img
          src={image1}
          alt="image"
          className="content-block-image"
        />
      </div>
      <h2 className="tour-content">THE BEST OF FEATURED TOURS</h2>
      <div className="grid-container">
        <img
          src={image2}
          alt=""
          className="grid-image"
        />
        <img
          src={image3}
          alt=""
          className="grid-image"
        />
        <img
          src={image1}
          alt=""
          className="grid-image"
        />
        <img
          src={image2}
          alt=""
          className="grid-image"
        />
        <img
          src={image3}
          alt=""
          className="grid-image"
        />
        <img
          src={image2}
          alt=""
          className="grid-image"
        />
        <img
          src={image3}
          alt=""
          className="grid-image"
        />
        <img
          src={image1}
          alt=""
          className="grid-image"
        />
      </div>
      <button className="button-style button2">See all tours</button>
    </div>
  );
};

export default App;
