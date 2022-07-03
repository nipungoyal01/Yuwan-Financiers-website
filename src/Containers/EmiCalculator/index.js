import React, {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceGrid from '../../Components/UI/Grids/ServiceGrid'
import PageTitle from '../../Components/UI/PageTitle'
//import './About.css'
import aboutUs from '../../img/about.png'
import whyUs from '../../img/why-choose-us-vec.png'
import HomeHeading from '../../Components/UI/Home/HomeHeadings'
import './EmiCalculator.css'
import {withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typograpghy from '@material-ui/core/Typography';
import { Table, TableCell, TableRow } from '@material-ui/core';
import TableDetails from '../../Components/TableDetails'
import { Pie } from 'react-chartjs-2';

import SliderMarks from '../../Components/Slider'
/**
* @author
* @function About
**/
const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const EmiCalculator = (props) => {
  const[pAmount,setpAmount] = useState(2755000);
  const[interest,setInterest] = useState(7);
  const[duration,setDuration] = useState(147);
  const maxValue=6000000;
  const intMax=20;
  const maxDuration=360;

  const intr = interest / 1200;
  const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1/(1 + intr), duration)))) : 0;
  const totalAmt = duration * emi;
  var TotalAmountofCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
   const TotalAmountofInterest = Math.round(totalAmt - TotalAmountofCredit);  
  return(
    <>
    <section className="feature-section section-padding emi-calc-padding" >
    <div className="center_div">
    <div className="container-fluid">
    <div className="row">
    <div className="top_div col-12 bg-info mx-auto">
    <div className="row">
    <div className="CalHeading bottom_top_div col-12 bg-white">
    <h2>EMI Calculator</h2>
    </div>
    <div className="bottom_first_div col-md-12 col-12 bg-white">
    <div>
    <Typograpghy gutterButton><strong>Loan Amount</strong></Typograpghy>
    <PrettoSlider value={pAmount} marks={SliderMarks.marksAmt} onChange={(event,vAmt) =>(setpAmount(vAmt))} defaultValue={pAmount} max={maxValue}/>
    </div>
    <div>
    <Typograpghy gutterButton><strong>Interest Rate %</strong></Typograpghy>
    <PrettoSlider value={interest} marks={SliderMarks.marksInt} onChange={(event,vInt) =>(setInterest(vInt))} defaultValue={interest} max={intMax}/>
    </div>
    <div>
    <Typograpghy gutterButton><strong>Tenure (Months)</strong></Typograpghy>
    <PrettoSlider value={duration} marks={SliderMarks.marksTenure} onChange={(event,vDur) =>(setDuration(vDur))} defaultValue={duration} max={maxDuration}/>
    </div>
    </div>
    <div className="bottom_second_div col-md-12 col-12 bg-white">
    <div className="row">
    <div className="Caltable column_div col-md-6 col-12 bg-white">
    <Table>
    <TableRow>
    <TableCell>
    <TableDetails totalAmt={totalAmt} ETableCellTextclass="ETableCellText" ETableCellvalclass="ETableCellval" pAmount={pAmount} interest={interest} duration={duration} emi={emi} TotalAmountofInterest={TotalAmountofInterest}/>
    </TableCell>
    </TableRow>
    </Table>
    </div>
    <div className="column_div col-md-6 col-12 bg-white">
    <Table>
    <TableRow>
    <TableCell>
    <Pie 
    data={{
      labels:['Total interest', 'Total amount'],
      datasets:[{
        data: [TotalAmountofInterest, pAmount],
        backgroundColor: ['red','blue'],
        labelscolor:['black']
      }]
    }}
    options={{ maintainAspectRatio: false, responsive:true }}
    width={300}
    height={300} />
    </TableCell>
    </TableRow>
    </Table>
    </div>
    </div>
    </div>
    </div>
    </div>  
    </div>
    </div>
    </div>  
    </section>
 
    </>
    )
  }
  
export default EmiCalculator