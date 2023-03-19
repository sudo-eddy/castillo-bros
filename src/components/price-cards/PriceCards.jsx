import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import maintenance from "../../assets/maintenance.png";
import truck from "../../assets/truck.png";
import emission from "../../assets/emission-test.png";
import "./price-cards.css";

const PriceCards = () => {
  return (
    <div>
      <MDBCardGroup>
        <MDBCard className="custom-card">
          <MDBCardImage src={maintenance} alt="..." position="top" />
          <MDBCardBody>
            <MDBCardTitle className="card-subtitle">
              Routine Maintenance
            </MDBCardTitle>
            <MDBCardText className="card-body">
              At Castillos Brothers, we understand the importance of routine
              maintenance. We offer a comprehensive range of services to keep
              your car in top condition. Whether you need an oil change,
              transmission fluid flush, A/C gas refill, or any other type of
              routine maintenance, we've got you covered.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter className="card-footer">
            Quality parts and fluids from trusted brands
          </MDBCardFooter>
        </MDBCard>

        <MDBCard className="custom-card">
          <MDBCardImage src={truck} alt="..." position="top" />
          <MDBCardBody>
            <MDBCardTitle className="card-subtitle">
              Stuck in derate mode?
            </MDBCardTitle>
            <MDBCardText className="card-body">
              Do not let a stalled unit make you lose money again! We offer
              comprehensive diesel truck diagnostic services to help you quickly
              identify and fix issues. We can get your diesel engine diagnosed
              and back on the road. Castillos Brothers diesel diagnostics is a
              new division excelling in the market.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter className="card-footer">
            Volvo/Mack, Detroit, Paccar, Cummins
          </MDBCardFooter>
        </MDBCard>

        <MDBCard className="custom-card">
          <MDBCardImage src={emission} alt="..." position="top" />
          <MDBCardBody>
            <MDBCardTitle className="card-subtitle">
              Emissions Test Diagnositcs Experts
            </MDBCardTitle>
            <MDBCardText className="card-body">
              If you've failed an emissions test, don't worry, we can diagnose
              and fix the issue so you can pass the emission test with ease. Our
              shop has an A+ rating with emission pass rates. so you can trust
              us to get the job done right. If you haven't failed emissions but
              your check-engine warning light is on, we can diagnose and fix the
              issue.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter className="card-footer">
            Emissions test pass - proven track record
          </MDBCardFooter>
        </MDBCard>
      </MDBCardGroup>
    </div>
  );
};

export default PriceCards;
