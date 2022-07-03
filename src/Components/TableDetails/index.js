import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './TableDetails.css';



export default function TableDetails(props) {
  return (
      <>
      <Table style={{width:"100%",border:"2px solid #ccc"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={props.ETableCellTextclass}><strong>Loan Amount</strong></TableCell>
            <TableCell className={props.ETableCellvalclass}><strong>Rs </strong>{props.pAmount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={props.ETableCellTextclass}><strong>Interest %</strong></TableCell>
            <TableCell className={props.ETableCellvalclass}>{props.interest}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={props.ETableCellTextclass}><strong>Tenure (Months)</strong></TableCell>
            <TableCell className={props.ETableCellvalclass}>{props.duration}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={props.ETableCellTextclass}><strong>EmI (Monthly)</strong></TableCell>
            <TableCell className={props.ETableCellvalclass}><strong>Rs </strong>{props.emi}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={props.ETableCellTextclass}><strong>Total Interest</strong></TableCell>
            <TableCell className={props.ETableCellvalclass}><strong>Rs </strong>{props.TotalAmountofInterest}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={props.ETableCellTextclass}><strong>Total Payment</strong><br/>(Loan Amount + Interest) </TableCell>
            <TableCell className={props.ETableCellvalclass}><strong>Rs </strong>{props.totalAmt ? props.totalAmt :0}</TableCell>
          </TableRow>
          </TableHead>
      </Table>
      </>
  );
}

