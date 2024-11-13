import './App.css';
import './reset.css';
import { headerlogo, gearpng, barchartlogo, automationlogo, welcomeimage, signimage, serviceimage1, serviceimage2, serviceimage3, serviceimage4, serviceimage5, serviceimage6, f_pr_1, f_pr_2, f_pr_3, f_pr_4, f_pr_5, clientimage1, clientimage2, clientimage3, qutationicon, newsimage1, newsimage2, newsimage3, messagelogo, emailpng, locationpng, phonecallpng, sendarrowpng } from './image';
const App = () => {
  return (
    <div>
    <div className="section">
      <div className="header">
        <img src={headerlogo}alt="Image" />
        <div className="navbar">
          <button>Home</button>
          <button>About Us</button>
          <button>Services</button>
          <button>Projects</button>
          <button>Pages</button>
          <button>Shop</button>
          <button>Blog</button>
          <button>Contact Us</button>
          <i className="fa-solid fa-magnifying-glass"></i>
          <p>|</p>
          <h1>1800 685 4321</h1>
        </div>
      </div>
      <div className="section-content">
        <h1>
          We Are Providing Best <br />
          Service In
          <span style={{ fontFamily: 'Playfairitalic', color: '#ffb600' }}
            >Industrial Area</span>
        </h1>
        <p>
          Leverage agile frameworks to provide a robust synopsis for high
          level overviews. Iterative approaches to corporate strategy.
        </p>
        <button>View all services</button>
      </div>
    </div>
    <div className="welcomearea">
      <div className="welcomearea-grid">
        <div className="grid1">
          <img src={gearpng} alt="icon" />
          <div className="grid1-content">
            <h1>High Standard in <br />Service</h1>
            <p>
              Capitalize on low hanging fruit to iden- tify a ballpark value
              added activity to beta test. Override the digital divide.
            </p>
          </div>
        </div>
        <div className="grid2">
          <img src={barchartlogo} alt="icon" />
          <div className="grid2-content">
            <h1>25 Years Experience in <br />Industry</h1>
            <p>
              Capitalize on low hanging fruit to iden- tify a ballpark value
              added activity to beta test. Override the digital divide.
            </p>
          </div>
        </div>
        <div className="grid3">
          <img src={automationlogo} alt="icon" />
          <div className="grid3-content">
            <h1>
              Best Position in <br />
              Market
            </h1>
            <p>
              Capitalize on low hanging fruit to iden- tify a ballpark value
              added activity to beta test. Override the digital divide.
            </p>
          </div>
        </div>
      </div>
      <div className="welcome-content">
        <div className="welcome-content-main">
          <h1>Welcome to our Industry</h1>
          <h2>25+ years of experiences for give <br />you better results.</h2>
          <h3>
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal
            that has evolved from generation X is on the runway heading
            towards a streamlined cloud solution. Bring to the table win-win
            survival strategies to ensure proactive domination. At the end of
            the day, going forward ew normal that has evolved.
          </h3>
          <h4>
            Compaany CEO :
            <span style={{color: '#797979', fontSize: '15px'}}>Michale John</span>
          </h4>
          <img src={signimage} alt="Image" />
        </div>
        <img src={welcomeimage} alt="Image" />
      </div>
    </div>
    <div className="ourservice">
      <div className="ourservice-container">
        <div className="ourservice-content">
          <h1>Our Services</h1>
          <span className="title_br"></span>
          <p>
            Podcasting operational change management inside of workflows to
            establish a framework taking seamless key performanceindicators.
          </p>
        </div>
        <div className="ourservice-container-grid">
          <div className="ourservice-card">
            <div className="card_image">
              <img src={serviceimage1} alt="Image" />
              <div className="overlay_button">
                <button className="read-more">Read More</button>
              </div>
            </div>
            <h1>Agricultural Processing</h1>
            <span></span>
          </div>
          <div className="ourservice-card">
            <div className="card_image">
              <img src={serviceimage2} alt="Image" />
              <div className="overlay_button">
                <button className="read-more">Read More</button>
              </div>
            </div>
            <h1>Chemical Industry</h1>
            <span></span>
          </div>
          <div className="ourservice-card">
            <div className="card_image">
              <img src={serviceimage3} alt="Image" />
              <div className="overlay_button">
                <button className="read-more">Read More</button>
              </div>
            </div>
            <h1>Civil Engineering</h1>
            <span></span>
          </div>
          <div className="ourservice-card">
            <div className="card_image">
              <img src={serviceimage4} alt="Image" />
              <div className="overlay_button">
                <button className="read-more">Read More</button>
              </div>
            </div>
            <h1>Energy & power</h1>
            <span></span>
          </div>
          <div className="ourservice-card">
            <div className="card_image">
              <img src={serviceimage5} alt="Image" />
              <div className="overlay_button">
                <button className="read-more">Read More</button>
              </div>
            </div>
            <h1>Mechanical Engineering</h1>
            <span></span>
          </div>
          <div className="ourservice-card">
            <div className="card_image">
              <img src={serviceimage6} alt="Image" />
              <div className="overlay_button">
                <button className="read-more">Read More</button>
              </div>
            </div>
            <h1>Oil & Gas Enginering</h1>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div className="featured_project">
      <div className="featured_content">
        <h1>
          Our Featured
          <span style={{fontFamily: 'Playfairitalic', fontSize: '32px'}}
            >Projects</span>
        </h1>
        <span></span>
        <p>
          Podcasting operational change management inside of workflows to
          establish a framework taking seamless key performanceindicators.
        </p>
      </div>
      <div className="featured_project_grid">
        <div className="featured_project-card">
          <div className="card_image2">
            <img src={f_pr_1} alt="Image" />
            <div className="overlay2"></div>
            <div className="featured_card_title">
              <p>Chemical Chamber</p>
            </div>
          </div>
        </div>
        <div className="featured_project-card">
          <div className="card_image2">
            <img src={f_pr_2}alt="Image" />
            <div className="overlay2"></div>
            <div className="featured_card_title">
              <p>Welding Processing</p>
            </div>
          </div>
        </div>
        <div className="featured_project-card">
          <div className="card_image2">
            <img src={f_pr_3} alt="Image" />
            <div className="overlay2"></div>
            <div className="featured_card_title">
              <p>Railway Project</p>
            </div>
          </div>
        </div>
        <div className="featured_project-card">
          <div className="card_image2">
            <img src={f_pr_4} alt="Image" />
            <div className="overlay2"></div>
            <div className="featured_card_title">
              <p>Material Engineering</p>
            </div>
          </div>
        </div>
        <div className="featured_project-card">
          <div className="card_image2">
            <img src={f_pr_5} alt="Image" />
            <div className="overlay2"></div>
            <div className="featured_card_title">
              <p>Wind Power Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="quotearea">
      <h1>
        We peovide innovative product solutions for <br /><span
          style={{fontFamily: 'Playfairitalic', fontWeight: 'bold'}}
          >sustainable progress.</span>
      </h1>
      <button>Enter your Button</button>
    </div>
    <div className="testimonial_area">
      <h1>What Our Clients Says</h1>
      <span></span>
      <div className="testimonial_contianer">
        <div className="testimonial_card">
          <img src={clientimage1} alt="Image" />
          <h1>Romani Jhon</h1>
          <h2>Melborne / Australia</h2>
          <p>
            Override the digital divide with ad- ditional clickthroughs from
            DevOps. Nanotechnology immersion along the information highway
            will close the loop on focusing.
          </p>
          <div className="testimonial_quotation">
            <img src={qutationicon} alt="icon" />
          </div>
        </div>
        <div className="testimonial_card">
          <img src={clientimage2} alt="Image" />
          <h1>Romani Jhon</h1>
          <h2>Melborne / Australia</h2>
          <p>
            Override the digital divide with ad- ditional clickthroughs from
            DevOps. Nanotechnology immersion along the information highway
            will close the loop on focusing.
          </p>
          <div className="testimonial_quotation">
            <img src={qutationicon} alt="icon" />
          </div>
        </div>
        <div className="testimonial_card">
          <img src={clientimage3} alt="Image" />
          <h1>Romani Jhon</h1>
          <h2>Melborne / Australia</h2>
          <p>
            Override the digital divide with ad- ditional clickthroughs from
            DevOps. Nanotechnology immersion along the information highway
            will close the loop on focusing.
          </p>
          <div className="testimonial_quotation">
            <img src={qutationicon} alt="icon" />
          </div>
        </div>
      </div>
    </div>
    <div className="latestnews">
      <div className="latestnews_img">
        <div className="opacity">
          <h1>Latest News</h1>
          <span></span>
          <p>
            Capitalize on low hanging fruit to identify a ballpark <br />
            value added activity to beta test. Override the digital <br />
            divide with additional clickthroughs from DevOps. <br />
            Nanotechnology immersion along the information <br />
            highway will close the loop on focusing solely on the <br />
            bottom line.
          </p>
          <button>More News</button>
        </div>
      </div>
      <div className="newslist_contianer">
        <div className="news_mainlist">
          <img src={newsimage1} alt="Image" />
          <div className="news_mainlist_content">
            <h1>Capitalize on low hanging fruit to identify</h1>
            <h2>
              Podcasting operational change management inside of workflows to
              establish a framework. Taking seamless key...
            </h2>
            <h3>December 12, 2019 | Admin</h3>
          </div>
        </div>
        <div className="news_mainlist">
          <img src={newsimage2} alt="Image" />
          <div className="news_mainlist_content">
            <h1>Capitalize on low hanging fruit to identify</h1>
            <h2>
              Podcasting operational change management inside of workflows to
              establish a framework. Taking seamless key...
            </h2>
            <h3>December 12, 2019 | Admin</h3>
          </div>
        </div>
        <div className="news_mainlist2">
          <img src={newsimage3} alt="Image" />
          <div className="news_mainlist_content">
            <h1>Capitalize on low hanging fruit to identify</h1>
            <h2>
              Podcasting operational change management inside of workflows to
              establish a framework. Taking seamless key...
            </h2>
            <h3>December 12, 2019 | Admin</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="Promotion_area">
      <div className="overlay">
        <h1>
          We invite you to discover some <br />
          recent successes making an <br />
          impact in the
          <span style={{fontSize: '30px', fontWeight: '100'}}>automotive</span>
          industry <br />
          solution in the world.
        </h1>
        <h2>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway.
        </h2>
      </div>
    </div>
    <div className="form_continer">
      <div className="form_card">
        <div className="card_leftcontent">
          <div className="leftcontant_img">
            <img src={messagelogo} alt="Image" />
          </div>
          <div className="card_left_contact">
            <div className="card_icon">
              <div className="card_img">
                <img src={phonecallpng} alt="Image" />
              </div>
              <h1>
                1800 456 7890 <br /><span
                  style={{fontSize: '16px', color: '#333333'}}
                  >Mon - Fri, 9.30am to 6.30pm</span>
              </h1>
            </div>
            <div className="card_icon">
              <div className="card_img">
                <img src={emailpng} alt="Image" />
              </div>
              <h1>
                1800 456 7890 <br /><span
                  style={{fontSize: '16px', color: '#333333'}}
                  >Mon - Fri, 9.30am to 6.30pm</span>
              </h1>
            </div>
            <div className="card_icon">
              <div className="card_img">
                <img src={locationpng} alt="Image" />
              </div>
              <h1>
                1800 456 7890 <br /><span
                  style={{fontSize: '16px', color: '#333333'}}
                  >Mon - Fri, 9.30am to 6.30pm</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="card_rightcontent">
          <h1>Drop a Message</h1>
          <span></span>
          <div className="card_rightcontent_inputcontainer">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Phone No." />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button>Submit Now</button>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="footer_opacity">
        <div className="footer_content_container">
          <div className="footer_content1">
            <img src={headerlogo} alt="Image" />
            <h1>
              Capitalize on low hanging fruit to identify a ballpark value
              added activity to beta test. Override the digital divide
              additional clickthroughs.
            </h1>
            <h2>Read more...</h2>
          </div>
          <div className="footer_content2">
            <h1>Useful Links</h1>
            <ul className="footerul">
              <li>Home</li>
              <li>About Us</li>
              <li>Request Call <br />Back</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer_content3">
            <h1>Services</h1>
            <ul className="footerul">
              <li>Energy & Power</li>
              <li>Mechanical Engineering</li>
              <li>Oil & Gas Engineering</li>
              <li>Agriculture Processing</li>
              <li>Chemical Industry</li>
            </ul>
          </div>
          <div className="footer_content4">
            <h1>Newsletter</h1>
            <p>Get latest updates and offers.</p>
            <div className="footer_input">
              <input type="email" placeholder="Enter your email" />
              <button><img src={sendarrowpng } alt="icon" /></button>
            </div>
            <div className="footer_icons">
              <button><i className="fa-brands fa-facebook-f"></i></button>
              <button><i className="fa-brands fa-linkedin-in"></i></button>
              <button><i className="fa-brands fa-twitter"></i></button>
              <button><i className="fa-brands fa-google-plus-g"></i></button>
            </div>
          </div>
        </div>
        <div className="footer_copyright">
          <h1>Copyright © Infratek 2021. All right reserved.</h1>
          <h1>Created by: DesignArc</h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
