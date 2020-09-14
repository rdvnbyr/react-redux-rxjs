import React from 'react';
import { Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { SessionActions } from '../actions';
import { Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router';

function FormCo() {

    const aDispatch = useDispatch();
    const aAstate = useSelector(state => state.session );

    const initialValues = {
        email: '',
        password: ''
    };

    const onSubmit = values => {
        aDispatch(SessionActions.login(values.email, values.password));
    };

    const validationSchema = Yup.object({
        email: Yup.string().email().required()
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    if (aAstate.isLogin) {
        return Redirect('/')
        // return (
        //     <div>
        //         <Redirect to="/" />
        //     </div>
        // )
    }



    return (
        <div>
        {
            !aAstate.loading ?
                <Form className="w-50 p-5 mt-5 mx-auto border shadow" onSubmit={formik.handleSubmit}>
                    <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        className={ formik.touched.email && formik.errors.email ? 'error' : '' }
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
            </Form>
            : 
            <h1>Loading....</h1>
        }
        </div>
    )
}

export default FormCo;
