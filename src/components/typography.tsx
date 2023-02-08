import { FC } from "react";
import { TypographyProps } from "../general/interfaces";
import { Black87 } from "../helpers/colours";
import styles from "./../styles/components/typography.module.css";

const Typography: FC<TypographyProps> = ({
  text,
  appearance = "value600",
  className,
  color = Black87,
}): JSX.Element => (
  <div className={`${styles[appearance]} ${className}`} style={{ color }}>
    {text}
  </div>
);

export default Typography;
