import React, { useState } from "react";
import LayOutAuthencaiton from "../layout/LayoutAuthencaiton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "../components/label";
import { Input } from "../components/input";
import Field from "../components/field/Field";
import Button from "../components/button/Button";
import Checkbox from "../components/checkbox/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ToogleEyes from "../components/toogle/ToogleEyes";
import ButtonGoogle from "../components/button/ButtonGoogle";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
});
const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSIgnUp = (values) => {
    console.log(values);
  };
  const [aceptTerm, setAceptTerm] = useState();
  const [showPassword, setShowPassword] = useState();
  const handleAccept = () => {
    setAceptTerm(!aceptTerm);
  };
  const handleTooglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <LayOutAuthencaiton heading="Sign Up">
      <p className="mb-6 text-xs font-normal lg:font-medium text-center text-text3 lg:text-sm lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>
      <p className="text-center text-text2 font-normal text-xs lg:text-sm mb-2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSIgnUp)}>
        <Field>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            placeholder="Jonh Doe"
            type="text"
            name="name"
            erros={errors.name?.message}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            placeholder="example@gmail.com"
            type="email"
            name="email"
            erros={errors.email?.message}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            name="password"
            erros={errors.password?.message}
          >
            <ToogleEyes
              open={showPassword}
              onClick={handleTooglePassword}
            ></ToogleEyes>
          </Input>
        </Field>
        <div className="mt-3 mb-2">
          <Checkbox onClick={handleAccept} checked={aceptTerm} className="">
            <span className="font-normal lg:font-semibold text-xs lg:text-sm text-text2 flex-1 ">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the
              <span className="underline text-secondary"> Privacy policy.</span>
            </span>
          </Checkbox>
        </div>
        <Button type="submit" className="bg-primary">
          Create my account
        </Button>
      </form>
    </LayOutAuthencaiton>
  );
};

export default SignUpPage;
