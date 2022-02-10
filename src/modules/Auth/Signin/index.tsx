import React from "react";

import { Button, Typography } from "antd";
import { Field, Form, Formik, FormikProps } from "formik";
import { authSchema } from "../../../validation/auth";

interface FormValues {
  email: string;
  password: string;
}

const Signin = () => {
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={authSchema}
        render={({ errors }: FormikProps<any>) => (
          <Form>
            <div style={{ marginBottom: "10px" }}>
              <Typography.Paragraph>Email</Typography.Paragraph>
              <Field name="email" placeholder="Enter email" />
              {errors.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <Typography.Paragraph>Password</Typography.Paragraph>
              <Field
                htmlType="password"
                name="password"
                placeholder="Enter password"
              />
              {errors.password && (
                <div style={{ color: "red" }}>{errors.password}</div>
              )}
            </div>
            <Button htmlType="submit">Login</Button>
          </Form>
        )}
      ></Formik>
    </>
  );
};

export default Signin;
