import cx from "classnames";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = (props) => {
    const { type, name, placeholder, label, classNames, error, errorMessage, ...inputProps } = props;
    
  return (
    <label className={cx("form-item", classNames, { "has-validation": error })}>
      <p className={"form-label"}>{label}</p>
      <input  className={"form-control"} type={type} name={name} placeholder={placeholder} {...inputProps}/>
      {error && <p className={"error-message"}> {errorMessage} </p>}
    </label>
  );
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Input;
