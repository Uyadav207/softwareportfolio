import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Section,
  Animation,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Utkarsh Yadav Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me. 😀" />
        <InterestsSection sectionId="details" heading="Skills. 👨🏻‍💻" />
        <ProjectsSection sectionId="Projects" heading="Projects. 🪓" />
        <ContactSection sectionId="contact" heading="Contact. 📬" />
      </Page>
    </>
  );
}
