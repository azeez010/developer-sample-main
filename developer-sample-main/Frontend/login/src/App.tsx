import React, { useState } from "react";
import "./App.css";
import LoginForm, { LoginFormValues } from "./LoginForm";
import LoginAttemptList, { LoginAttempt } from "./LoginAttemptList";

const App: React.FC = () => {
  const [loginAttempts, setLoginAttempts] = useState<LoginAttempt[]>([]);

  const handleLoginSubmit = (formData: LoginFormValues) => {
    // For now, just logging the form data
    console.log(formData);

    // When loginAttempts is an array of objects with a username and a timestamp 
    const newAttempt: LoginAttempt = {
      username: formData.login,
      timestamp: new Date(),
      // You can add more details 
    };

    setLoginAttempts((prevAttempts) => [...prevAttempts, newAttempt]);
  };

  return (
    <div className="App">
      <LoginForm onSubmit={handleLoginSubmit} />
      <LoginAttemptList attempts={loginAttempts} />
    </div>
  );
};

export default App;
