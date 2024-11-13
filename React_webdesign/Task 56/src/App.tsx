import './App.css';
import './reset.css';
import { headerimage, heroimage, aboutimage, P1, P2, P3, P4, P5, P6, previewpng, profilepic1, profilepic2, profilepic3, smallprofileimage1, smallprofileimage2, smallprofileimage3, logo1, logo2, logo3, logo4, logo5 } from './image';
const App = () => {
  return (
    <div>
      <div className="header">
        <div className="headercontainer">
          <img src={headerimage} alt="" />
          <div className="nav">
            <button>HOME</button>
            <button>ABOUT</button>
            <button>SERVICE</button>
            <button>PORTFOLIO</button>
            <button>PRICING</button>
            <button>
              BLOG{" "}
              <span
                className="lnr lnr-chevron-down"
                style={{ fontSize: "10px", color: "black", fontWeight: 600 }}
              ></span>
            </button>
            <button>
              PAGES{" "}
              <span
                className="lnr lnr-chevron-down"
                style={{ fontSize: "10px", color: "black", fontWeight: 600 }}
              ></span>
            </button>

            <button>CONTACT</button>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="sectioncontainer">
          <div className="section-content">
            <h1>THIS IS ME</h1>
            <h2>PHILIP GILBERT</h2>
            <p>
              You will begin to realise why this exercise is called the Dickens
              Pattern with reference to the ghost showing Scrooge some different
              futures.
            </p>
            <button>DISCOVER NOW</button>
          </div>
          <div className="sectionimage">
            <img src={heroimage} alt="image" />
          </div>
        </div>
      </div>
      <div className="AboutMe">
        <div className="AboutMecontainer">
          <div className="Aboutmeimage">
            <img src={aboutimage} alt="image" />
          </div>
          <div className="Aboutme-content">
            <h1>ABOUT ME</h1>
            <h2>PERSONAL DETAILS</h2>
            <p>
              Here, I focus on a range of items and features that we use in life
              without giving them a second thought. such as Coca Cola. Dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco.
            </p>
            <button>VIEW FULL DETAILS</button>
          </div>
        </div>
      </div>
      <div className="offeredservice">
        <div className="offeredservice-content">
          <h1>MY Offered Services</h1>
          <p>
            At about this time of year, some months after New Year’s resolutions
            have been made and kept, or made <br />
            and neglected.
          </p>
        </div>
        <div className="offeredservice-container">
          <div className="offer1">
            <span className="lnr lnr-pie-chart"></span>
            <h1>Web Design</h1>
            <p>
              “It is not because things are difficult that we do not dare; it is
              because we do not dare that they are difficult.”
            </p>
          </div>
          <div className="offer1">
            <span className="lnr lnr-laptop-phone"></span>
            <h1>Web development</h1>
            <p>
              If you are an entrepreneur, you know that your success cannot
              depend on the opinions of others. Like the wind, opinions.
            </p>
          </div>
          <div className="offer1">
            <span className="lnr lnr-camera"></span>
            <h1>Photography</h1>
            <p>
              Do you want to be even more successful? Learn to love learning and
              growth. The more effort you put into improving your skills.
            </p>
          </div>
          <div className="offer1">
            <span className="lnr lnr-picture"></span>
            <h1>Clipping Path</h1>
            <p>
              Hypnosis quit smoking methods maintain caused quite a stir in the
              medical world over the last two decades. There is a lot of
              argument.
            </p>
          </div>
          <div className="offer1">
            <span className="lnr lnr-tablet"></span>
            <h1>Apps interface</h1>
            <p>
              Do you sometimes have the feeling that you’re running into the
              same obstacles over and over again? Many of my conflicts.
            </p>
          </div>
          <div className="offer1">
            <span className="lnr lnr-rocket"></span>
            <h1>Graphic design</h1>
            <p>
              You’ve heard the expression, “Just believe it and it will come.”
              Well, technically, that is true, however, ‘believing’ is not just
              thinking that.
            </p>
          </div>
        </div>
      </div>
      <div className="counter">
        <div className="column">
          <h1>2536</h1>
          <p>Project Completed</p>
        </div>
        <div className="column">
          <h1>6784</h1>
          <p>Happy Clients</p>
        </div>
        <div className="column">
          <h1>2239</h1>
          <p>Cups of Coffee</p>
        </div>
        <div className="column">
          <h1>434</h1>
          <p>Real Professionals</p>
        </div>
      </div>
      <div className="Project">
        <h1>Our Latest Featured Projects</h1>
        <p>Who are in extremely love with eco friendly system.</p>
        <div className="projectnav">
          <h2>ALL</h2>
          <button>VECTOR</button>
          <button>RAISER</button>
          <button>UI/UX</button>
          <button>PRINTING</button>
        </div>
        <div className="Project-container">
          <div className="project-card">
            <img src={P1} alt="image" />
            <div className="overlay">
              <img src={previewpng} alt="image" />
            </div>
            <h1>2D Vinyl Design</h1>
            <p>vector</p>
          </div>
          <div className="project-card">
            <img src={P2} alt="image" />
            <div className="overlay">
              <img src={previewpng} alt="image" />
            </div>
            <h1>2D Vinyl Design</h1>
            <p>vector</p>
          </div>
          <div className="project-card">
            <img src={P3} alt="image" />
            <div className="overlay">
              <img src={previewpng} alt="image" />
            </div>
            <h1>Creative Poster Design</h1>
            <p>vector</p>
          </div>
          <div className="project-card">
            <img src={P4} alt="image" />
            <div className="overlay">
              <img src={previewpng} alt="image" />
            </div>
            <h1>2D Vinyl Design</h1>
            <p>vector</p>
          </div>
          <div className="project-card">
            <img src={P5} alt="image" />
            <div className="overlay">
              <img src={previewpng} alt="image" />
            </div>
            <h1>2D Vinyl Design</h1>
            <p>vector</p>
          </div>
          <div className="project-card">
            <img src={P6} alt="image" />
            <div className="overlay">
              <img src={previewpng} alt="image" />
            </div>
            <h1>2D Vinyl Design</h1>
            <p>vector</p>
          </div>
        </div>
      </div>
      <div className="plans-container">
        <h1>Choose Your Plans</h1>
        <p>
          When someone does something that they know that they shouldn't do, did
          they.
        </p>
        <div className="pricing-row">
          <div className="pricingcard">
            <h1>01</h1>
            <h2>Economy</h2>
            <h3>For the individuals</h3>
            <h4>Secure Online Transfer</h4>
            <h5>Unlimited Styles for interface</h5>
            <p>Reliable Customer Service</p>
            <h6>£199.00</h6>
            <button className="buynow">Buy Now</button>
          </div>
          <div className="pricingcard">
            <h1>02</h1>
            <h2>Business</h2>
            <h3>For the individuals</h3>
            <h4>Secure Online Transfer</h4>
            <h5>Unlimited Styles for interface</h5>
            <p>Reliable Customer Service</p>
            <h6>£199.00</h6>
            <button className="buynow">Buy Now</button>
          </div>
          <div className="pricingcard">
            <h1>03</h1>
            <h2>Premium</h2>
            <h3>For the individuals</h3>
            <h4>Secure Online Transfer</h4>
            <h5>Unlimited Styles for interface</h5>
            <p>Reliable Customer Service</p>
            <h6>£199.00</h6>
            <button className="buynow">Buy Now</button>
          </div>
          <div className="pricingcard">
            <h1>04</h1>
            <h2>Exlusive</h2>
            <h3>For the individuals</h3>
            <h4>Secure Online Transfer</h4>
            <h5>Unlimited Styles for interface</h5>
            <p>Reliable Customer Service</p>
            <h6>£199.00</h6>
            <button className="buynow">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="blog">
        <h2>Latest Posts From Our Blog</h2>
        <p>
          You may be a skillful, effective employer but if you don’t trust your
          personnel and the opposite, then the <br />
          chances of improving and expanding the business
        </p>
        <div className="blog-row">
          <div className="blog-card">
            <img src={profilepic2} alt="Image" />
            <div className="postinfo">
              <div className="postinfo-name">
                <img src={smallprofileimage1} alt="image" />
                <p>Giedrius V.</p>
              </div>
              <div className="postinfo-likes">
                <h1>1st Oct</h1>
                <h2>
                  <span className="lnr lnr-heart"></span>9
                </h2>
                <h3>
                  <span className="lnr lnr-bubble"></span>0
                </h3>
              </div>
            </div>
            <h5>BREAK THROUGH SELF DOUBT AND FEAR</h5>
            <p>
              Dream interpretation has many forms; it can be done be done for
              the sake of fun, hobby or can be taken up as a serious career.
            </p>
          </div>
          <div className="blog-card">
            <img src={profilepic3} alt="Image" />
            <div className="postinfo">
              <div className="postinfo-name">
                <img src={smallprofileimage2} alt="image" />
                <p>Giedrius V.</p>
              </div>
              <div className="postinfo-likes">
                <h1>1st Oct</h1>
                <h2>
                  <span className="lnr lnr-heart"></span>9
                </h2>
                <h3>
                  <span className="lnr lnr-bubble"></span>0
                </h3>
              </div>
            </div>
            <h5>PORTABLE FASHION FOR WOMEN</h5>
            <p>
              You may be a skillful, effective employer but if you don’t trust
              your personnel and the opposite, then the chances of improving.
            </p>
          </div>
          <div className="blog-card">
            <img src={profilepic1} alt="Image" />
            <div className="postinfo">
              <div className="postinfo-name">
                <img src={smallprofileimage3} alt="image" />
                <p>Giedrius V.</p>
              </div>
              <div className="postinfo-likes">
                <h1>1st Oct</h1>
                <h2>
                  <span className="lnr lnr-heart"></span>9
                </h2>
                <h3>
                  <span className="lnr lnr-bubble"></span>0
                </h3>
              </div>
            </div>
            <h5>PRACTICE MAKES PERFECT</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              dolore similique quam quidem eos deleniti at aperiam minima aut?
            </p>
          </div>
        </div>
      </div>
      <div className="logo">
        <div className="col">
          <img src={logo1} alt="logo" />
        </div>
        <div className="col">
          <img src={logo2} alt="logo" />
        </div>
        <div className="col">
          <img src={logo3} alt="logo" />
        </div>
        <div className="col">
          <img src={logo4} alt="logo" />
        </div>
        <div className="col">
          <img src={logo5} alt="logo" />
        </div>
      </div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-aboutme">
            <h1>ABOUT ME</h1>
            <h2>
              We have tested a number of registry fix and clean utilities and
              present our top 3 list on our site for your convenience.
            </h2>
            <p>
              Copyright © 2019 All rights reserved <br />
              This template is made with
              <span className="lnr lnr-heart" style={{ color: "pink", letterSpacing:8, marginLeft:10 }}></span>
               by
               <a href="#">Artūras & Giedrius</a>
            </p>
          </div>
          <div className="newsletter">
            <h1>Newsletter</h1>
            <p>Stay updated with our latest trends</p>
            <div className="newsletterform">
              <input type="email" placeholder="Enter Email Address" />
              <button>
                <span className="lnr lnr-arrow-right"></span>
              </button>
            </div>
          </div>
          <div className="followme">
            <h1>FOLLOW ME</h1>
            <h2>Let us be social</h2>
            <div className="socialnetworks">
              <h3>
                <i className="fa-brands fa-facebook-f"></i>
              </h3>
              <h4>
                <i className="fa-brands fa-twitter"></i>
              </h4>
              <h5>
                <i className="fa-brands fa-dribbble"></i>
              </h5>
              <p>
                <i className="fa-brands fa-behance"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
