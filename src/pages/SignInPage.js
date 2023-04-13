import React, { useState } from "react";
import LayoutAuthencaiton from "../layout/LayoutAuthencaiton";
import { Link } from "react-router-dom";
import ButtonGoogle from "../components/button/ButtonGoogle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Field from "../components/field/Field";
import { Label } from "../components/label";
import { Input } from "../components/input";
import useToogleValue from "../hooks/useToogleValue";
import ToogleEyes from "../components/toogle/ToogleEyes";
import Button from "../components/button/Button";

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
const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState();
  const handleTooglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <LayoutAuthencaiton heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal lg:font-medium text-center text-text3 lg:text-sm lg:mb-8">
        Dont have an account?{" "}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>
      <form>
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
        <div className="inline-block float-right my-2 cursor-pointer">
          <span className="font-medium my-3  text-primary">Forgot password</span>
        </div>
        <Button type="submit" className="bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthencaiton>
  );
};

export default SignInPage;
