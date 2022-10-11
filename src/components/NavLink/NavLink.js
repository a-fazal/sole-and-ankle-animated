import React from "react";
import styled from "styled-components/macro";
import { QUERIES, WEIGHTS } from "../../constants";

const NavLink = ({ children, href }) => {
  return (
    <OuterWrapper>
      <Wrapper href={href}>{children}</Wrapper>
      <Inside href={href}>{children}</Inside>
    </OuterWrapper>
  );
};

const LinkStyled = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
`;

const Inside = styled(LinkStyled)`
  font-weight: ${WEIGHTS.bold};

  position: absolute;
  top: 0;
  left: 0;

  transition: transform 200ms;
  transform: translateY(20px);
`;

const Wrapper = styled(LinkStyled)`
  font-weight: ${WEIGHTS.medium};

  display: block;

  transition: transform 200ms;
`;

const OuterWrapper = styled.div`
  position: relative;
  overflow: hidden;
  &:first-of-type a {
    color: var(--color-secondary);
  }
  &:hover ${Inside} {
    transform: translateY(0px);
  }

  &:hover ${Wrapper} {
    transform: translateY(-20px);
  }
`;

export default NavLink;
