import React from "react";
import certificado from "../../Assets/CertificadoLaboral.png";
import principal from "../../Assets/principal.jpg";

const Certificate = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={certificado} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="ruta-de-la-imagen-2.jpg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={principal} alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <div class="carousel-item">
        <img src="..." alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>...</h5>
          <p>...</p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
