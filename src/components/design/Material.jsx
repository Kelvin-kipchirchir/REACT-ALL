import React from 'react'
import { styled } from '@mui/system';
import Table from '@mui/material/Table'; 
import TableBody from '@mui/material/TableBody'; 
import TableCell from '@mui/material/TableCell'; 
import TableContainer from '@mui/material/TableContainer'; 
import TableHead from '@mui/material/TableHead'; 
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

class Material extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const StyledTableCell = styled((theme)=>({
            head:{
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white,
            },
            body: {
                fontSize: 14,
            },
        }))(TableCell);

        const StyledTableRow = styled((theme)=>({
            root: {
                '&:nth-of-type(odd)': {
                    backgroundColor: theme.palette.action.hover,
                },
            },
        }))(TableRow);

        const lists = this.props.items.map((item) =>
         <StyledTableRow key={item.id}> 
         <StyledTableCell component="th" scope="row"> 
         {item.name} 
         </StyledTableCell>
          <StyledTableCell align="right">{item.amount}</StyledTableCell> 
          <StyledTableCell align="right">{new Date(item.spendDate).toDateString()}</StyledTableCell> 
          <StyledTableCell align="right">{item.category}</StyledTableCell>
           </StyledTableRow> 
           );

        return(
            <div>
                     <TableContainer component={Paper}>
                     <Table aria-label="customized table"> 
                        <TableHead> 
                            <TableRow> 
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell align="right">Amount</StyledTableCell> 
                                <StyledTableCell align="right">Spend date</StyledTableCell> 
                                <StyledTableCell align="right">Category</StyledTableCell>
                            </TableRow> 
                        </TableHead> 
                                 <TableBody> 
                                     {lists} 
                                     </TableBody> 
                        </Table> 
                </TableContainer> 
            </div>
        );
    
}
}
export default Material;