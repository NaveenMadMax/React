import './reset.css';
import './App.css';
import {
  logowhite, planingcardlogo1, planingcardlogo2, planingcardlogo3,
  recentprojectimage1, recentprojectimage2, recentprojectimage3, recentprojectimage4, recentprojectimage5, recentprojectimage6,
  ourservicecardimage1, ourservicecardimage2, ourservicecardimage3, ourservicecardimage4, ourservicecardimage5, ourservicecardimage6,
  linkpng, manpng, clientprofile1, clientprofile2, adviserimage1, adviserimage2, adviserimage3, adviserimage4,
  latestnewsimage1, latestnewsimage2, latestnewsimage3, sponserlogo1, sponserlogo2, sponserlogo3, sponserlogo4, sponserlogo5
} from './image';


const App = () => {
  return (
    <div>
      <div className="section">
        <div className="header_contact">
          <h1>
            <span className="lnr lnr-phone-handset"></span> Call : +00(123)245680
          </h1>
          <div className="dropdown_language">
            <button className="dropdown_language_button">
              English <span><i className="fa-solid fa-angle-down"></i></span>
            </button>
            <div className="dropdown_language_menu">
              <a href="#">English</a>
              <a href="#">French</a>
            </div>
          </div>
          <div className="header_icons">
            <button><i className="fa-brands fa-facebook-f"></i></button>
            <button><i className="fa-brands fa-twitter"></i></button>
            <button><i className="fa-brands fa-google-plus-g"></i></button>
            <button><i className="fa-brands fa-instagram"></i></button>
          </div>
        </div>
        <div className="header_navigationbar">
          <div className="header_navigationbar_img">
            <img src={logowhite} alt="Logo" />
            <div className="header_navi_menu">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#" style={{marginLeft: '5px'}}>Work</a>
              <a href="#">Blog</a>
              <a href="#">Pages</a>
              <a href="#">Contact</a>
              <button>
                GET A QUOTE
                <i
                  className="fa-solid fa-arrow-right-long"
                  style={{marginLeft: '5px', marginTop: '1px'}}
                ></i>
              </button>
            </div>
          </div>
        </div>
        <div className="section_contentmain">
          <h1>
            Best Business & Corporate <br />
            HTML5 Template
          </h1>
          <h2>
            But I must explain to you how all this mistaken idea of denouncing
            plesure and <br />
            praising pain was born and will give complete.
          </h2>
          <div className="section_contentmain_button">
            <button className="section_contentmain_button1">
              CONTACT US
              <i
                className="fa-solid fa-arrow-right-long"
                style={{marginLeft: '10px'}}
              ></i>
            </button>
            <button className="section_contentmain_button2">
              LEARN MORE
              <i
                className="fa-solid fa-arrow-right-long"
                style={{marginLeft: '10px'}}
              ></i>
            </button>
          </div>
        </div>
        <div className="round_button">
          <button className="round_button1"></button>
          <button className="round_button2"></button>
          <button className="round_button2"></button>
        </div>
      </div>
      <div className="planning_section">
        <div className="planning_section_card1">
          <img src={planingcardlogo1} alt="image" />
          <h1>Business Planning</h1>
          <p>
            Must explain to you how all this mista ke idea of denouncing
            pleasure and praising pain was born
          </p>
          <button className="planning_button">
            Read More <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
        <div className="planning_section_card1">
          <img src={planingcardlogo2} alt="image" />
          <h1>Financial Planning</h1>
          <p>
            Must explain to you how all this mista ke idea of denouncing
            pleasure and praising pain was born
          </p>
          <button className="planning_button">
            Read More <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
        <div className="planning_section_card1">
          <img src={planingcardlogo3} alt="image" />
          <h1>Market Analysis</h1>
          <p>
            Must explain to you how all this mista ke idea of denouncing
            pleasure and praising pain was born
          </p>
          <button className="planning_button">
            Read More <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
      <div className="business_consultan_section">
        <h1>Needs experience business consultant?</h1>
        <button>CONTACT US <i className="fa-solid fa-arrow-right-long"></i></button>
      </div>
      <div className="recent_project_section">
        <h1>Recent Project</h1>
        <div className="recent_project_section_nav">
          <button style={{color: 'blue'}}>ALL</button>
          <button>BUSINESS</button>
          <button>FINACE</button>
          <button>IDEA</button>
          <button>MARKETING</button>
        </div>
        <div className="recent_project_grid">
          <div className="recent_project_grid_image">
            <img src={recentprojectimage1} alt="image" />
            <div className="overlay"></div>
            <div className="imagetext1">Business Plan Services</div>
            <div className="imagetext2">Business, Finance, Idea</div>
          </div>
          <div className="recent_project_grid_image">
            <img src={recentprojectimage2} alt="image" />
            <div className="overlay"></div>
            <div className="imagetext1">Finance Planing</div>
            <div className="imagetext2">Business, Finance</div>
          </div>
          <div className="recent_project_grid_image">
            <img src={recentprojectimage3} alt="image" />
            <div className="overlay"></div>
            <div className="imagetext1">Awesome Idea Building</div>
            <div className="imagetext2">Business, Idea</div>
          </div>
          <div className="recent_project_grid_image">
            <img src={recentprojectimage4} alt="image" />
            <div className="overlay"></div>
            <div className="imagetext1">Corporate Plan Services</div>
            <div className="imagetext2">Finance, Marketing</div>
          </div>
          <div className="recent_project_grid_image">
            <img src={recentprojectimage5} alt="image" />
            <div className="overlay"></div>
            <div className="imagetext1">Financial Planing</div>
            <div className="imagetext2">Business, Finance</div>
          </div>
          <div className="recent_project_grid_image">
            <img src={recentprojectimage6} alt="image" />
            <div className="overlay"></div>
            <div className="imagetext1">Marketing for Business</div>
            <div className="imagetext2">Business, Idea, Marketing</div>
          </div>
        </div>
      </div>
      <div className="about_company_section">
        <div className="about_company_section_image"></div>
        <div className="about_company_section_content">
          <h1>About Company</h1>
          <h2>
            All you need is Kormo, a modern & simple <br />
            template for your business.
          </h2>
          <h3>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of tgreat
            explorer of the truth, the master-builder of human happness. one
            rejects, dislikes or avoids pleasure itself because it is plesuress
            because those.
          </h3>
          <button>Read More<i className="fa-solid fa-arrow-right-long"></i></button>
        </div>
      </div>
      <div className="ourservice_section">
        <h1>Our Service</h1>
        <div className="ourservice_section_grid">
          <div className="ourservice_section_card">
            <div className="ourservice_section_card_image">
              <img src={ourservicecardimage1} alt="image" />
              <div className="overlay_icon">
                <img src={linkpng} alt="link" />
              </div>
            </div>
            <h1>Market Strategy</h1>
            <p>
              Must explain to you how all this mista ke <br />
              idea of denouncing pleasure and praising <br />
              pain was born better
            </p>
            <button>
              Read More <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          <div className="ourservice_section_card">
            <div className="ourservice_section_card_image">
              <img src={ourservicecardimage2} alt="image" />
              <div className="overlay_icon">
                <img src={linkpng} alt="link" />
              </div>
            </div>
            <h1>Creative Thinking</h1>
            <p>
              Must explain to you how all this mista ke <br />
              idea of denouncing pleasure and praising <br />
              pain was born better
            </p>
            <button>
              Read More <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          <div className="ourservice_section_card">
            <div className="ourservice_section_card_image">
              <img src={ourservicecardimage3} alt="image" />
              <div className="overlay_icon">
                <img src={linkpng} alt="link" />
              </div>
            </div>
            <h1>Banking Consulting</h1>
            <p>
              Must explain to you how all this mista ke <br />
              idea of denouncing pleasure and praising <br />
              pain was born better
            </p>
            <button>
              Read More <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          <div className="ourservice_section_card">
            <div className="ourservice_section_card_image">
              <img src={ourservicecardimage4} alt="image" />
              <div className="overlay_icon">
                <img src={linkpng} alt="link" />
              </div>
            </div>
            <h1>Market Analysis</h1>
            <p>
              Must explain to you how all this mista ke <br />
              idea of denouncing pleasure and praising <br />
              pain was born better
            </p>
            <button>
              Read More <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          <div className="ourservice_section_card">
            <div className="ourservice_section_card_image">
              <img src={ourservicecardimage5} alt="image" />
              <div className="overlay_icon">
                <img src={linkpng} alt="link" />
              </div>
            </div>
            <h1>Financial Planning</h1>
            <p>
              Must explain to you how all this mista ke <br />
              idea of denouncing pleasure and praising <br />
              pain was born better
            </p>
            <button>
              Read More <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          <div className="ourservice_section_card">
            <div className="ourservice_section_card_image">
              <img src={ourservicecardimage6} alt="image" />
              <div className="overlay_icon">
                <img src={linkpng} alt="link" />
              </div>
            </div>
            <h1>Business Planning</h1>
            <p>
              Must explain to you how all this mista ke <br />
              idea of denouncing pleasure and praising <br />
              pain was born better
            </p>
            <button>
              Read More <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="achivements">
        <div className="achivements_completed">
          <h1><i className="fa-regular fa-user"></i></h1>
          <h2>4563</h2>
          <p>Happy Customers</p>
        </div>
        <div className="achivements_completed">
          <h1><i className="fa-solid fa-layer-group"></i></h1>
          <h2>3654</h2>
          <p>Project complete</p>
        </div>
        <div className="achivements_completed">
          <h1><i className="fa-solid fa-cart-shopping"></i></h1>
          <h2>2756</h2>
          <p>Coffee Cups</p>
        </div>
        <div className="achivements_completed">
          <h1><i className="fa-solid fa-trophy"></i></h1>
          <h2>919</h2>
          <p>Award Won</p>
        </div>
      </div>
      <div className="portfolio_section">
        <div className="portfolio_section_card">
          <h1>Start up your New Career Ventures With Kormo.</h1>
          <h2>
            Quisquam est, qui dolorem ipsum quia dolor sit amet consectetur
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat must be point.
          </h2>
          <div className="portfolio_section_card_list">
            <li><i className="fa-regular fa-thumbs-up"></i>Audit & Assurance</li>
            <li><i className="fa-regular fa-thumbs-up"></i>Dedicated Team</li>
            <li><i className="fa-regular fa-thumbs-up"></i>Best Advisors</li>
            <li><i className="fa-regular fa-thumbs-up"></i>Network Solutions</li>
            <li><i className="fa-regular fa-thumbs-up"></i>24/7 Supports</li>
            <li><i className="fa-regular fa-thumbs-up"></i>Work Deadline</li>
          </div>
          <button>Contact Us<span className="lnr lnr-arrow-right"></span></button>
        </div>
        <img src={manpng} alt="Image" /> 
      </div>
      <div className="clients_section">
        <h1>What Clients Say</h1>
        <div className="clients_container">
          <div className="clients_container_card">
            <img src={clientprofile1} alt="Image" />
            <h1>Fletch Skinner</h1>
            <h2>CEO</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis similique vitae, molestias deleniti
            </p>
          </div>
          <div className="clients_container_card">
            <img src={clientprofile2} alt="Image" />
            <h1>Nathaneal Down</h1>
            <h2>CEO</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis similique vitae, molestias deleniti
            </p>
          </div>
          <div className="clients_container_card">
            <img src={clientprofile1} alt="Image" />
            <h1>Fletch Skinner</h1>
            <h2>CEO</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis similique vitae, molestias deleniti
            </p>
          </div>
        </div>
        <div className="clients_container_card_roundbutton">
          <button className="round_button1"></button>
          <button className="round_button2"></button>
          <button className="round_button2"></button>
          <button className="round_button2"></button>
          <button className="round_button2"></button>
        </div>
      </div>
      <div className="ourexpertadvisor_section">
        <h1>Our Expert Advisor</h1>
        <div className="ourexpertadvisor_section_container">
          <div className="ourexpertadvisor_section_container_img">
            <img src={adviserimage1} />
            <div className="ourexpertadvisor_section_container_overlay">
              <div className="ourexpertadvisor_section_container_overlay_text">
                <h1>James Bond</h1>
                <h2>Web Developer</h2>
                <h3>
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="ourexpertadvisor_section_container_img">
            <img src={adviserimage2}alt="Image" />
            <div className="ourexpertadvisor_section_container_overlay">
              <div className="ourexpertadvisor_section_container_overlay_text">
                <h1>Luus Khane</h1>
                <h2>Design Head</h2>
                <h3>
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="ourexpertadvisor_section_container_img">
            <img src={adviserimage3} alt="Image" />
            <div className="ourexpertadvisor_section_container_overlay">
              <div className="ourexpertadvisor_section_container_overlay_text">
                <h1>JFara Chowla</h1>
                <h2>Idea Generator</h2>
                <h3>
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="ourexpertadvisor_section_container_img">
            <img src={adviserimage4} alt="Image" />
            <div className="ourexpertadvisor_section_container_overlay">
              <div className="ourexpertadvisor_section_container_overlay_text">
                <h1>Jarin Kan</h1>
                <h2>Marketing Officer</h2>
                <h3>
                  <i className="fa-brands fa-facebook-f"></i><i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i><i className="fa-brands fa-linkedin-in"></i>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="latest_news_section">
        <h1>Latest News</h1>
        <div className="latest_news_section_container">
          <div className="latest_news_section_card">
            <div className="latest_news_section_card_img">
              <img src={latestnewsimage1} alt="Image" />
            </div>
            <h2>OCT 25, 2018</h2>
            <h3>Security takes center stage at Google’s hardware event</h3>
            <h4>
              Must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will
            </h4>
            <button>Read More</button>
          </div>
          <div className="latest_news_section_card">
            <div className="latest_news_section_card_img">
              <img src={latestnewsimage2} alt="Image" />
            </div>
            <h2>OCT 25, 2018</h2>
            <h3>Security takes center stage at Google’s hardware event</h3>
            <h4>
              Must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will
            </h4>
            <button>Read More</button>
          </div>
          <div className="latest_news_section_card">
            <div className="latest_news_section_card_img">
              <img src={latestnewsimage3} alt="Image" />
            </div>
            <h2>OCT 25, 2018</h2>
            <h3>Security takes center stage at Google’s hardware event</h3>
            <h4>
              Must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will
            </h4>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className="logo_section">
        <img src={sponserlogo1} alt="Image" className="logo_sectionimg1" />
        <img
          src={sponserlogo2}
          alt="Image"
          className="logo_sectionimg2"
        />
        <img
          src={sponserlogo3}
          alt="Image"
          className="logo_sectionimg3"
        />
        <img
          src={sponserlogo4}
          alt="Image"
          className="logo_sectionimg4"
        />
        <img
          src={sponserlogo5}
          alt="Image"
          className="logo_sectionimg5"
        />
      </div>
      <div className="footer">
        <div className="aboutus_section">
          <h1>About us</h1>
          <h2>
            Quisquam est, qui dolorem ipsum quia dolor sit amet consectetur
            adipisci velit.
          </h2>
          <div className="footer_input">
            <input type="email" placeholder="Your email address" /><button>
              <i className="fa-solid fa-rocket"></i>
            </button>
          </div>
          <h4>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter">
            <i className="fa-brands fa-google-plus-g"></i></i>
            <i className="fa-brands fa-instagram"></i>
          </h4>
        </div>
        <div className="useful_link">
          <h1>Useful link</h1>
          <ul>
            <li>
              <i className="fa-solid fa-caret-right"></i>Business Plan Services
            </li>
            <li>
              <i className="fa-solid fa-caret-right"></i>Awesome Idea Building
            </li>
            <li><i className="fa-solid fa-caret-right"></i>Financial Planing</li>
            <li>
              <i className="fa-solid fa-caret-right"></i>Marketing for Business
            </li>
            <li><i className="fa-solid fa-caret-right"></i>Contact Us</li>
          </ul>
        </div>
        <div className="recent_post">
          <h1>Recent Post</h1>
          <h2>Security takes center stage at Google’s hardware event</h2>
          <p>November 20, 2018</p>
          <h3>Better of the ambulatory sur ery centers acuitys</h3>
          <p>November 20, 2018</p>
        </div>
        <div className="contactus">
          <h1>Contact Us</h1>
          <ul>
            <li>150 Bay Street,New York, NY 7302</li>
            <li>1 (800) 686-6688</li>
            <li>admin@kormo.com</li>
            <li>NewYork City, US</li>
            <li>Open hours: 8.00-18.00 Mon-Fri</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
