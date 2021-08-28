import React from "react";
import { DiLaravel, DiReact, DiDatabase } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies as Full-Stack Developer, focused
      mostly on Laravel and NodeJS on the Backend and React and NextJS on
      Frontend also experienced with Database Design.
      <br />I have experience with Payment Processing Systems and Fintech
      companies in general and I`m also architecting entire solutions from
      ground up (Database to Frontend).
      <br />
      I'm familiar and experienced with technologies like Reverse Proxies(Nginx
      and Apache), WebSockets, Credit Card Protocols, , Stripe, KeepAlived and
      Virtual IP High Availability, Redis Caching and many more...
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Javascript
            <br />
            React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiLaravel size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Laravel
            <br /> NodeJS
            <br /> .Net Core
            <br /> MySQL
            <br /> PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Code Architecture</ListTitle>
          <ListParagraph>
            Load Balancers
            <br /> High Availability
            <br />
            Reverse Proxies (Nginx & Apache)
            <br /> Redis Caching
            <br />
            Database Design
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
