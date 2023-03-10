import { React, useState } from "react";
import styles from "./Register.module.css";
import Card from "../../components/shared/Card/Card";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";
import StepName from "../Steps/StepName/StepName";
import StepAvatar from "../Steps/StepAvatar/StepAvatar";
import StepUsername from "../Steps/StepUsername/StepUsername";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUsername,
};

const Register = () => {
  const [step, setStep] = useState(1); //default state
  const Step = steps[step];

  const onNext = () => {
    setStep(step + 1);
  };

  return (
    // <div className={styles}>
    //     <Card title="This is register page" icon='phone'></Card>
    // </div>
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Register;
