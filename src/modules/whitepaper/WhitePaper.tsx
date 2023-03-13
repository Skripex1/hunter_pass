import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const WhitePaper: React.FC = () => {
  const [totalPages, setTotalPages] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setTotalPages(numPages);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'scroll' }}>
      <Document file={`${process.env.PUBLIC_URL}/Luna_Hunters.pdf`} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(totalPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
};

export default WhitePaper;
