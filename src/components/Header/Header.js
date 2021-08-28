import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/nikolafreey">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/nikola-vukovic-556a911b9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0iswo6ngRAeyiID6vniYeg%3D%3D">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/nikolafreey">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:nikolav54@gmail.com">
        <Div1>
          <AiFillMail size="3rem" />
          <span style={{ marginLeft: "20px", paddingTop: "5px" }}>
            nikolav54@gmail.com
          </span>
        </Div1>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
