// LoginForm.tsx
import React, { useState } from "react";

export interface LoginFormValues {
  login: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (formData: LoginFormValues) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ login, password });
    setLogin(""); // Optionally, clear the form fields after submission
    setPassword("");
  };

  return (
    <form className="m-auto flex flex-col items-center content-center max-w-1/4 bg-gray-300 p-8" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="login">Username</label>
      <input
        type="text"
        id="login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Continue</button>
    </form>
  );
};

export default LoginForm;
