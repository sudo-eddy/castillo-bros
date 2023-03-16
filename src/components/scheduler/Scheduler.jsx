import { PopupButton } from "react-calendly";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';
import './scheduler.css'

const Scheduler = () => {
    return (
        <section className="scheduler-container" id="services">
            <h2 className="section-title">Schedule Your Service</h2>
            <MDBRow className="cards-row">
                <MDBCol sm='6' md='4'>
                    <MDBCard alignment="center">
                        <MDBCardBody>
                            <MDBCardTitle className="service-title">Emissions Diagnostics</MDBCardTitle>
                            <MDBCardText className="service-text">
                                If you have an upcoming emissions test, or previously failed, we can get your vehicle ready for emissions testing.
                            </MDBCardText>
                            <PopupButton className="btn btn-primary" url="https://calendly.com/castillosbrothersautoservice/emissions-diagnostic"
                                rootElement={document.getElementById("root")}
                                text="Schedule appointment"></PopupButton>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='6' md='4'>
                    <MDBCard alignment="center">
                        <MDBCardBody>
                            <MDBCardTitle className="service-title">Mechanical Failure</MDBCardTitle>
                            <MDBCardText className="service-text">
                                If your vehicle has clear symptoms of a mechanical failure, book this service. We are experts in diagnosing and fixing mechanical failures.
                            </MDBCardText>
                            <PopupButton className="btn btn-primary" url="https://calendly.com/castillosbrothersautoservice/mechanical-failure"
                                rootElement={document.getElementById("root")}
                                text="Schedule appointment"></PopupButton>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='6' md='4'>
                    <MDBCard alignment="center">
                        <MDBCardBody>
                            <MDBCardTitle className="service-title">Electrical Failure</MDBCardTitle>
                            <MDBCardText alignment="center" className="service-text">
                                We are known for diagnosing electric issues by following industry standards, no guessing games.
                            </MDBCardText>
                            <PopupButton className="btn btn-primary" url="https://calendly.com/castillosbrothersautoservice/electrical-failure"
                                rootElement={document.getElementById("root")}
                                text="Schedule appointment"></PopupButton>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow className="cards-row">
                <MDBCol sm='6' md='4'>
                    <MDBCard alignment="center">
                        <MDBCardBody>
                            <MDBCardTitle className="service-title">Disel Engine Diagnostics</MDBCardTitle>
                            <MDBCardText className="service-text">
                                Our newest business division is focused on Diesel truck engine diagnostics. You can trust us to diagnose your stalled unit.
                            </MDBCardText>
                            <PopupButton className="btn btn-primary" url="https://calendly.com/castillosbrothersautoservice/diesel-engine-diagnostic"
                                rootElement={document.getElementById("root")}
                                text="Schedule appointment"></PopupButton>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='6' md='4'>
                    <MDBCard alignment="center">
                        <MDBCardBody>
                            <MDBCardTitle className="service-title">Routine Maintenance</MDBCardTitle>
                            <MDBCardText className="service-text">
                                Customers prefer Castillos Brothers to maintain their vehicle. Book now for brakes service, oil change, tire rotation, etc.
                            </MDBCardText>
                            <PopupButton className="btn btn-primary" url="https://calendly.com/castillosbrothersautoservice/routine-maintenance"
                                rootElement={document.getElementById("root")}
                                text="Schedule appointment"></PopupButton>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='6' md='4'>
                    <MDBCard alignment="center">
                        <MDBCardBody>
                            <MDBCardTitle className="service-title">General Inspection</MDBCardTitle>
                            <MDBCardText className="service-text">
                                General inspections are usually booked to evaluate the current mechanical condition of your vehicle, schedule before your roadtrip!
                            </MDBCardText>
                            <PopupButton className="btn btn-primary" url="https://calendly.com/castillosbrothersautoservice/diesel-engine-diagnostic"
                                rootElement={document.getElementById("root")}
                                text="Schedule appointment"></PopupButton>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </section>

    );
};

export default Scheduler;