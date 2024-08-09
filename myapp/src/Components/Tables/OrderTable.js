import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(OrderID, CustomerID, ProductID, Qty, OrderDate) {
  return { OrderID, CustomerID, ProductID, Qty, OrderDate };
}

const rows = [createData("Or001", "C001", "P001", "10", "2000.05.23")];

export default function OrderTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order ID</StyledTableCell>
            <StyledTableCell align="right">CustomerID</StyledTableCell>
            <StyledTableCell align="right">ProductID</StyledTableCell>
            <StyledTableCell align="right">Qty</StyledTableCell>
            <StyledTableCell align="right">OrderDate</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ID}>
              <StyledTableCell component="th" scope="row">
                {row.ID}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.Name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Email}</StyledTableCell>
              <StyledTableCell align="right">
                {row.MobileNumber}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
