import React from "react";

const PublicLogin = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Login Público</h1>
      <p>Esta página ainda não está conectada ao Strapi ou backend.</p>
      <form style={{ maxWidth: '300px', margin: '2rem auto' }}>
        <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
        <input type="password" placeholder="Senha" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#0066cc', color: '#fff', border: 'none' }}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default PublicLogin;
