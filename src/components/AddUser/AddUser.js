import React from 'react';
import { Formik, Field, Form, ErrorMessage, getIn } from 'formik';
import * as Yup from 'yup';

import './../../App.scss';
import './AddUser.scss';

function getValidationCls(errors, fieldName) {
    if(getIn(errors, fieldName))
        return 'error';
    return 'success';
}

export default function AddUser(props) {
    return (
        <div className="card-md">
            <h1>Add User</h1>
            <Formik
            initialValues={{ firstName: '', lastName: '', email: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('*Required'),
                lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('*Required'),
                email: Yup.string()
                .email('Invalid email address')
                .required('*Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            render={ formProps => {
                return (
                    <Form>
                        <div className="container">
                            <div className="name-col">
                                <label htmlFor="firstName">First Name</label>
                                <Field className={getValidationCls(formProps.errors, 'firstName')} name="firstName" type="text" />
                                <ErrorMessage name="firstName">
                                    {
                                        msg => <div className="error">{msg}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <Field className={getValidationCls(formProps.errors, 'lastName')} name="lastName" type="text" />
                                <ErrorMessage name="lastName">
                                    {
                                        msg => <div className="error">{msg}</div>
                                    }
                                </ErrorMessage>
                            </div>
                        </div>
                        <div className="container">
                            <div>
                                <label htmlFor="email">Email Address</label>
                                <Field className={getValidationCls(formProps.errors, 'email')} name="email" type="email" />
                                <ErrorMessage name="email">
                                    {
                                        msg => <div className="error">{msg}</div>
                                    }
                                </ErrorMessage>
                            </div>
                        </div>
                        <div className="container flex-end">
                            <button className="btn-filled " type="submit">Submit</button>
                        </div>
                    </Form>
                );
            }}
            />
        </div>
    );
}