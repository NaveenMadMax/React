import './reset.css';
import './App.css';
import cameraimage from './assets/Images/camera.jpeg';
import Mobirisepng from './assets/Images/Mobirise.png';
import MRpng from './assets/Images/MR.png';
import websitebuilderpng from './assets/Images/website builder.png';
import EST2015png from './assets/Images/EST 2015.png';
import fivepng from './assets/Images/5.png';
const App = () => {
  return (
    <div>
    <div className="header">
      <div className="nav">
        <div className="nav-brand">GlassM5</div>
        <div className="nav-items">
          <button>Home</button>
          <button>About us</button>
          <button>Services</button>
          <button>Contacts</button>
        </div>
        <button className="message">Send message</button>
      </div>
      <div className="photographer-container">
        <h1>Photographer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          ultrices <br />
          risus eget nunc ullamcorper, ut consectetur eros mattis. Praesent
          lobortis <br />in est sit amet pretium.
        </p>
        <button>Read more</button>
      </div>
      <div className="photographer-container2"></div>
    </div>
    <div className="our-service">
      <h1>Our Services</h1>
      <div className="servicecontainer">
        <div className="servicecontainer-content1">
          <button>
            <i className="fa-regular fa-lightbulb"></i>
          </button>
          <h1>Interior Photography</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
            risus eget sapien pellentesque porttitor nec ut velit.
          </p>
        </div>
        <div className="servicecontainer-content2">
          <button>
            <i className="fa-regular fa-circle-user"></i>
          </button>
          <h1>Interior Photography</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
            risus eget sapien pellentesque porttitor nec ut velit.
          </p>
        </div>
        <div className="servicecontainer-content3">
          <button>
            <i className="fa-solid fa-palette"></i>
          </button>
          <h1>Interior Photography</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
            risus eget sapien pellentesque porttitor nec ut velit.
          </p>
        </div>
      </div>
    </div>
    <div className="aboutus">
      <img src={cameraimage} alt="image" />
      <div className="aboutus-card">
        <h1>About Us</h1>
        <h2>
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit. Mauris ultrices risus eget nunc
          ullamcorper, ut consectetur eros mattis. Praesent lobortis in est
          sit amet pretium.
        </h2>
        <p>
          Fusce ante libero, ultrices sed ullamcorper quis, volutpat in metus.
          Mauris pulvinar, neque in porttitor faucibus, tortor enim.
        </p>
      </div>
    </div>
    <div className="pricingcontainer1">
      <div className="pricingcontainer2">
        <p>OUR PRICING</p>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <div className="pricingcard">
          <div className="card1">
            <h1>$39</h1>
            <h2>Start</h2>
            <p>
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit. Ut eu risus <br />sapien
              pellentesque.
            </p>
            <button>Buy Now</button>
          </div>
          <div className="card1">
            <h1>$59</h1>
            <h2>Basic</h2>
            <p>
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit. Ut eu risus <br />sapien
              pellentesque.
            </p>
            <button>Buy Now</button>
          </div>
          <div className="card1">
            <h1>$89</h1>
            <h2>Pro</h2>
            <p>
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit. Ut eu risus <br />sapien
              pellentesque.
            </p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    <div className="our-works">
      <p>OUR WORKS</p>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <div className="imagecard">
        <div className="imagecard1">
          <h1>Interior Photography</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="imagecard2">
          <h1>Protrait Photo</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="imagecard3">
          <h1>Art Photo</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
    <div className="progress">
      <div className="progress-container">
        <h1>PROGRESS</h1>
        <h2>Our Competence</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          ultrices risus eget nunc ullamcorper, ut consectetur <br />
          eros mattis. Praesent lobortis in est sit amet pretium. Fusce ante
          libero, ultrices sed ullamcorper quis, volutpat in <br />
          metus. Mauris pulvinar, neque in porttitor faucibus.
        </p>
        <div className="progress1">
          <div className="progress1-heading">
            <h1>Interior Photography</h1>
            <p>92%</p>
          </div>
          <div className="progressbar-container">
            <div className="progressbar"></div>
          </div>
        </div>
        <div className="progress2">
          <div className="progress1-heading">
            <h1>Portrait Photo</h1>
            <p>71%</p>
          </div>
          <div className="progressbar2-container">
            <div className="progressbar2"></div>
          </div>
        </div>
        <div className="progress2">
          <div className="progress1-heading">
            <h1>Art Photo</h1>
            <p>53%</p>
          </div>
          <div className="progressbar3-container">
            <div className="progressbar3"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="faq">
      <div className="faq-container">
        <div className="faq-list">
          <h1>Frequently</h1>
          <h2>Asked Questions</h2>
          <div className="list">
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>+</p>
          </div>
          <div className="list">
            <h1>Maecenas vulputate in enim</h1>
            <p>+</p>
          </div>
          <div className="list">
            <h1>Curabitur ut venenatis urna</h1>
            <p>+</p>
          </div>
        </div>
        <div className="faq-image"></div>
      </div>
    </div>
    <div className="client">
      <div className="client-container">
        <h1>OUR CLIENTS</h1>
        <h2>We love to work with oru clients</h2>
        <div className="client-card-container">
          <div className="clientcard">
            <img src={Mobirisepng} alt="image" />
          </div>
          <div className="clientcard">
            <img src={MRpng} alt="image" />
          </div>
          <div className="clientcard">
            <img src={websitebuilderpng} alt="image" />
          </div>
          <div className="clientcard">
            <img src={EST2015png} alt="image" />
          </div>
          <div className="clientcard">
            <img src={fivepng} alt="image" />
          </div>
          <div className="clientcard">
            <img src={Mobirisepng} alt="image" />
          </div>
        </div>
      </div>
    </div>
    <div className="sayhello">
      <div className="sayhello-card">
        <p>HAVE A NEW PROJECT IN MIND?</p>
        <h1>Say Hello</h1>
        <h2>hello@yoursite.com</h2>
      </div>
    </div>
    <div className="map">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.602700889693!2d-73.99058551034506!3d40.748766961600964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab5ac2c!2s350%205th%20Ave%2C%20New%20York%2C%20NY%2010118%2C%20USA!5e0!3m2!1sen!2sin!4v1729427133939!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{border: '0'}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div className="article">
      <div className="article-card1"></div>
      <div className="article-card2">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci
          nisl, rhoncus viverra fringilla in, luctus vitae elit.
        </h1>
        <p>Gabriel Moreira</p>
      </div>
    </div>
    <div className="inputbackground">
      <div className="overlay">
        <div className="inputcard">
          <h1>Contact Us</h1>
          <div className="inputcard-container">
            <input type="text" className="input-field" placeholder="Name" />
            <input type="email" className="input-field" placeholder="Email" />
            <input type="text" className="input-field" placeholder="Subject" />
            <input type="number" className="input-field" placeholder="Phone" />
            <textarea className="textarea" placeholder="Message"></textarea>
            <button>Send your message</button>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="footer-aboutus">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Mauris
          ultrices risus eget <br/> nunc ullamcorper, ut consectetur eros mattis. <br/>
          Convallis fringilla arcu consequat <br/> condimentum lectus.
          </p>
      </div>
      <div className="company">
        <h1>Company</h1>
        <h2>About</h2>
        <h2>Jobs</h2>
        <h2>Contacts</h2>
        <h2>Blog</h2>
      </div>
      <div className="company">
        <h1>Themes</h1>
        <h2>Features</h2>
        <h2>Team</h2>
        <h2>Pricing</h2>
        <h2>Info</h2>
      </div>
      <div className="company">
        <h1>Support</h1>
        <h2>Contacts</h2>
        <h2>Testimonials</h2>
        <h2>Terms of service</h2>
        <h2>Help</h2>
      </div>
    </div>
  </div>
  )
}

export default App
