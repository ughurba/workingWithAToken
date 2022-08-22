import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoginRequest } from "../../Api/login";

export const Login = () => {
  const [value, setValue] = useState<Record<string, string>>();
  const initialValues: Record<string, string> = {
    email: "",
    password: "",
    username: "",
  };
  const validationScheme = Yup.object({
    username: Yup.string()
      .max(10, "10-dan yuxari ola bilmez")
      .required("Vacib"),
    password: Yup.string().max(15, "15-den yuxari olmaz").required("Required"),
  });

  const requestLogin = async (data: Record<string, string>) => {
    const response = await axios.post(
      "http://localhost:20525/api/account/login",
      data
    );
    setTokenLocalStorage(response.data.token);
  };

  useEffect(() => {
    if (value) {
      requestLogin(value);
      LoginRequest();
    }
  }, [value]);

  const setTokenLocalStorage = (token: string) => {
    localStorage.setItem("userToke", token);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationScheme}
        onSubmit={(values) => setValue(values)}
      >
        <Form>
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
            <Field type={"text"} name={"username"} placeholder={"username"} />
            <div>
              <ErrorMessage name={"username"} />
            </div>
          </div>
          <button type={"submit"}>Register</button>
        </Form>
      </Formik>
    </div>
  );
};
