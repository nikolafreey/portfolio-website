import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { Div1 } from "../Header/HeaderStyles";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+381646486607">+381646486607</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:nikolav54@gmail.com">
            nikolav54@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Github</LinkTitle>
          <LinkItem href="https://github.com/nikolafreey">
            Personal GitHub
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Docker Hub</LinkTitle>
          <LinkItem href="https://hub.docker.com/u/nikolav54">
            Personal Docker Hub
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Engineering software that moves the world forward!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/nikolafreey">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/nikola-vukovic-556a911b9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0iswo6ngRAeyiID6vniYeg%3D%3D">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="mailto:nikolav54@gmail.com">
            <Div1>
              <AiFillMail size="3rem" />
              <span
                style={{
                  marginLeft: "20px",
                  paddingTop: "5px",
                }}
              >
                nikolav54@gmail.com
              </span>
            </Div1>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
