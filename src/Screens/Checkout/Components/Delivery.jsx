import { useNavigate } from "react-router-dom";

const DeliveryMethod = ({ setActiveStep }) => {
    const navigate = useNavigate();
  
    return (
      <div>
        <h2>Checkout - Step 2: Delivery Method</h2>



        {/* Card options here */}
        <button onClick={() => {
          setActiveStep(1);
          navigate('/checkout/details', { replace: true });  // Go back to step 1
        }}>
          Back
        </button>
        <button onClick={() => {
          setActiveStep(3);
          navigate('/checkout/payment', { replace: true });  // Go to step 3
        }}>
          Continue
        </button>
      </div>
    );
  };
export default DeliveryMethod  