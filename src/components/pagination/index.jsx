import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({count, currentPage, onPageChange}) {
  const disableButtons = count === 1;
  
  return (
    <Stack spacing={2} style={{display:'flex',flexDirection:'row',justifyContent:'center', padding:'3.0rem 0 2.0rem 0'}}>
      <Pagination count={count} page={currentPage} onChange={onPageChange} disabled={disableButtons}/>
    </Stack>
  );
}