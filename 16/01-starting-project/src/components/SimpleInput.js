import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInput = useRef()
  const [enteredName, setEnteredName] = useState("")
  const [error,setError] = useState(false)
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log(enteredName)
    if(enteredName.trim() === "") {
      setError(true)
      return;
    }
    const enteredValue = nameInput.current.value;
    console.log(enteredValue)
    setEnteredName("")
  }

  const inputFormClasses = error ? "form-control invalid" : "form-control"
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputFormClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInput} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
        {error && <p className="error-text">This can't be submit</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
