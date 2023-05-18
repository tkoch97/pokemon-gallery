import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({count, currentPage, onPageChange}) {

  return (
    <Stack spacing={2} style={{display:'flex',flexDirection:'row', justifyContent:'center', padding:'1.5rem 0 1.0rem 0'}}>
      <Pagination count={count} page={currentPage} onChange={onPageChange} />
    </Stack>
  );
}