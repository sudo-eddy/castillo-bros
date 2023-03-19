import React from "react";
import featured from "./featured.css";
import { TbEngine } from "react-icons/tb";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";

const Featured = () => {
  return (
    <MDBCard className="featured-card" alignment="center" id="about-us">
      <MDBCardHeader className="featured-header">
        We Specialize in Emission Testing Diagnostics
      </MDBCardHeader>
      <MDBCardBody className="featured-body">
        <MDBCardTitle className="card-title">
          Failed Emissions Test?
          <TbEngine className="warning-light" />
        </MDBCardTitle>
        <MDBCardText>
          Welcome to Castillo Brothers Auto Service! We are a trusted and
          reputable shop known for our expertise in emission testing and
          repairs. Our mission is to provide our customers with the highest
          level of service and satisfaction. With a proven track record of
          success, we have a reputation for fixing even the toughest of vehicles
          that others, including dealerships, have been unable to repair. Our
          experienced technicians use state-of-the-art equipment to diagnose and
          repair your vehicle, ensuring a high pass rate in emission testing. We
          understand the importance of keeping your vehicle in top condition and
          strive to provide a stress-free experience for our customers. Come
          visit us and see why so many are happy with our services.
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter className="text-muted">
        We are known for fixing cars your local dealer can't fix!
      </MDBCardFooter>
    </MDBCard>
  );
};

export default Featured;
