import {React,useContext} from 'react';
import NoteContext from '../../Store/cart-context';
import {Box} from '@mui/material';
import Grid from '@mui/material/Grid';
import DeleteNoteCard from './DeleteNoteCard';
import EmptyDeleteNote from './EmptyDeleteNote/EmptyDeleteNote';

export default function DeleteNotes() {
    const {deleteNotes}= useContext(NoteContext);
    
  return (
   <Box>
   { deleteNotes.length>0?
    <Grid container style={{marginTop:'16px'}}>
       {  deleteNotes.map((item, index)=>(
           <Grid item>
            <DeleteNoteCard item={item} index={index}/>
            </Grid>
        ))}
    </Grid>: <EmptyDeleteNote/>}
    
   </Box>    
  )
}
