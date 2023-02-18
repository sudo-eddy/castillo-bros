import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBCardGroup
} from 'mdb-react-ui-kit';
import maintenance from '../../assets/maintenance.png'
import truck from '../../assets/truck.png'


const PriceCards = () => {
    return (
        <div>
            <MDBCardGroup>
                <MDBCard>
                    <MDBCardImage src={maintenance} alt='...' position='top' />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This
                            content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter>
                        <small className='text-muted'>Last updated 3 mins ago</small>
                    </MDBCardFooter>
                </MDBCard>

                <MDBCard>
                    <MDBCardImage src={truck} alt='...' position='top' />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter>
                        <small className='text-muted'>Last updated 3 mins ago</small>
                    </MDBCardFooter>
                </MDBCard>

                <MDBCard>
                    <MDBCardImage src={maintenance} alt='...' position='top' />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This
                            card has even longer content than the first to show that equal height action.
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter>
                        <small className='text-muted'>Last updated 3 mins ago</small>
                    </MDBCardFooter>
                </MDBCard>
            </MDBCardGroup>

        </div>
    );
}

export default PriceCards;
