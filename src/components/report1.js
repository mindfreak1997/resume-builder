import React from 'react'
import { Modal, Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import html2pdf from 'html2pdf.js'
import { format } from 'date-fns'
//const ref = React.createRef()
const BillModal = ({ generatedData, products, customers, show, handleShow }) => {
    


    const toPdf = () => {
        const element = document.getElementById('html');
        const opt = {
            margin: 1,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 1 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }
        html2pdf().set(opt).from(element).save()
    }
    return (

        <Modal show={show} style={{ margin: '10px' }}>
            <div id='html'>
                <Modal.Header className='row bg-primary'>
                    <Modal.Title className='col-lg-6 text-white'>INVOICE</Modal.Title>
                    <div className='col-md-6 text-white'>
                        
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className='row '>
                        <div className='col-lg-6'>
                            <b>Biled to: </b>
                           
                        </div>
                        <div className='col-lg-6'>

                            <b>Issued Date: </b>
                            


                        </div>

                    </div>

                    {

                        <Table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Unit Price</th>
                                    <th>Qty</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                              
                                <tr>
                                    <td colSpan='4'></td>
                                </tr>
                                <tr>
                                    <td colSpan='3'><b> Total</b></td>
                                    
                                </tr>
                            </tbody>
                        </Table>


                    }
                </Modal.Body>
            </div>
            <Modal.Footer>


                <button className='btn btn-primary' onClick={toPdf}>Download Pdf</button>

                <Button variant="secondary" onClick={handleShow}>
                    Close
                </Button>


            </Modal.Footer>

        </Modal>


    )
}

export default BillModal


/* import { Button, Divider, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React,{useRef} from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import html2pdf from 'html2pdf.js'
import { useReactToPrint } from "react-to-print"

const useStyle= makeStyles({
  header:{
      paddingTop:'50px',
      paddingBottom:'20px'
  }
})
const Report1 = () => {
    const navigate=useNavigate()
    const personal=useSelector(state=>{
        return state.personal
    })
    const education=useSelector(state=>{
        return state.education
    })
    const skills=useSelector(state=>{
        return state.skill
    })
    const project=useSelector(state=>{
        return state.project
    })
    const certificate=useSelector(state=>{
        return state.certificate
    })
    const interest=useSelector(state=>{
        return state.interest
    })
    const classes=useStyle()
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    })
    const handleMainPage=()=>{
        navigate('/',{replace:true})
      }
      const toPdf = () => {
        const element = document.getElementById('html');
        const opt = {
          margin: 1,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 1 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      }
        html2pdf(element)
    }
  return (
    <div>
        <div className='container'>
        <Button
              style={{width:'100px',height:'50px'}}
                variant="contained"
                color="secondary"
                onClick={handleMainPage}
                
              >Main page</Button>
            <Row>
            <h1>REPORT</h1>
            
            </Row>
            
            <div className='col-lg-6 mt-5' ref={componentRef}>
            <h4 >Silfra Technology</h4>
            <div className='row'>
            <div className='col-lg-4' >
                <h6 >Name</h6>
                </div>
                <div className='col-lg-4'>:</div>
            <div className='col-lg-4'>
                <p>{`${personal.first_name} ${personal.last_name}`}</p>
            </div>
            </div> 
            </div>
           
            <Button
            style={{width:'100px',height:'50px'}}
                variant="contained"
                color="success"
                onClick={handlePrint}
              >Download PDF</Button>
            
            
        </div>
    </div>
  )
}

export default Report1 */