import React from "react";

const Inputfield = ({
  Labelname,
  type,
  placeholder,
  labelstyle,
  inputStyle,
  divstyle,
  name,
  htmlFor,
  id,
  onChange,
  values,
  errors,
  touched,
  disabled,
  maxLength,
  pattern,
  innerDiv,
  leadingImage, 
  imageStyle, 
}) => {
  return (
    <div className={divstyle}>
      {Labelname && (
        <label htmlFor={htmlFor} className={labelstyle}>
          {Labelname}
        </label>
      )}
      <div className={`flex items-center  ${innerDiv}`}>
        {leadingImage && (
          <img src={leadingImage} alt="" className={imageStyle} />
        )}
        <input
          id={id}
          name={name}
          onChange={onChange}
          value={values}
          className={`placeholder-[#A0A4AC]  focus:outline-none ${inputStyle} ${
            leadingImage ? "pl-1" : ""
          }`} // Adds padding if image is present
          type={type}
          maxLength={maxLength}
          pattern={pattern}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete="off"
        />
      </div>
      {errors && touched && (
        <div className="text-end my-1 lg:text-sm md:text-xs text-[10px] text-red-500">
          {errors}
        </div>
      )}
    </div>
  );
};

export default Inputfield;
