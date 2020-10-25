import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <header
      css={css`
        display: flex;
        align-items: center;

        min-height: 10vh;
        background-color: darkblue;
      `}
    >
      <div>
        <img src="/static/img/logo.png" alt="Logo Square" />
        <h1>
          s<span>quare</span>
        </h1>
      </div>
      <div>
        <p>Hora</p>
        <p>Fecha</p>
        <img src="static/img/SVG/clock.svg" />
      </div>
    </header>
  );
};

export default Header;
