// TypeScript LoginAttempt component
import React, { ReactNode } from "react";

export interface LoginAttempt {
    username: string;
    timestamp: Date;
  // more properties can be included
}

interface LoginAttemptProps {
  children: ReactNode;
}

const LoginAttempt: React.FC<LoginAttemptProps> = ({ children }) => (
  <li>{children}</li>
);

interface LoginAttemptListProps {
  attempts: LoginAttempt[];
  children?: ReactNode;
}

const LoginAttemptList: React.FC<LoginAttemptListProps> = ({ attempts, children }) => (
  <div className="m-auto flex flex-col items-center content-center max-w-1/4 py-0 px-8">
    <p>Recent activity</p>
    <input type="input" placeholder="Filter..." />
    <ul className="Attempt-List">
      {attempts.map((attempt, index) => (
        <LoginAttempt key={index}>{`User: ${attempt.username}, Timestamp: ${attempt.timestamp.toLocaleString()}`}</LoginAttempt>
      ))}
    </ul>
    {children}
  </div>
);

export default LoginAttemptList;
