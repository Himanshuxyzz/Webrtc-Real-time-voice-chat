import React from 'react'

const StepPhoneEmail = ({onNext}) => {
  return (
    // <div>Phone Email component</div>
    //fixes the error of expected expression inside return block
    <>
    <div>Phone Email component</div>
    <button onClick={onNext}>Next</button>
    </>
  )
}

export default StepPhoneEmail