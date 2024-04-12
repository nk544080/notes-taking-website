import React, { useState } from 'react';


function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    console.log('Signing up with:', email, password);
  };

  return (
    <form onSubmit={handleSignUp}>
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email" 
      />
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password" 
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpPage;
