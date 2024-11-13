import './App.css';
import './reset.css';
import beachimage from './assets/Images/beach.jpg';
import flightimage from './assets/Images/flight.jpg';
import mountainimage from './assets/Images/mountains.jpg';
import africanimage from './assets/Images/african.jpg';
import traintravelimage from './assets/Images/traintravel.jpg';

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <button className="button">Home</button>
          <button className="button">Watch Video</button>
          <button className="dropdown">
            <span>Demo Pages</span>
            <i className="material-icons arrow">arrow_drop_down</i>
          </button>
          <button className="dropdown">
            <span>Blocks</span>
            <i className="material-icons arrow">arrow_drop_down</i>
          </button>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="traveltext">
          <p>
            <strong className="travelbold">Travel With Us</strong>
          </p>
          <p>
            <strong className="travellight">
              Explore the world in any direction{" "}
            </strong>
          </p>
        </div>
        <div className="button1">
          <button className="button1-style">Buy Now</button>
          <button className="button2-style">Ways to travel</button>
        </div>
      </div>
      <div className="Journal">
        <p className="journal-heading">Our Journal</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex itaque
          laboriosam quam, consequuntur vero officiis molestias, inventore
          repellendus.
        </p>
      </div>
      <div className="journal-grid">
        <div className="journal-gridtext">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ullam
            expedita ex eos qui autem
          </p>
          <button className="read-more">
            <span>Read More</span>
            <i className="material-icons arrow">arrow_forward</i>
          </button>
          <img src={mountainimage} alt="Image" />
        </div>
        <div className="journal-gridtext">
          <img src={beachimage} alt="Image" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ullam
            expedita ex eos qui autem
          </p>
          <button className="read-more">
            <span>Read More</span>
            <i className="material-icons arrow">arrow_forward</i>
          </button>
        </div>
        <div className="journal-gridtext">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ullam
            expedita ex eos qui autem
          </p>
          <button className="read-more">
            <span>Read More</span>
            <i className="material-icons arrow">arrow_forward</i>
          </button>
          <img src={africanimage} alt="Image" />
        </div>
      </div>
      <div className="aftergrid-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam
        et quasi, <br /> dignissimos culpa rerum non corporis neque fuga nihil?
        Illo iure, nesciunt sunt fugiat vero tempora aspernatur iste,
        repudiandae? Molestias qui commodi, ut rerum recusandae, fugit cumque
        suscipit dolorem tenetur dolore, cupiditate voluptatibus. Mollitia
        dolorum, quae, doloribus, itaque dignissimos veritatis a amet aliquid
        cum veniam minus. Repudiandae, facilis, delectus?
      </div>
      <div className="inputcontainer">
        <p>Do You Wanna Go ?</p>
        <div className="input">
          <input type="text" placeholder="Email adress..." />
          <button>I WANT!</button>
        </div>
      </div>
      <div className="countries">
        <div className="southern-countries">
          <h1>Southern countries</h1>
          <br />
          <p>
            Lorem ipsum dolor amet, consecte tempor incididunt ut labore et
            dolore tumber tur adipisicing elit.
          </p>
          <br />
          <br />
          <button>
            <span>Read More</span>
            <i className="material-icons arrow">arrow_forward</i>
          </button>
        </div>
        <div className="Nordic-countries">
          <h1>Nordic countries</h1>
          <br />
          <p>
            Lorem ipsum dolor amet, consecte tempor incididunt ut labore et
            dolore tumber tur adipisicing elit.
          </p>
          <br />
          <br />
          <button>
            <span>Read More</span>
            <i className="material-icons arrow">arrow_forward</i>
          </button>
        </div>
        <div className="African-countries">
          <h1>African countries</h1>
          <br />
          <p>
            Lorem ipsum dolor amet, consecte tempor incididunt ut labore et
            dolore tumber tur adipisicing elit.
          </p>
          <br />
          <br />
          <button>
            <span>Read More</span>
            <i className="material-icons arrow">arrow_forward</i>
          </button>
        </div>
      </div>
      <div className="national-geographic">
        <p>
          <i className="fa-sharp-duotone fa-solid fa-quote-left quotesize"></i>{" "}
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          facilis expedita cum iste voluptate itaque doloribus molestias numquam
          natus voluptates, molestiae tempora praesentium ratione dicta
          laudantium, excepturi voluptatibus, assumenda repellendus!
        </p>
        <h1>National geographic</h1>
      </div>
      <div className="travel">
        <div className="travel-card1">
          <h1>We offer different ways to travel</h1>
          <p>
            Click any text to edit or style it. Select text to insert a link.
            Click blue "Gear" icon in the top right corner to hide/show buttons,
            text, title and change the block background.
          </p>
          <button>Corporate HTML templates</button>
        </div>
        <div className="travel-card2">
          <img
            src={flightimage}
            alt="Image"
            style={{ borderRadius: "5px" }}
          />
          <h1>Travel by air</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            cupiditate est eveniet.
          </p>
          <button className="read-more">
            <span>Read More</span>
            <i className="material-icons arrow">arrow_forward</i>
          </button>
        </div>
        <div className="travel-card3">
          <img
            src={traintravelimage}
            alt="Image"
            style={{ borderRadius: "5px", height: "229px" }}
          />
          <h1>Travel by air</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            cupiditate est eveniet.
          </p>
          <button className="read-more">
            <span>Read More</span>
            <i className="material-icons arrow">arrow_forward</i>
          </button>
        </div>
      </div>
      <div className="read-ourblog">
        <h1>Read Our Blog</h1>
        <p>
          Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Officia
          officiis possimus <br />
          tempore veniam iste hic qui corrupti explicabo at error totam.
        </p>
      </div>
      <div className="card">
        <div className="grid-card1">
          <img
            src={beachimage}
            alt="Image"
            style={{ borderRadius: "5px", height: "229px" }}
          />
          <h1>Mediterranean sea</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit. Ab <br />
            cupiditate est eveniet.
          </p>
          <button className="read-more">
            <span>Read More</span>
            <i className="material-icons arrow">arrow_forward</i>
          </button>
        </div>
        <div className="grid-card1">
          <img
            src={mountainimage}
            alt="Image"
            style={{ borderRadius: "5px", height: "229px" }}
          />
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit. Ab <br />
            cupiditate est eveniet.
          </p>
          <button className="read-more">
            <span>Read More</span>
            <i className="material-icons arrow">arrow_forward</i>
          </button>
        </div>
        <div className="grid-card1">
          <img
            src={africanimage}
            alt="Image"
            style={{ borderRadius: "5px", height: "229px" }}
          />
          <h1>African Savannah</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit. Ab <br />
            cupiditate est eveniet.
          </p>
          <button className="read-more">
            <span>Read More</span>
            <i className="material-icons arrow">arrow_forward</i>
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="address">
          <h1>Corporate HTML5 templates</h1>
          <p>
            1234 Street Name <br />
            City, AA 99999
          </p>
        </div>
        <div className="phone">
          <h1>Phone</h1>
          <p>
            Office :<br />
            +1 (0) 000 0000 001
          </p>
        </div>
        <div className="email">
          <h1>Email</h1>
          <p>
            support@mobirise.com
            <br />
          </p>
        </div>

        <div className="social">
          <div>
            <h1>Social</h1>
          </div>
          <div>
            <button className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </button>
            <button className="icon">
              <i className="fa-brands fa-twitter"></i>
            </button>
            <button className="icon">
              <i className="fa-brands fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
