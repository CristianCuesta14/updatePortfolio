import React, { useState, useEffect } from "react";
import { Container, Row, Text } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV_Cristian_Cuesta_FullStack_Developer_Jr.pdf";
import certificate from "../../Assets/../Assets/Certificado.pdf";
import hhs from "../../Assets/../Assets/hhs.pdf";
import cf from "../../Assets/../Assets/cl.pdf";

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        {/* <Particle /> */}
        <span className="building">Este sitio está en construcción. </span>
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}

        {/* <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row> */}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Document file={cf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.65 : 0.58} />
          </Document>
        </Row>

        <Row className="resume2">
          <Document
            file={certificate}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={1} scale={width > 786 ? 1.28 : 0.45} />
          </Document>
        </Row>

        <Row className="resume2">
          <Document file={hhs} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 0.8 : 0.28} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
