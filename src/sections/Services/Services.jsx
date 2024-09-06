import React ,{useState} from "react";
import "./Services.css";
import Services_Data from "../../assets/services_data";
import arrow from "../../assets/arrow.png";
import up_arrow from "../../assets/up_arrow.png";

const Services = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          const isExpanded = expanded[index];
          const shortDesc = service.s_desc.substring(0, 100) + "...";

          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{isExpanded ? service.s_desc : shortDesc}</p>
              <div className="services-readmore"  onClick={() => toggleExpand(index)}>
              <p>{isExpanded ? "Read Less" : "Read More"}</p>
             <img src= {isExpanded? up_arrow:arrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
