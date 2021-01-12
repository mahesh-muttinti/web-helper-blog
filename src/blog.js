import React from 'react';
import avatar from './assets/avatar.jpg';
import mernstack from './assets/mernstack.jpg';
import meanstack from './assets/meanstack.jpg';
import pyjango from './assets/pyjango.png';
import './index.css';

const courses = [
  {
    id: 1,
    name: "MERN Stack",
    img: mernstack
  },
  {
    id: 2,
    name: "MEAN Stack",
    img: meanstack
  },
  {
    id: 3,
    name: "Pyjango Stack",
    img: pyjango
  }
]

function Header() {
  return (
      <header>
        <h1 className="main-heading">Mahesh Muttinti</h1>
        <img src={avatar} alt="avatar" />
      </header>
    );
}

function Menu() {
  return (
    <div className="menu-container">
      <ul className="menu">
        <li>Home</li>
        <li>Signin</li>
        <li>Signup</li>
        <li>About</li>
      </ul>
    </div>
  );
}

function Courses() {
  return (
      <section className="course-list">
        {courses.map((course) => {
          return (
            <Course key={course.id} {...course} />
          )
        })}
      </section>
    );
}

const Course = (props) => {
  const { name, img } = props
  return (
      <div className="card">
        <img src={img} alt='' />
        <h2>{name}</h2>
      </div>
  );
}

function Article() {
  return (
    <article>
      <Courses />
    </article>
  );
}
function Footer() {
  return (
    <footer>
      <h4>Follow me on:</h4>
      <div class="container social-media-icon-container">
          <p>facebook</p>
          <p>twitter</p>
          <p>github</p>
      </div>
    </footer>
  );
}

function Blog() {
  return (
    <div className="root">
      <Header />
      <Menu />
      <Article />
      <Footer />
    </div>
  );
}

export default Blog;
