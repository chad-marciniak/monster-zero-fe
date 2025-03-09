import PropTypes from "prop-types";
import "./index.scss";

type LogoProps = {
  size: string;
  primaryColor: string;
  backgroundColor: string;
};
export const Logo = ({ size, primaryColor, backgroundColor }: LogoProps) => (
  <div
    className={`logo-container flex flex-col logo default ${size} ${primaryColor} ${backgroundColor}`}
  >
    <div className="flex logo-text">M0NSTER</div>
    <div className="flex self-end relative logo-text">ZER0</div>
    <div className="text-xs pt-2 pb-2 self-end">Programming Technology Art</div>
  </div>
);

Logo.propTypes = {
  size: PropTypes.string, // size will be deligated by window size?
  primaryColor: PropTypes.string, // text color
  backgroundColor: PropTypes.string, // drop shadow params
};

Logo.defaultProps = {
  size: "text-6xl",
  primaryColor: "",
  backgroundColor: "",
};
