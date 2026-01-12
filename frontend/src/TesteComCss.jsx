import React from "react"

function TesteComCss() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🎨 CSS FUNCIONANDO!</h1>
        <p style={styles.subtitle}>Se você vê cores, o CSS está funcionando!</p>
      </header>
      
      <main style={styles.main}>
        <div style={styles.card}>
          <h2>✅ Header.jsx corrigido</h2>
          <p>O erro na linha 31-32 foi resolvido</p>
        </div>
        
        <div style={styles.card}>
          <h2>✅ React carregando</h2>
          <p>Seu site está funcionando sem erros</p>
        </div>
        
        <div style={styles.card}>
          <h2>🎯 Próximo passo</h2>
          <p>Agora vamos carregar o CSS dos arquivos</p>
        </div>
      </main>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '50px 20px',
    textAlign: 'center'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px'
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: 0.9
  },
  main: {
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '0 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px'
  },
  card: {
    background: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  }
}

export default TesteComCss
