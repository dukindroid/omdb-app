import { css } from "@emotion/css";
import { text } from "@mixins";

export const label = css`
  background-color: #006ace;
  border-color: blue;
  padding: 16px;
  margin: 10px;
  border-radius: 30px;
  filter: drop-shadow(3px -3px 5px #7c7c7c);
`;

export const iconContainer = css`
  position:relative;
`;
// margin:20px;

export const input = css`
  position: relative;
  border-radius: 20px;
  background-color: #fff;
  padding: 10px; 
  display: inline-block;  
  width: 300px;
  height: 40px;
  outline: 2px inset #0059ff; 
  left: 13px;
`;

export const svg = css`
  position: absolute;
  display:inline-block;
  width: 30px;
  height:30px;
  left:360px;
  top:3px;
  background: transparent;
  filter: drop-shadow(3px 3px 2px #111111);
}`;