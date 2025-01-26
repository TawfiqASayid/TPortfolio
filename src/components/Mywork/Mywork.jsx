
import arrow_icon from '../../assets/arrow-right.svg';
import github_icon from '../../assets/github_icon.png'; // Add your GitHub icon asset
import underline_img from '../../assets/horizontal-line_icon.png';
import mywork_data from '../../assets/MyWork_data';
import './Mywork.css';

const Mywork = ({ theme = 'light-theme' }) => {
  return (
    <section id="portfolio" className={`mywork ${theme}`}>
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={underline_img} alt="Underline Decoration" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="project-card">
            <img src={work.w_img} alt={work.w_name} loading="lazy" />
            <a
              href={work.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon"
              title={`View ${work.w_name} on GitHub`}
            >
              <img src={github_icon} alt="GitHub Icon" />
            </a>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Go for more" />
      </div>
    </section>
  );
};

export default Mywork;
