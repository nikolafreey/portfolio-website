import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My purpose is to deliver best possible experience,
        <br /> startup idea to finished product, <br /> Let's create software
        that will make our day to day life a lil bit easier and more convinient.
        <br />
        We can also deliver something groundbreaking that will disrupt whole
        industry.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://www.linkedin.com/in/nikola-vukovic-556a911b9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0iswo6ngRAeyiID6vniYeg%3D%3D")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
