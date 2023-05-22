/* eslint-disable object-property-newline */
import { css } from "@emotion/css";

import type {
  ForsizeConfig,
  FlexConfig,
  GridConfig,
  TextConfig,
  ContentConfig,
  BgimageConfig,
  BorderGradientConfig,
  SubtitleConfig,
  ParagraphConfig,
} from "@typing/globals/styles";

import { medias } from "./vars";

export const forsize = ({ size, content }: ForsizeConfig) => (medias[size] ? css`
  @media screen and (${medias[size]}) {
    ${content}
  }
` : "");

export const flex = ({ justify, gap, align = "center" }: FlexConfig) => {
  const gapContent = gap ? `gap: ${gap};` : "";
  const alignContent = align ? `align-items: ${align};` : "";

  return css`
    display: flex;
    justify-content: ${justify};
    ${gapContent}
    ${alignContent}
  `;
};

export const grid = ({ columns, gap, areas }: GridConfig) => {
  const gapContent = gap ? `gap: ${gap};` : "";
  const areasContent = areas ? `grid-template-areas: ${areas};` : "";

  return css`
    display: grid;
    grid-template-columns: ${columns};
    ${areasContent}
    ${gapContent}
  `;
};

export const text = ({ size, weight, height, align }: TextConfig) => {
  const fontWeight = weight ? `font-weight: ${weight};` : "";
  const lineHeightContent = height ? `line-height: ${height}rem;` : "";
  const textAlign = align ? `text-align: ${align};` : "";

  return css`
    font-style: normal;
    font-size: ${size}rem;
    ${fontWeight}
    ${lineHeightContent}
    ${textAlign}
  `;
};

export const content = ({ width = "1500px", padding = "0 16px", margin = "0 auto" }: ContentConfig) => css`
  display: block;
  width: 100%;
  max-width: ${width};
  margin: ${margin};
  padding: ${padding};
`;

export const bgimage = ({ image, color, size = "cover", position = "center" }: BgimageConfig) => {
  const background = color
    ? `background: url(${image}), ${color};`
    : `background-image: url(${image});`;

  return css`
    ${background}
    background-size: ${size};
    background-position: ${position};
    background-repeat: no-repeat;
  `;
};

export const bordergradient = ({ size = "2px", bg = "var(--bg-box-color)" }: BorderGradientConfig = {}) => css`
  background-image: linear-gradient(${bg}, ${bg}), var(--gradient);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border: ${size} solid transparent;
`;

export const textgradient = () => css`
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const title = (align?: TextConfig["align"]) => css`
  ${text({ size: 7, weight: 700, height: 8.5, align })}
  ${forsize({ size: "desktop-mid", content: css`
  font-size: 6.4rem;
  line-height: 7.8rem;
  ` })}
  ${forsize({ size: "desktop", content: css`
  font-size: 5.8rem;
  line-height: 7.2rem;
  ` })}
  ${forsize({ size: "tablet-landscape", content: css`
  font-size: 5.2rem;
  line-height: 6.6rem;
  ` })}
  ${forsize({ size: "tablet-portrait", content: css`
  font-size: 4.6rem;
  line-height: 6rem;
  ` })}
  ${forsize({ size: "tablet-small", content: css`
  font-size: 4rem;
  line-height: 5.4rem;
  ` })}
  ${forsize({ size: "phone-xbig", content: css`
  font-size: 3.4rem;
  line-height: 4.8rem;
  ` })}
  ${forsize({ size: "phone-big", content: css`
  font-size: 3.8rem;
  line-height: 4.2rem;
  ` })}
  ${forsize({ size: "phone-mid", content: css`
  font-size: 3.2rem;
  line-height: 3.6rem;
  ` })}
  ${forsize({ size: "phone", content: css`
  font-size: 2.6rem;
  line-height: 3rem;
  ` })}
`;

export const subtitle = ({ gradient, align, height = "big" }: SubtitleConfig = {}) => {
  const isNormal = height === "normal";
  const heightConfig = isNormal ? 4.5 : 5.8;
  const heightCustom = height !== "normal" && height !== "big";

  return css`
    ${gradient ? textgradient() : ""}
    ${text({ size: 4, weight: 700, height: heightCustom ? height : heightConfig, align })}
    ${forsize({ size: "desktop", content: css`
    font-size: 3.8rem;
    line-height: ${isNormal ? "3.1rem" : "4.6rem"};
    ` })}
    ${forsize({ size: "tablet-landscape", content: css`
    font-size: 3.4rem;
    line-height: ${isNormal ? "2.8rem" : "4.2rem"};
    ` })}
    ${forsize({ size: "tablet-portrait", content: css`
    font-size: 3rem;
    line-height: ${isNormal ? "2.4rem" : "3.8rem"};
    ` })}
    ${forsize({ size: "tablet-small", content: css`
    font-size: 2.8rem;
    line-height: ${isNormal ? "2.4rem" : "3.6rem"};
    ` })}
    ${forsize({ size: "phone-xbig", content: css`
    font-size: 2.6rem;
    line-height: ${isNormal ? "2.4rem" : "3.2rem"};
    ` })}
    ${forsize({ size: "phone-big", content: css`
    font-size: 2.4rem;
    line-height: ${isNormal ? "2.2rem" : "3rem"};
    ` })}
    ${forsize({ size: "phone-mid", content: css`
    font-size: 2.2rem;
    line-height: ${isNormal ? "2rem" : "2.8rem"};
    ` })}
    ${forsize({ size: "phone", content: css`
    font-size: 2rem;
    line-height: ${isNormal ? "1.8rem" : "2.6rem"};
    ` })}
  `;
};

export const paragraph = ({ align, height = "normal", size = "normal", ...config }: ParagraphConfig = {}) => {
  const isHeightNormal = height === "normal";
  const isSizeNormal = size === "normal";
  const heightConfig = isHeightNormal ? 2.5 : 3.3;
  const heightCustom = height !== "normal" && height !== "big";
  const sizeConfig = isSizeNormal ? 1.8 : 1.5;

  return css`
    ${config.gradient ? textgradient() : ""}
    ${text({ size: sizeConfig, weight: config.bold ? 700 : 400, height: heightCustom ? height : heightConfig, align })}
    ${config.upper ? "text-transform: uppercase;" : ""}
    ${forsize({ size: "tablet-small", content: css`
    font-size: ${isSizeNormal ? "1.6rem" : "1.2rem"};
    line-height: ${isHeightNormal ? "2.2rem" : "3rem"};
    ` })}
  `;
};
