import './app.css';
import image1 from './assets/Images/image2.jpg';
import image2 from './assets/Images/image3.jpg';
import image3 from './assets/Images/One-Piece-Ship-Wallpaper-147515.jpg'
const App = () => {
  return (
    <div>
      <div className="header">
        <div className="mayabi">MAYABI</div>
        <p>HOME</p>
        <p>ABOUTUS</p>
        <p className="heading">PORTFOLIO</p>
        <p>BLOG</p>
        <p>SHOP</p>
        <p>CONTACTUS</p>
      </div>
      <div className="section">
        <div className="container">
          <h2 className="content">MAYABI<br />PORTFOLIO MULIT PURPOSE THEME</h2>
          <div className="content2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum est
            mollitia fugit qui labore, doloremque unde dolor, sit enim itaque
            voluptatibus ea iusto! Molestiae ipsum quod pariatur, assumenda sint
            rerum?
          </div>
          <div className="button">
            <button className="button-style">Download</button>
            <button className="button-style">Load More</button>
          </div>
        </div>
      </div>
      <div className="article">
        <img src={image1} alt="image2" className="image-style" />
        <img src={image2}alt="image3" className="image-style" />
        <div className="aside">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          placeat, deleniti voluptatum nam minima nisi ipsum modi dolore enim?
          Adipisci, delectus? Voluptates eum vel praesentium saepe debitis
          veritatis esse maiores?
          <button className="aside-button">View More</button>
        </div>
      </div>
      <div className="article2">
        <h2>PORTFOLIO</h2>
        <div className="line"></div>
      </div>
      <div className="article2-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
        Dolore quae, inventore incidunt nihil laboriosam consequatur!
      </div>
      <div className="nav">
        <button className="nav-button">all</button>
        <button className="nav-button">design</button>
        <button className="nav-button">Development</button>
        <button className="nav-button">Development</button>
        <button className="nav-button">Development</button>
        <button className="nav-button">Development</button>
      </div>
      <div className="grid-container img">
        <img src={image2} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image2} alt="image3" />
        <img src={image2} alt="image4" />
        <img src={image2} alt="image5" />
        <img src={image2} alt="image6" />
        <img src={image2} alt="image7" />
        <img src={image2} alt="image8" />
      </div>
      <div className="grid-button">
        <button className="grid-button-style">View All</button>
      </div>
      <div className="article2">
        <h2>SERVICE</h2>
        <div className="line"></div>
      </div>
      <div className="article2-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
        Dolore quae, inventore incidunt nihil laboriosam consequatur!
      </div>
      <div className="grid-container2">
        <img src={image3} alt="image1" />
        <img src={image1} alt="image2" />
        <img src={image2} alt="image3" />
      </div>
      <div className="maingrid-container">
        <div className="grid-container2-content">
          <h3>Auroville</h3>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            molestiae in aliquid voluptas vitae adipisci voluptate, vero
            aspernatur repellat! Culpa.
          </div>
        </div>
        <div className="grid-container2-content">
          <h3>Beach</h3>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            molestiae in aliquid voluptas vitae adipisci voluptate, vero
            aspernatur repellat! Culpa.
          </div>
        </div>
        <div className="grid-container2-content">
          <h3>Gandhi</h3>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            molestiae in aliquid voluptas vitae adipisci voluptate, vero
            aspernatur repellat! Culpa.
          </div>
        </div>
      </div>
      <div className="grid-container2">
        <img src={image3}alt="image1" />
        <img src={image1} alt="image2" />
        <img src={image2} alt="image3" />
      </div>
      <div className="maingrid-container">
        <div className="grid-container2-content">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            molestiae in aliquid voluptas vitae adipisci voluptate, vero
            aspernatur repellat! Culpa.
          </div>
        </div>
        <div className="grid-container2-content">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            molestiae in aliquid voluptas vitae adipisci voluptate, vero
            aspernatur repellat! Culpa.
          </div>
        </div>
        <div className="grid-container2-content">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            molestiae in aliquid voluptas vitae adipisci voluptate, vero
            aspernatur repellat! Culpa.
          </div>
        </div>
      </div>
      <div className="newsletter">
        <h3>Subscribe Newsletter</h3>
        <div style={{fontWeight: 'bold'}}>
          Enter Your email and we'll send you details about new courses and
          events
        </div>
      </div>
      <input type="Email" placeholder="Email" className="input" />
      <button className="input-button">Sign up Now</button>
    </div>
  )
}

export default App

