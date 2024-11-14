import './App.css';
import './reset.css';
import headerlogo from './assets/Images/logo.png';
import manpng from './assets/Images/man.png';
import portfolioimage1 from './assets/Images/1.jpg';
import portfolioimage2 from './assets/Images/2.jpg';
import portfolioimage3 from './assets/Images/3.jpg';
import portfolioimage4 from './assets/Images/4.jpg';
import portfolioimage5 from './assets/Images/5.jpg';
import portfolioimage6 from './assets/Images/6.jpg';
import testimonialspng from './assets/Images/testimonials.png';
import testimonialteam1 from './assets/Images/team-1.png';
import ourblogimage1 from './assets/Images/1.png';
import ourblogimage2 from './assets/Images/2.png';
import ourblogimage3 from './assets/Images/3.png';


const App = () => {
  return (
    <div>
    <div className="header">
      <img src={headerlogo} alt="logo" />
      <div className="headernav">
        <button>Home</button>
        <button>About</button>
        <button>Services</button>
        <button>Portfolio</button>
        <button>Testimonials</button>
        <button>
          Blog<i
            className="fa-solid fa-angle-down"
            style={{fontSize: '10px', marginLeft: '10px'}}
          ></i>
        </button>
        <button>Contact</button>
      </div>
    </div>
    <div className="sectionbackground">
      <h1>Hello I'M</h1>
      <h2>WEB DEVELOPER</h2>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor <br />incididunt ut labore et dolore manga aliqua.
      </h3>
      <button>Download CV</button>
    </div>
    <div className="aboutmesection">
      <img src={manpng} alt="image" />
      <div className="aboutmesection_content">
        <h1>About Me</h1>
        <h2>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur <br />
          <br />
          magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est, qui dolorem ipsum quia dolor si voluptatem quia
          voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
        </h2>
        <div className="aboutmesection_content_button">
          <button className="button1">Download CV</button>
          <button className="button2">Portfolio</button>
        </div>
      </div>
    </div>
    <div className="service_section">
      <h1>Services</h1>
      <div className="service_section_container">
        <div className="service_section_card">
          <h1><i className="fa-solid fa-gear"></i></h1>
          <h2>Creative Design</h2>
          <h3>
            Lorem Ipsum simply text of the printing and type setting industry
            when an unknown printing simply
          </h3>
        </div>
        <div className="service_section_card">
          <h1><i className="fa-solid fa-crop"></i></h1>
          <h2>Clean Code</h2>
          <h3>
            Lorem Ipsum simply text of the printing and type setting industry
            when an unknown printing simply
          </h3>
        </div>
        <div className="service_section_card">
          <h1><i className="fa-solid fa-cubes"></i></h1>
          <h2>Responsive Design</h2>
          <h3>
            Lorem Ipsum simply text of the printing and type setting industry
            when an unknown printing simply
          </h3>
        </div>
        <div className="service_section_card">
          <h1><i className="fa-solid fa-chart-pie"></i></h1>
          <h2>Bootstrap 4</h2>
          <h3>
            Lorem Ipsum simply text of the printing and type setting industry
            when an unknown printing simply
          </h3>
        </div>
        <div className="service_section_card">
          <h1><i className="fa-solid fa-code"></i></h1>
          <h2>Font Icons</h2>
          <h3>
            Lorem Ipsum simply text of the printing and type setting industry
            when an unknown printing simply
          </h3>
        </div>
        <div className="service_section_card">
          <h1><i className="fa-solid fa-chart-column"></i></h1>
          <h2>Awesome Support</h2>
          <h3>
            Lorem Ipsum simply text of the printing and type setting industry
            when an unknown printing simply
          </h3>
        </div>
      </div>
    </div>
    <div className="some_facts_section">
      <div className="some_facts_section_card">
        <h1><i className="fa-brands fa-skyatlas"></i></h1>
        <h2>368</h2>
        <h3>HAPPY CLIENTS</h3>
      </div>
      <div className="some_facts_section_card">
        <h1><i className="fa-regular fa-heart"></i></h1>
        <h2>937</h2>
        <h3>Projects Compleated</h3>
      </div>
      <div className="some_facts_section_card">
        <h1><i className="fa-solid fa-earth-oceania"></i></h1>
        <h2>438</h2>
        <h3>Files Downloaded</h3>
      </div>
      <div className="some_facts_section_card">
        <h1><i className="fa-regular fa-user"></i></h1>
        <h2>5946</h2>
        <h3>Liens Of Code</h3>
      </div>
    </div>
    <div className="portfolio_section">
      <h1>Portfolio</h1>
      <div className="portfolio_section_nav">
        <button className="section_nav_button1">ALL</button>
        <button className="section_nav_button2">MARKETING</button>
        <button className="section_nav_button2">DESIGN</button>
        <button className="section_nav_button2">DEVELOPMENT</button>
      </div>
      <div className="portfolio_section_grid">
        <div className="portfolio_section_grid">
          <div className="portfolio_section_grid_card">
            <img src={portfolioimage1} />
            <div className="portfolio_section_overlay">
              <h1>Brex Logo</h1>
              <h2>Brand</h2>
              <h3><i className="fa-regular fa-eye"></i></h3>
            </div>
          </div>
          <div className="portfolio_section_grid_card">
            <img src={portfolioimage2} alt="image" />
            <div className="portfolio_section_overlay">
              <h1>Brex Logo</h1>
              <h2>Brand</h2>
              <h3><i className="fa-regular fa-eye"></i></h3>
            </div>
          </div>
          <div className="portfolio_section_grid_card">
            <img src={portfolioimage3} alt="image" />
            <div className="portfolio_section_overlay">
              <h1>Brex Logo</h1>
              <h2>Brand</h2>
              <h3><i className="fa-regular fa-eye"></i></h3>
            </div>
          </div>
          <div className="portfolio_section_grid_card">
            <img src={portfolioimage4} alt="image" />
            <div className="portfolio_section_overlay">
              <h1>Brex Logo</h1>
              <h2>Brand</h2>
              <h3><i className="fa-regular fa-eye"></i></h3>
            </div>
          </div>
          <div className="portfolio_section_grid_card">
            <img src={portfolioimage5} alt="image" />
            <div className="portfolio_section_overlay">
              <h1>Brex Logo</h1>
              <h2>Brand</h2>
              <h3><i className="fa-regular fa-eye"></i></h3>
            </div>
          </div>
          <div className="portfolio_section_grid_card">
            <img src={portfolioimage6} alt="image" />
            <div className="portfolio_section_overlay">
              <h1>Brex Logo</h1>
              <h2>Brand</h2>
              <h3><i className="fa-regular fa-eye"></i></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Testimonial_section">
      <h1>Testimonials</h1>
      <img
        src={testimonialspng}
        alt="Image"
        className="Testimonials_img1"
      />
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        porttitordapibus dictum. <br />
        Fusce faucibus ligula scelerisque, eleifend turpis in
      </h2>
      <div className="Testimonials_img2">
        <img src={testimonialteam1} alt="Image" />
      </div>
      <h3>Alamin Musa</h3>
      <h4>Front End Developer</h4>
      <div className="testimonials_buttons">
        <button></button>
        <button></button>
        <button></button>
      </div>
      <button className="testimonials_leftarrow">
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button className="testimonials_rightarrow">
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
    <div className="ourblog_section">
      <h1>Our Blog</h1>
      <div className="ourblog_section_container">
        <div className="ourblog_section_card">
          <img src={ourblogimage1} alt="image" />
          <div className="ourblog_section_card_button">
            <button>Web</button>
          </div>
          <div className="ourblog_section_content">
            <h2>Master These Awesome</h2>
            <h3>By Dorian Gray, Jun 27, 2018</h3>
            <h4>
              Lorem Ipsum has been standard. Lorem Ipsum is simply text of the
              printing and typesetting industry. Lorem Ipsum has been
            </h4>
          </div>
        </div>
        <div className="ourblog_section_card">
          <img src={ourblogimage2} alt="image" />
          <div className="ourblog_section_card_button">
            <button>Web</button>
          </div>
          <div className="ourblog_section_content">
            <h2>Best Design Items to Appeal</h2>
            <h3>By Dorian Gray, Jun 27, 2018</h3>
            <h4>
              Lorem Ipsum has been standard. Lorem Ipsum is simply text of the
              printing and typesetting industry. Lorem Ipsum has been
            </h4>
          </div>
        </div>
        <div className="ourblog_section_card">
          <img src={ourblogimage3} alt="image" />
          <div className="ourblog_section_card_button">
            <button>Web</button>
          </div>
          <div className="ourblog_section_content">
            <h2>The 20 Best Lightroom Presets</h2>
            <h3>By Dorian Gray, Jun 27, 2018</h3>
            <h4>
              Lorem Ipsum has been standard. Lorem Ipsum is simply text of the
              printing and typesetting industry. Lorem Ipsum has been
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div className="keepintouch_section">
      <h1>Keep In Touch</h1>
      <div className="keepintouch_container">
        <div className="keepintouch_form_section">
          <input type="text" placeholder="Name" className="input_name" />
          <input type="email" placeholder="Email" className="input_email" />
          <input type="text" placeholder="Subject" className="input_subject" />
          <textarea
            name="Message"
            className="input_message"
            placeholder="Message"
          ></textarea>
          <button>Send Now!</button>
        </div>
        <div className="keepintouch_contact_section">
          <h1><i className="fa-solid fa-location-dot"></i></h1>
          <h2>
            2651 Main Street, Suit 124 <br />
            Seattle, WA, 98101
          </h2>
          <h1><i className="fa-solid fa-mobile-screen-button"></i></h1>
          <h2>
            0123456789 <br />
            0345627891
          </h2>
          <h1><i className="fa-solid fa-at"></i></h1>
          <h2>hello@thetheme.io <br/>
              inf0@brex-theme.io</h2>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="footer_icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-dribbble"></i>
          <i className="fa-brands fa-skype"></i>
      </div>
      <h1>All Right Resceved 2018</h1>
    </div>
  </div>
  )
}

export default App
