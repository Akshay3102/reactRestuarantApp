import React, { useState, useEffect } from 'react';
import RestuarantCard from './RestuarantCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {RestuarantListAction} from '../Actions/restuarantListAction'
import { useDispatch, useSelector } from 'react-redux';

function Restuarantlist() {
  //create state to hold all restuarant
  const [allRestuarants, setRestuarant] = useState([])

  //fuction to call api to get all restuarant.js
  // const getRestuarant = async () => {
  //   await fetch('/db.json')
  //     .then((data) => {
  //       data.json()
  //         .then((result) => {
  //           setRestuarant(result.restaurants);
  //         })
  //     })
  // }
  // console.log(allRestuarants);
 const dispatch=useDispatch()
 const result=useSelector(state=>state.restuarantReducer)
 const {restuarantList}=result
  useEffect(() => {
    // getRestuarant()
    dispatch(RestuarantListAction())

  }, [])


  return (
    <Row>
      {
        restuarantList.map(item => (
          <Col sm={12} md={6} lg={4} xl={3}><RestuarantCard restaurant={item} /></Col>
        ))
      }
    </Row>
  )
}

export default Restuarantlist