import React, {Component} from 'react';
import { Formik, Field, Form, ErrorMessage, getIn } from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';

import {setFlightWithPassenger, updatePassenger} from './../../stores/actions/Flight';

import './../../App.scss';
import './AddOrUpdateUser.scss';


function getValidationCls(errors, fieldName) {
    if(getIn(errors, fieldName))
        return 'error';
    return 'success';
}

class AddOrUpdateUser extends Component {
    getQueryParams() {
        let search = this.props.location.search || "{}";
        let searchObj = JSON.parse(
          '{"' +
            decodeURI(search)
              .replace("?", "")
              .replace(/"/g, '\\"')
              .replace(/&/g, '","')
              .replace(/=/g, '":"') +
            '"}'
        );
        console.log("Flight No:", searchObj);
        return searchObj || "";
      }
    componentDidMount() {
        let params = this.getQueryParams();
        this.props.setFlightWithPassenger(params.flightNo, params.passengerId);
    }
    render () {
        let passenger = this.props.flightWithPassenger && this.props.flightWithPassenger.passengerInfo && this.props.flightWithPassenger.passengerInfo[0] ? this.props.flightWithPassenger.passengerInfo[0] : {};
        let options = [<option value={''}>Select Service</option>];
        if(this.props.flightWithPassenger && this.props.flightWithPassenger.ancilaryServices && this.props.flightWithPassenger.ancilaryServices.length) {
            let serviceOptions = this.props.flightWithPassenger.ancilaryServices.map(service => {
                return <option value={service}>{service}</option>
            });
            options.push(serviceOptions);
        }
        return (
            <div className="card-md">
                <h1>Update User</h1>
                <Formik
                initialValues={
                    { 
                        name: passenger.name ? passenger.name : '', 
                        address: passenger.address || '', 
                        seatNo: passenger.seatNo || '',  
                        passportNo: passenger.passport || '',
                        ancilaryServices: passenger.ancilaryServices || '',
                        specialMeals: passenger.specialMeals || false
                    }
                }
                validationSchema={Yup.object({
                    name: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('*Required'),
                    address: Yup.string()
                    .required('*Required'),
                    seatNo: Yup.string()
                    .required('*Required'),
                    passportNo: Yup.string(),
                    ancilaryServices: Yup.string(),
                    specialMeals: Yup.bool()
                })}
                onSubmit={(values, { setSubmitting }) => {
                    let params = this.getQueryParams();
                    updatePassenger(params.flightNo, params.passengerId, values);
                    //this.props.history.push(`/in-flight?flightNo=${params.flightNo}&passengerId=${params.passengerId}`);
                    setSubmitting(false);
                }}
                enableReinitialize={true}
                >
                    { formProps => {
                    return (
                        <Form>
                            <div className="name-col">
                                <label htmlFor="name">Name</label>
                                <Field className={getValidationCls(formProps.errors, 'name')} name="name" type="text" />
                                <ErrorMessage name="name">
                                    {
                                        msg => <div className="error">{msg}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div>
                                <label htmlFor="address">Address</label>
                                <Field className={getValidationCls(formProps.errors, 'address')} name="address" type="textarea" />
                                <ErrorMessage name="address">
                                    {
                                        msg => <div className="error">{msg}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="container multiElem">
                                <div className="container-col">
                                    <label htmlFor="seatNo">Seat Number</label>
                                    <Field className={getValidationCls(formProps.errors, 'seatNo')} name="seatNo" type="text" />
                                    <ErrorMessage name="seatNo">
                                        {
                                            msg => <div className="error">{msg}</div>
                                        }
                                    </ErrorMessage>
                                </div>
                                <div className="container-col">
                                    <label htmlFor="passportNo">Passport Number</label>
                                    <Field className={getValidationCls(formProps.errors, 'passportNo')} name="passportNo" type="text" />
                                    <ErrorMessage name="passportNo">
                                        {
                                            msg => <div className="error">{msg}</div>
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="ancilaryServices">Services</label>
                                <Field className={getValidationCls(formProps.errors, 'ancilaryServices')} name="ancilaryServices" type="text" />
                                 <ErrorMessage name="ancilaryServices">
                                    {
                                        msg => <div className="error">{msg}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="container">
                                <label htmlFor="specialMeals">Services</label>
                                <Field className={getValidationCls(formProps.errors, 'specialMeals')} name="specialMeals" type="checkbox" />
                                 <ErrorMessage name="specialMeals">
                                    {
                                        msg => <div className="error">{msg}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="container flex-end">
                                <button className="btn-filled" type="submit">Submit</button>
                            </div>
                        </Form>
                    );
                }}
                </Formik>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      flightWithPassenger: state.pasngrs.flightWithPassenger
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      setFlightWithPassenger: (flightNo, passengerId) => dispatch(setFlightWithPassenger(flightNo, passengerId))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddOrUpdateUser);