import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-3' href='https://www.facebook.com/HELAMATH4' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-3' href='https://www.google.com/search?q=castillos+brothers+joliet&sxsrf=AJOqlzXTMrtJpJHuSGQHh0fPK2IAedbIZw%3A1678761410471&source=hp&ei=wt0PZIurGv-M0PEP7c-56AE&iflsig=AK50M_UAAAAAZA_r0hlD-eM3v65WD6D1JvIM7k7VmDsJ&oq=c&gs_lcp=Cgdnd3Mtd2l6EAEYADIECCMQJzIECCMQJzIECCMQJzIKCC4QxwEQrwEQQzIFCAAQkQIyCwguEIAEELEDEIMBMhEILhCDARDHARCxAxDRAxCABDIOCC4QgAQQsQMQxwEQ0QMyCwgAEIAEELEDEIMBMhEILhCABBCxAxCDARDHARDRAzoLCC4QxwEQrwEQkQI6BAgAEEM6BwguELEDEENQAFjjCGCdGmgBcAB4AIABbYgB0gGSAQMwLjKYAQCgAQE&sclient=gws-wiz#' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-3' href='https://api.whatsapp.com/send?phone=16307551481' role='button'>
            <MDBIcon fab icon='whatsapp' />
          </MDBBtn>
        </section>

        <section className='mb-4'>
          <p>
            Castillos Brothers is proud to be serving the Joliet and Chicagoland area. Thank you for many years of trusting us with your vehicle.
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href=''>
          Castillos Brothers
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
