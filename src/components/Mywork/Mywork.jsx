import { useState } from 'react';
import arrow_icon from '../../assets/arrow-right.svg';
import github_icon from '../../assets/github_icon.png';
import mywork_data from '../../assets/MyWork_data';
import './Mywork.css';

const Mywork = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const categories = ['All', ...new Set(mywork_data.map(work => work.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = mywork_data.filter(
    (work) => selectedCategory === 'All' || work.category === selectedCategory
  );

  const handleShowMore = () => {
    setVisibleProjects((prevCount) => prevCount + 6);
  };

  return (
    <div id="Projects" className="mywork">
      {/* Page Title */}
      <div className="mywork-title">
        <h1>Projects</h1>
      </div>

      {/* Filter Buttons */}
      <div className="filter-container">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
            aria-label={`Filter by ${category}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <section className="mywork-container">
        {filteredProjects.slice(0, visibleProjects).map((work, index) => (
          <div key={index} className="project-card">
            <img src={work.w_img} alt={work.w_name} loading="lazy" />
            <div className="project-info">
              <h3>{work.w_name}</h3>
              <p>{work.description}</p>
            </div>
            <a
              href={work.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon"
              aria-label={`View ${work.w_name} on GitHub`}
            >
              <img src={github_icon} alt="GitHub Icon" />
            </a>
          </div>
        ))}
      </section>

      {/* Show More Button */}
      {visibleProjects < filteredProjects.length && (
        <div
          className="mywork-showmore"
          onClick={handleShowMore}
          title="Load more projects"
          tabIndex={0}
          role="button"
          aria-label="Show more projects"
        >
          <p>Show More</p>
          <img src={arrow_icon} alt="Arrow Icon" className="arrow-icon" />
        </div>
      )}
    </div>
  );
};

export default Mywork;
