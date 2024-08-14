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

const rows = [createData("Or001", "C001", "P001", 10, "2000-05-23")];

export default function OrderTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order ID</StyledTableCell>
            <StyledTableCell align="right">Customer ID</StyledTableCell>
            <StyledTableCell align="right">Product ID</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Order Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.OrderID}>
              <StyledTableCell component="th" scope="row">
                {row.OrderID}
              </StyledTableCell>
              <StyledTableCell align="right">{row.CustomerID}</StyledTableCell>
              <StyledTableCell align="right">{row.ProductID}</StyledTableCell>
              <StyledTableCell align="right">{row.Qty}</StyledTableCell>
              <StyledTableCell align="right">{row.OrderDate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
