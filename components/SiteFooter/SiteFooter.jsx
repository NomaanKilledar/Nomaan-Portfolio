"use client";

import React from "react";

const Icon = ({ children }) => (
<svg
xmlns="http://www.w3.org/2000/svg"
width="20"
height="20"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
aria-hidden="true"

>

{children}

  </svg>
);

const GithubIcon = () => ( <Icon> <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> </Icon>
);


const TryHackMeIcon = () => (
  <img
    src="https://cdn.simpleicons.org/tryhackme/FFFFFF"
    alt=""
    width="22"
    height="22"
    aria-hidden="true"
    style={{
      display: "block",
      width: "22px",
      height: "22px",
      objectFit: "contain",
    }}
  />
);



const EmailIcon = () => ( <Icon> <rect x="3" y="5" width="18" height="14" rx="2" /> <path d="m3 7 9 6 9-6" /> </Icon>
);

const SiteFooter = () => {
const currentYear = new Date().getFullYear();

return ( <footer id="main-footer"> <div className="footer-top"> <div className="footer-brand"> <h1 className="f-logo">NOMAAN KILLEDAR</h1>

      <p className="f-desc">
        Building security tools and digital experiences.
        <br />
        Exploring code, systems, and cybersecurity.
      </p>

      <div className="f-socials">
        <a
          href="https://github.com/NomaanKilledar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
          title="GitHub"
        >
          <GithubIcon />
        </a>

        <a
          href="https://tryhackme.com/p/NomaanKilledar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit TryHackMe profile"
          title="TryHackMe"
        >
          <TryHackMeIcon />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to= nomaankilledar08%40gmail.com"
          aria-label="Email Nomaan"
          title="Email"
        >
          <EmailIcon />
        </a>
      </div>
    </div>

    <div className="footer-links">
      <div className="f-col">
        <h3>EXPLORE</h3>
        <a href="#projects-section">Projects</a>
        <a href="#about">About</a>
        <a href="#contact-section">Connect</a>
      </div>

      <div className="f-col">
        <h3>CONNECTS</h3>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to= nomaankilledar08%40gmail.com">
          nomaankilledar08@gmail.com
        </a>

        <a
          href="https://github.com/NomaanKilledar"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>

        <a
          href="https://tryhackme.com/p/NomaanKilledar"
          target="_blank"
          rel="noopener noreferrer"
        >
          TryHackMe Profile
        </a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {currentYear} Nomaan Killedar. All rights reserved.</p>
    <p>Built by Nomaan</p>
  </div>
</footer>

);
};

export default SiteFooter;
