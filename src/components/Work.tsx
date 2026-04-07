import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useState, useEffect } from "react";

const Work = () => {
  const [currentProject, setCurrentProject] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Click Cart E-Commerce",
      category: "Full Stack Application",
      tools: "React, Node.js, MongoDB, Stripe API",
      image: "/images/mongo.webp",
      link: "https://click-cart-frontend-vert.vercel.app/"
    },
    {
      id: 2,
      title: "Bookstore Management",
      category: "Full Stack Application",
      tools: "Node.js, Express.js, MongoDB, EJS, CRUD Operations",
      image: "/images/express.webp",
      link: "https://bookstoreappmern.netlify.app/"
    },
    {
      id: 3,
      title: "REST API Project",
      category: "Backend Service",
      tools: "Node.js, Express.js, MongoDB, JWT Authentication",
      image: "/images/node.webp",
      link: "https://restapi-project.netlify.app/"
    },
    {
      id: 4,
      title: "Fascinating Dango",
      category: "Web Application",
      tools: "React, Modern UI, Responsive Design",
      image: "/images/react.webp",
      link: "https://fascinating-dango-3bfb52.netlify.app/"
    },
    {
      id: 5,
      title: "Power Health Gym",
      category: "Fitness Website",
      tools: "React, Tailwind CSS, WhatsApp Integration",
      image: "/images/javascript.webp",
      link: "https://github.com/princeKumar7714/power-health-gym"
    },
    {
      id: 6,
      title: "Geetashakti Cancer Care",
      category: "Non-Profit Foundation",
      tools: "React, Modern UI, Community Services",
      image: "https://geetashakti.org/favicon.png",
      link: "https://geetashakti.org"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => Math.min(prev + 2, projects.length - 2));
  };

  const prevProject = () => {
    setCurrentProject((prev) => Math.max(prev - 2, 0));
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextProject();
      } else if (e.key === 'ArrowLeft') {
        prevProject();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        
        <div className="project-navigation">
          <button 
            className="nav-btn prev-btn" 
            onClick={prevProject}
            disabled={currentProject === 0}
          >
            Previous
          </button>
          
          <div className="project-indicators">
            {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === Math.floor(currentProject / 2) ? 'active' : ''}`}
                onClick={() => setCurrentProject(index * 2)}
              />
            ))}
          </div>
          
          <button 
            className="nav-btn next-btn" 
            onClick={nextProject}
            disabled={currentProject >= projects.length - 2}
          >
            Next
          </button>
        </div>

        <div className="work-slider">
          <div className="work-flex" style={{ transform: `translateX(-${currentProject * 370}px)` }}>
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`work-box ${project.id >= currentProject + 1 && project.id <= currentProject + 2 ? 'active' : ''}`}
              >
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{project.id}</h3>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p>{project.tools}</p>
                  <a 
                    href={project.link}
                    target="_blank"
                    className="project-link"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
                <WorkImage image={project.image} alt={project.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
