import React from "react";
import NavBar from "./NavBar";
import CoreTeam from "./CoreTeam";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Events from "./Events";

const SignalProcessingSociety = ({ imgs, num }) => {
  return (
    <div>
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Signal Processing Society</h2>
        <Carousel val="x" imgs={imgs} />
        <p className="section-description">
          Founded as IEEE’s first society in 1948, the Signal Processing Society is the world’s premier association for signal processing engineers and industry professionals. Engineers around the world look to the Society for information on the latest developments in the signal processing field. Its deeply rooted history spans 75 years, featuring a membership base of more than 20,000 deeply interested and involved signal processing engineers, academics, industry professionals and students who are all part of a dynamic global community – spanning 120 countries worldwide.

The Society organizes numerous conferences around the world every year, focusing on the innovations shaping the future of signal processing and the future of our world.

Members have opportunities to be involved in boards and committees, and at the local level members are actively immersed in regional chapters, working on issues and projects that shape what’s next in signal processing. The Society also oversees publication of numerous periodicals, including the IEEE Signal Processing Magazine and the Inside Signal Processing eNewsletter.
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading">Team</h2>
        <p className="section-description">
          Meet the dedicated members of our Signal Processing Society's Team.
        </p>
        <CoreTeam num={num} />
      </section>
      <section className="core-team-section" id="events">
        <h2 className="section-heading">Events</h2>
        <p className="section-description">Check out our past events.</p>
        <Events by="signal processing society" />
      </section>
      <Footer />
    </div>
  );
};

export default SignalProcessingSociety;
