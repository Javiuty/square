import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Title = styled.h1`
  font-size: 6rem;
  color: var(--color-tertiary);
  text-transform: uppercase;
`;

const TitleSpan = styled.span`
  color: #fff;
  font-size: 4rem;
`;

const Logo = styled.img`
  width: 8rem;
  height: 8rem;
`;

const Header = () => {
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;

        min-height: 7vh;
        background-color: var(--color-primary);
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Logo src="/static/img/logo.png" alt="Logo Square" />
        <Title>
          s<TitleSpan>quare</TitleSpan>
        </Title>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 7rem);
          grid-template-rows: 5rem;
        `}
      >
        <p>Hora</p>
        <p>Fecha</p>
        <FontAwesomeIcon
          css={css`
            font-size: 3rem;
            color: var(--color-tertiary);
          `}
          icon={faClock}
        />
      </div>
    </header>
  );
};

export default Header;
