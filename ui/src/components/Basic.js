import React from 'react';
import { Formik } from 'formik';
import "./Basic.css"

const Basic = () => (
  <div className="basic-form">
    <h1 style={{textAlign: "center"}}>SmartPay Report</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            className='basic-input'
            type="text"
            placeholder='Job Title'
            name="jobtitle"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            className='basic-input'
            type="date"
            placeholder='Start Date'
            name="startdate"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <div className='basic-input'>
            <label className='special-label'>
              End Date:
              <input
                type="date"
                name="enddate"
                placeholder='End Date'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </label>
          </div>
          <div className='basic-input'>
            <label>
              Was this a promotion?
              <input
                type="checkbox"
                name="ispromotion"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </label>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;