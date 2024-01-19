import { useRef } from "react";

const SubscribeForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentInput = inputRef.current.value;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        ref={inputRef}
        placeholder="Enter your email address"
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default SubscribeForm;
