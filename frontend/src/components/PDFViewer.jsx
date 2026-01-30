import React, { useState } from 'react';
import './DocumentPage.css';

const PDFViewer = ({ pdfPath, title }) => {
  const [scale, setScale] = useState(100);

  const zoomIn = () => setScale(prev => Math.min(prev + 10, 200));
  const zoomOut = () => setScale(prev => Math.max(prev - 10, 50));
  const resetZoom = () => setScale(100);

  return (
    <div className="pdf-viewer-fixed">
      {/* Controles Simples */}
      <div className="pdf-controls-fixed">
        <div className="controls-left">
          <span className="zoom-label">Zoom:</span>
          <button onClick={zoomOut} className="btn-fixed">-</button>
          <span className="zoom-value">{scale}%</span>
          <button onClick={zoomIn} className="btn-fixed">+</button>
          <button onClick={resetZoom} className="btn-fixed">Original</button>
        </div>
        
        <div className="controls-right">
          <a href={pdfPath} download className="btn-fixed btn-download">
            Download
          </a>
          <a 
            href={pdfPath} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-fixed btn-newtab"
          >
            Nova Aba
          </a>
        </div>
      </div>

      {/* Visualizador com Tamanho Fixo */}
      <div className="pdf-container-fixed">
        <iframe
          src={`${pdfPath}#toolbar=1&navpanes=0&scrollbar=1&zoom=${scale}`}
          title={title}
          className="pdf-frame-fixed"
          style={{ 
            transform: `scale(${scale / 100})`,
            transformOrigin: 'top left',
            width: `${100 / (scale / 100)}%`,
            height: `${100 / (scale / 100)}%`
          }}
        />
      </div>
    </div>
  );
};

export default PDFViewer;