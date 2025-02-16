// Code By Amritangshu Dey - 22BCY10208
// Week 3 Solutions - React.js Assignment 

import React, { useState } from 'react';

// Q1: TextUpdater Component
function TextUpdater() {
  const [text, setText] = useState('');

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <p className="text-lg">You typed: {text}</p>
    </div>
  );
}

// Q2: Form with Console Logging
function LogForm() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Enter value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

// Q3: UserCard Component
function UserCard({ name, email }) {
  return (
    <div className="border rounded shadow-lg p-4 bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

// Q4: Button Component
function CustomButton() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      Click Me
    </button>
  );
}

// Q5: LoginForm Component
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Login
      </button>
    </form>
  );
}

// App Component to Display All Tasks
function App() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">React.js Assignment</h1>
      <section>
        <h2 className="text-xl font-bold mb-4">Task 1: TextUpdater</h2>
        <TextUpdater />
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">Task 2: LogForm</h2>
        <LogForm />
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">Task 3: UserCard</h2>
        <UserCard name="John Doe" email="john.doe@example.com" />
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">Task 4: CustomButton</h2>
        <CustomButton />
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">Task 5: LoginForm</h2>
        <LoginForm />
      </section>
    </div>
  );
}

export default App;

