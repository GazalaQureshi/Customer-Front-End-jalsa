import React ,{useRef} from 'react'

const Enterotp = () => {

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  // const handleInputChange = (ref, event) => {
  //   if (event.target.value.length === 1) {
  //     if (ref.current.nextSibling) {
  //       ref.current.nextSibling.focus(); // Move focus to the next input
  //     } else {
  //       ref.current.blur(); // Remove focus from the last input
  //     }
  //   }
  // };
  const handleInputChange = (ref, event) => {
    const inputValue = event.target.value;
    const numericValue = parseInt(inputValue);

    if (!Number.isNaN(numericValue)) {
      ref.current.value = numericValue; // Update the input value to the numeric value
    } else {
      ref.current.value = ''; // Clear the input value if it is not a valid integer
    }

    if (inputValue.length === 1) {
      if (ref.current.nextSibling) {
        ref.current.nextSibling.focus(); // Move focus to the next input
      } else {
        ref.current.blur(); // Remove focus from the last input
      }
    }
  };

  return (
    <div className='otp'>
      <div className='otp-container'>
        <h1 className='otp-title'>Forget your password?</h1>
        <p className="otp-text">code has been sent to 91***********99</p>
        <div className="otp-inputs">
          <input type="text" className='otp-input' maxLength={1} ref={inputRef1} onInput={(event) => handleInputChange(inputRef1, event)}/>
          <input type="text" className='otp-input' maxLength={1} ref={inputRef2} onInput={(event) => handleInputChange(inputRef2, event)}/>
          <input type="text" className='otp-input' maxLength={1} ref={inputRef3} onInput={(event) => handleInputChange(inputRef3, event)}/>
          <input type="text" className='otp-input' maxLength={1} ref={inputRef4} onInput={(event) => handleInputChange(inputRef4, event)}/>
        </div>
        <p className='otp-text'>resent code in 55s</p>
        <button className='otp-btn'>VERIFY</button>
      </div>
    </div>
  )
}

export default Enterotp
