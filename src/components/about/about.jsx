import * as React from 'react';
import './about.css';
import ContactForm from '../contactForm/ContactForm';
import { Box } from '@mui/system';
import { Container } from '@mui/material';

import { Grid } from "@mui/material";

export default () =>{
    return(
        <div>
            <Grid container>
                <Grid item md={6}>
               
                    <div className="parallax">

                    </div>
                    </Grid>
                <Grid item sm={12} md={6}><Container><ContactForm/></Container></Grid>
            

            </Grid>


        </div>
    )
}