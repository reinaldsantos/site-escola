import React from 'react';
import { Link } from 'react-router-dom';
import './styles/PdfViewerLayout.css';

const EQAVETMenu = () => {
    // Menu ISSPSelo
    const menuISSPSelo = [
        { nome: "Selo de Conformidade EQAVET", rota: "/eqavet/selo-conformidade", emoji: "🏆" }
    ];

    // Menu Documentação
    const menuDocumentacao = [
        { nome: "Documento Base", rota: "/eqavet/documento-base", emoji: "📄" },
        { nome: "Plano de Ação", rota: "/eqavet/plano-acao", emoji: "📋" },
        { nome: "Relatório do Operador", rota: "/eqavet/relatorio-operador", emoji: "👨‍💼" },
        { nome: "Plano de Ação Integrado", rota: "/eqavet/plano-acao-integrado", emoji: "🔗" },
        { nome: "Relatório de Verificação EQAVET", rota: "/eqavet/relatorio-verificacao", emoji: "✅" },
        { nome: "Manual de Processos", rota: "/eqavet/manual-processos", emoji: "📖" },
        { nome: "Relatórios de Acompanhamento", rota: "/eqavet/relatorios-acompanhamento", emoji: "📈" },
        { nome: "Relatórios de Progresso Anual", rota: "/eqavet/relatorio-progresso", emoji: "📊" },
        { nome: "Certificação EQAVET 2020-2023", rota: "/eqavet/certificacao", emoji: "🏅" }
    ];

    // Menu Sobre Nós
    const menuSobreNos = [
        { nome: "Autorização de Funcionamento", rota: "/eqavet/autorizacoes-funcionamento", emoji: "📜" },
        { nome: "Estatutos", rota: "/eqavet/estatutos", emoji: "⚖️" },
        { nome: "Regulamento Interno", rota: "/eqavet/regulamentos-internos", emoji: "📑" },
        { nome: "Projeto Educativo", rota: "/eqavet/projetos-educativos", emoji: "🎓" },
        { nome: "Política de Privacidade", rota: "/eqavet/politicas-privacidade", emoji: "🔒" },
        { nome: "Organização Escolar", rota: "/eqavet/organizacoes-escolares", emoji: "🏫" },
        { nome: "Guião Educação Inclusiva", rota: "/eqavet/guioes-educacao-inclusiva", emoji: "🌈" },
        { nome: "Legislação de Apoio", rota: "/eqavet/legislacoes-apoio", emoji: "⚖️" },
        { nome: "Fichas de Operação", rota: "/eqavet/fichas-operacao", emoji: "📝" }
    ];

    return (
        <div className="pdf-viewer-container">
            <header className="pdf-viewer-header">
                <div className="pdf-viewer-title">
                    <h1>🏛️ Sistema EQAVET</h1>
                </div>
            </header>

            <main className="pdf-main-container" style={{ gridTemplateColumns: '1fr' }}>
                <section className="pdf-viewer-area">
                    <div className="pdf-viewer-toolbar">
                        <h2>📋 Menu EQAVET</h2>
                    </div>

                    <div className="pdf-document-container">
                        <div className="pdf-document-paper" style={{ padding: '30px' }}>
                            {/* Menu ISSPSelo */}
                            <div style={{ marginBottom: '40px' }}>
                                <h3 style={{ color: '#2d3748', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
                                    🏆 ISSPSelo
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
                                    {menuISSPSelo.map((item, index) => (
                                        <Link key={index} to={item.rota} style={{ textDecoration: 'none' }}>
                                            <div className="pdf-list-item" style={{ height: '100%' }}>
                                                <span style={{ fontSize: '24px', marginRight: '10px' }}>{item.emoji}</span>
                                                <strong>{item.nome}</strong>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Menu Documentação */}
                            <div style={{ marginBottom: '40px' }}>
                                <h3 style={{ color: '#2d3748', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
                                    📚 Documentação
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
                                    {menuDocumentacao.map((item, index) => (
                                        <Link key={index} to={item.rota} style={{ textDecoration: 'none' }}>
                                            <div className="pdf-list-item" style={{ height: '100%' }}>
                                                <span style={{ fontSize: '24px', marginRight: '10px' }}>{item.emoji}</span>
                                                <strong>{item.nome}</strong>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Menu Sobre Nós */}
                            <div>
                                <h3 style={{ color: '#2d3748', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
                                    ℹ️ Sobre Nós
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
                                    {menuSobreNos.map((item, index) => (
                                        <Link key={index} to={item.rota} style={{ textDecoration: 'none' }}>
                                            <div className="pdf-list-item" style={{ height: '100%' }}>
                                                <span style={{ fontSize: '24px', marginRight: '10px' }}>{item.emoji}</span>
                                                <strong>{item.nome}</strong>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default EQAVETMenu;
