import React from "react";

const SERVICES = [
{
title: "Python Development",
body: "Building Python applications and command-line tools with a focus on practical functionality and clean code.",
},
{
title: "Cybersecurity",
body: "Exploring network analysis, DNS utilities, port and service inspection, and security-focused tools for authorized testing.",
},
{
title: "Web Development",
body: "Creating and customizing modern websites with responsive layouts, interactive components, and animation.",
},
{
title: "Automation",
body: "Developing tools and workflows that simplify repetitive tasks and improve everyday processes.",
},
];

const SubHeader = () => {
return ( <div className="relative z-20 w-full min-w-0 px-5 md:px-0"> <div className="w-full text-base leading-relaxed md:text-lg"> <p>
Nomaan Killedar is a developer interested in Python, cybersecurity,
and building practical software projects. </p>

    <p className="mt-4">
      From the NEXUS security utility suite to the BLACKBOX Discord bot,
      I enjoy exploring new technologies and turning ideas into working
      applications.
    </p>
  </div>

  <section className="about-inline-services mt-8 w-full md:mt-10">
    <div className="about-inline-services__head">
      <span className="about-inline-services__label">
        INTERESTS &amp; SKILLS
      </span>
    </div>

    <div className="about-inline-services__grid">
      {SERVICES.map((service) => (
        <article
          key={service.title}
          className="about-inline-services__item"
        >
          <h4>{service.title}</h4>
          <p>{service.body}</p>
        </article>
      ))}
    </div>
  </section>
</div>

);
};

export default SubHeader;
