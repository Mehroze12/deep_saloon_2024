import { useNavigate } from "react-router-dom";

const Payment = ({ setActiveStep }) => {
    const navigate = useNavigate();
  
    return (
      <div>
        <h2>Checkout - Step 3: Payment</h2>
        {/* Payment confirmation form */}
        <button onClick={() => {
          setActiveStep(2);  // Set active step to 2 for going back to DeliveryMethod
          navigate('/checkout/method', { replace: true });  // Go back to step 2
        }}>
          Back
        </button>
        <button onClick={() => alert('Checkout Complete!')}>
          Confirm
        </button>
      </div>
    );
  };
  export default Payment