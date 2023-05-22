import { css } from "@emotion/css";
import posterImg from '../../../../assets/ironman.webp';

export const bgSizeCover = css`
  background-image: url(${posterImg});
  background-size: 250px 350px;
  width: 250px;
  height: 350px;
  border: 2px solid;
  color: lightgreen;
  overflow: hidden;
  border-radius: 20px;

  -webkit-box-shadow: inset 10px 12px 20px 9px rgba(97,97,97,1);
  -moz-box-shadow: inset 10px 12px 20px 9px rgba(97,97,97,1);
  box-shadow: 10px 12px 20px 9px rgba(85, 85, 85, 0.422);
  `;

export const fullScreenDesktop = css`
  width: 300px;
`;