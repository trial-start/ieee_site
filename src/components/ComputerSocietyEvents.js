import React from "react";

const ComputerSocietyEvents = () => {
  const computerSocietyEvent = {
    date: "25/11/2023",
    images: ["cseve1.jpg", "cseve2.jpg", "cseve3.jpg"],
    description: "Explore the intricacies of data science through our exclusive workshop, Data Science Lifecycle: A Case Study Approach, hosted by the IT department and organized by IEEE CBIT's Computer Society in collaboration with EdSoc and Women in Engineering. Led by the accomplished Data Science expert Pranali Bose, with over 6 years of proficiency in Python, SQL, and data science. Participants delved into hands-on activities covering the entire data science lifecycle. From backend development to crafting impactful data visualizations, Pranali's guidance ensured a comprehensive learning experience. Participants engaged in real-world case studies, showcasing adaptability and a commitment to excellence on November 25 at Chaitanya Bharathi Institute of Technology.",
  };

  return (
    <div className="computer-society-events">
      <div className="event" style={{ textAlign: "justify" }}>
        <h3 style={{marginBottom: "10px", textAlign: "center"}}>Data Science Workshop</h3>
        <p style={{fontWeight:"bold"}}>Date: {computerSocietyEvent.date}</p>
        <p>{computerSocietyEvent.description}</p>
        <div
          className="event-images"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {computerSocietyEvent.images.map((image, index) => (
            <img
              key={index}
              src={`images/${image}`}
              alt={`Event ${index + 1}`}
              style={{ marginRight: "10px", width: "400px", height: "400px" }} // Adjust the margin as needed
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComputerSocietyEvents;

