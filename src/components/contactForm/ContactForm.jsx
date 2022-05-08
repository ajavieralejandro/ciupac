import * as React from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components'
import { TextField } from '@mui/material';
import FilledInput from '@mui/material/FilledInput';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import { Container } from '@mui/material';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bcrbr5t', 'template_lq16jl9', e.target, 'A_TxFi2nrM5sWPFIM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };



const StyledTextField = styled(TextField)`
/* default */
.MuiInput-underline:before {
    border-bottom: 2px solid green;
}
/* hover (double-ampersand needed for specificity reasons. */
&& .MuiInput-underline:hover:before {
    border-bottom: 2px solid lightblue;
}
/* focused */
.MuiInput-underline:after {
    border-bottom: 2px solid red;
}
`;
const Wrapper = styled.div`
        padding-top:2%;
`;
const Wrapper2 = styled.div`
padding-top:15%;
display: block; 

`;

const Input = styled(TextField)`
padding: 0.5em;
margin: 0.5em;
background: grey;
border-radius: 3px;
width : 100%;
height:100%;
`;

const MultiInput = styled(TextField)`
padding: 0.5em;
width:250px;
margin: 0.5em;
background: grey;
border-radius: 3px;
`

const StyledText = styled.p`
    color : black;
    font-family: 'Minimal';
    font-size: 2rem;

`

const StyledButton = styled(Button)`
    width: 250px;
`



const  ContactForm =   () =>{
    return(
        <Wrapper2>

   <Container>
            <Wrapper>
            <p>Contacto : </p>

                <TextField fullWidth id="outlined-basic" label="Nombre" variant="outlined" />

            </Wrapper>
            <Wrapper>
            <TextField fullWidth id="outlined-basic" label="email" variant="outlined" />

            </Wrapper>
            <Wrapper>
            <TextField fullWidth id="outlined-basic" label="asunto" variant="outlined" />


            </Wrapper>
            <Wrapper>
            <TextField
            fullWidth
          id="standard-multiline-static"
          label="Mensaje"
          multiline
          rows={4}
          variant="outlined"
        />
            </Wrapper>
            <Wrapper>
                        <Button type="submit" variant="filled" endIcon={<SendIcon />}>
        Send Mail
      </Button>
                        </Wrapper>


                        </Container>
      </Wrapper2>

    )
}

export default ContactForm;