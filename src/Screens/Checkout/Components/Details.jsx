import { useNavigate } from "react-router-dom";
import Inputfield from "../../../Components/Inputfield";
import Button from "../../../Components/Button";

const DeliveryDetails = ({ setActiveStep }) => {
  const navigate = useNavigate();

  return (
    <div >
      <Inputfield
        divstyle="mt-7 "
        Labelname="First Name*"
        labelstyle="text-lableColor"
        innerDiv="border-[1px] border-lableColor w-full text-white mt-2"
        inputStyle="w-full px-5 py-3 bg-transparent "
        type="email"
        placeholder="Enter First Name"
        name="email"
      />

      <Inputfield
        divstyle="mt-7 "
        Labelname="Last Name*"
        labelstyle="text-lableColor"
        innerDiv="border-[1px] border-lableColor w-full text-white mt-2"
        inputStyle="w-full px-5 py-3 bg-transparent "
        type="email"
        placeholder="Enter Last Name"
        name="email"
      />
      <Inputfield
        divstyle="mt-7 "
        Labelname="Country/Region*"
        labelstyle="text-lableColor"
        innerDiv="border-[1px] border-lableColor w-full text-white mt-2"
        inputStyle="w-full px-5 py-3 bg-transparent "
        type="email"
        placeholder="Enter Country"
        name="email"
      />
      <Inputfield
        divstyle="mt-7 "
        Labelname="Address*"
        labelstyle="text-lableColor"
        innerDiv="border-[1px] border-lableColor w-full text-white mt-2"
        inputStyle="w-full px-5 py-3 bg-transparent "
        type="email"
        placeholder="Enter Address"
        name="email"
      />
      <div className="w-full flex justify-between gap-5">
        <Inputfield
          divstyle="mt-7 w-full"
          Labelname="City*"
          labelstyle="text-lableColor"
          innerDiv="border-[1px] border-lableColor w-full text-white mt-2"
          inputStyle=" px-5 py-3 bg-transparent "
          type="email"
          placeholder="Enter City"
          name="email"
        />

      </div>
      <div className="w-full flex justify-between gap-5">
        <Inputfield
          divstyle="mt-7 w-full"
          Labelname="State*"
          labelstyle="text-lableColor"
          innerDiv="border-[1px] border-lableColor w-full text-white mt-2"
          inputStyle=" px-5 py-3 bg-transparent "
          type="email"
          placeholder="Enter State"
          name="email"
        />
        <Inputfield
          divstyle="mt-7 w-full"
          Labelname="Zip/Postal Code*"
          labelstyle="text-lableColor"
          innerDiv="border-[1px] border-lableColor w-full text-white mt-2"
          inputStyle=" px-5 py-3 bg-transparent "
          type="email"
          placeholder="Enter Zip/Postal Code"
          name="email"
        />
      </div>
      <Button
        divstyle="w-full mt-10 text-gray bg-primaryColor font-medium lg:py-3 py-2 text-text6"
        btnname="Save and Continue"
        type="submit"
        onPress={() => {
          setActiveStep(2);
          navigate('/checkout/method', { replace: true });
        }}
      />

    </div>
  );
};

export default DeliveryDetails