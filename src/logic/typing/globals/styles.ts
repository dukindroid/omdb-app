type Width = `${"max" | "min"}-width: ${number}px`;
type SpaceDouble = `${Space} ${Space}`;
type SpaceTriple = `${Space} ${Space} ${Space}`;
type SpaceQuarter = `${SpaceDouble} ${SpaceDouble}`;
type SpaceBox = Space | SpaceDouble | SpaceTriple | SpaceQuarter;
type Gap = Space | SpaceDouble;
type PositionImage = "bottom"
| "center"
| "inherit"
| "initial"
| "left"
| "right"
| "top"
| "revert"
| "unset";

export type Query = `(${Width})`;
export type Space = `${number}${"px" | "%"}` | "0" | "auto";
export type Size = Space | "max-content" | "min-content" | "fit-content";
export type TextAlign = "center"
| "end"
| "inherit"
| "initial"
| "justify"
| "left"
| "revert"
| "right"
| "start"
| "unset";

export type Devices = "phone"
| "phone-mid"
| "phone-big"
| "phone-xbig"
| "tablet-small"
| "tablet-portrait"
| "tablet-landscape"
| "desktop"
| "desktop-mid"
| "desktop-big"
| "desktop-xbig"
| "tv-small"
| "tv-4k";

export type Medias = {
  [key in Devices]: Width | `${number}px <= width <= ${number}px`;
};
export interface ForsizeConfig {
  size: Devices;
  content: string;
}

export interface FlexConfig {
  justify: "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "inherit"
  | "initial"
  | "left"
  | "normal"
  | "revert"
  | "right"
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "start"
  | "stretch"
  | "unset";
  gap?: Gap;
  align?: "baseline"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "inherit"
  | "initial"
  | "normal"
  | "revert"
  | "self-end"
  | "self-start"
  | "start"
  | "stretch"
  | "unset";
}

export interface GridConfig {
  columns: string;
  gap?: Gap;
  areas?: string;
}

export type Weight = 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| "bold"
| "bolder"
| "lighter"
| "normal";

export interface TextConfig {
  size: number;
  weight?: Weight;
  height?: number;
  align?: TextAlign;
}

export interface ContentConfig {
  width?: Space;
  padding?: SpaceBox;
  margin?: SpaceBox;
}

export interface BgimageConfig {
  image: string;
  color?: string;
  size?: `${Space | SpaceDouble | "cover" | "contain"}`;
  position?: PositionImage | `${PositionImage} ${PositionImage}` | Space | SpaceDouble;
}

export interface BorderGradientConfig {
  size?: Space;
  bg?: string;
}

export interface SubtitleConfig {
  align?: TextConfig["align"];
  gradient?: boolean;
  height?: "normal" | "big" | TextConfig["height"];
}

export interface ParagraphConfig extends SubtitleConfig {
  bold?: boolean;
  upper?: boolean;
  size?: "small" | "normal";
}
