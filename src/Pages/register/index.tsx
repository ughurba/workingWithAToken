import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";

export const Register = () => {
  const [value, setValue] = useState<Record<string, string>>();
  const requesRegister = async (data: Record<string, string>) => {
    await axios.post("http://localhost:20525/api/account/register", data);
  };

  useEffect(() => {
    if (value) {
      requesRegister(value);
    }
  }, [value]);

  const initialValues: Record<string, string> = {
    name: "",
    surname: "",
    email: "",
    password: "",
    username: "",
  };
  const validationScheme = Yup.object({
    name: Yup.string().max(5, "5-den yuxari ola bilmez").required("Required"),
    surname: Yup.string()
      .max(15, "15-den yuxari ola bilmez")
      .required("Required"),
    username: Yup.string()
      .max(10, "10-dan yuxari ola bilmez")
      .required("Vacib"),
    password: Yup.string().max(15, "15-den yuxari olmaz").required("Required"),
    email: Yup.string().email("Invalid mail").required("Required"),
  });

  return (
    <>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationScheme}
          onSubmit={(values) => setValue(values)}
        >
          <Form>
            <div>
              <Field type={"email"} name={"email"} placeholder={"email"} />
              <div>
                <ErrorMessage name={"email"} />
              </div>
            </div>

            <div>
              <Field
                type={"password"}
                name={"password"}
                placeholder={"password"}
              />
              <div>
                <ErrorMessage name={"password"} />
              </div>
            </div>
            <div>
              <Field type={"text"} name={"name"} placeholder={"name"} />
              <div>
                <ErrorMessage name={"name"} />
              </div>
            </div>
            <div>
              <Field type={"text"} name={"surname"} placeholder={"surname"} />
              <div>
                <ErrorMessage name={"surname"} />
              </div>
            </div>
            <div>
              <Field type={"text"} name={"username"} placeholder={"username"} />
              <div>
                <ErrorMessage name={"username"} />
              </div>
            </div>
            <button type={"submit"}>Register</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
