import React,{Component} from 'react';
import {Row,Col} from 'react-bootstrap';

export default class EstimatedTotal extends Component{
    render(){
        return(
            <Row >
            <Col  md={6}><h2>Est. total</h2></Col>
            <Col  md={6}>{`$${this.props.price}`}</Col>
            </Row>
        )
    }
}