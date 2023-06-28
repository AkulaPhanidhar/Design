import React from "react";
import "../App.css";

const Services = () => {
  return (
    <>
      <div className="services">
        <p className="title">Services</p>

        <div className="servicesBox">
          <p className="servicesTitle">Selection of Universities</p>
          <div className="servicesLine"></div>
          <p className="servicesDescription">
            Selection of Top Notch Universities for students with different
            kinds of backgrounds. Our Top Notch Universities provide the highest
            quality undergraduate and graduate programs which is inseparable
            from its mission of developing new Understandings through research
            and creativity. Irrespective of the student's background against
            academic & ETS scores we have something for everybody out here.
          </p>
          <button className="button">Know More</button>
        </div>

        <div className="servicesBox">
          <p className="servicesTitle">Documentation</p>
          <div className="servicesLine"></div>
          <p className="servicesDescription">
            Plays a very important role in obtaining your I 20 & Visa. You are
            advised to start your documentation well in advance because it takes
            a lot of preparation time & hard work for excellent presentation of
            your documents. How you present your documents is crucial & plays a
            vital role in attaining Scholarships, Admission & Visa. The Most
            important documents are the Official transcripts, Recommendation
            letters, Statement of Purpose & Bank Statements.
          </p>
          <button className="button">Know More</button>
        </div>

        <div className="servicesBox">
          <p className="servicesTitle">Scholarships</p>
          <div className="servicesLine"></div>
          <p className="servicesDescription">
            Everybody looks for scholarships to ease their pockets. There are
            many fields in which Scholarships are granted. You would again need
            to start you application on a first come first serve basis. Your
            Scholarships deadline differs from the admission deadline. The dead
            line for scholarships ends at least 3 to 4months prior to the
            admission deadlines. The most important is your Academics.
            Meritorious students are given preference for scholarships. Anything
            above 65% is good. If you are in your 4Th year of academics, give it
            your best shot and strive to get above 65%. In your GRE & TOFEL we
            would again stress on attaining excellent scores. You should score
            1,250+ in GRE with a verbal of 400 to 450+ If you are looking at
            some kind of Assistantship 450+ is advised. In TOFEL you should get
            above 90+, this proves your English proficiency. Taking the
            Academics & the ETS into consideration mould yourself to attain the
            required scores which will be beneficial for you.
          </p>
          <button className="button">Know More</button>
        </div>
      </div>
    </>
  );
};

export default Services;
