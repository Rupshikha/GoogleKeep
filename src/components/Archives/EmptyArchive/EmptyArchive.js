import React from 'react';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import {Box, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import styles from "./styles.module.css";


const Container=styled(Box)`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:20vh;
`

export default function EmptyNote() {
  return (
    <Container>
         <ArchiveOutlinedIcon className={styles.archive}/>
        <Typography className={styles.text}>Your archived notes appear here</Typography> 
    </Container>
       
    
  )
}



