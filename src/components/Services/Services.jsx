import { useState } from "react";
import arrow_icon from "../../assets/arrow-right.svg";
import Services_Data from "../../assets/Services_Data.js";
import "./Services.css";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleReadMore = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <div className="underline"></div>
      </div>
      <div className="services-container">
        {Services_Data.map((service) => (
          <div
            key={service.s_no}
            className="services-format"
            onClick={() => handleReadMore(service)}
          >
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_description}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="arrow" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="services-modal">
          <div className="services-modal-content">
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedService.s_name}</h2>
            <p>{selectedService.s_description}</p>
            <p>
              <strong>More Details:</strong> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque volutpat justo ut metus
              ultricies, non tincidunt lorem cursus.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
