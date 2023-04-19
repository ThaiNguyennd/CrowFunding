import React, { useState } from "react";
import LayoutDashBoard from "../layout/LayoutDashBoard";
import { useForm } from "react-hook-form";
import FieldRow from "../components/field/FieldRow";
import Field from "../components/field/Field";
import Label from "../components/label/Label";
import { Input } from "../components/input";
import ToogleEyes from "../components/toogle/ToogleEyes";

const ProfilePages = () => {
  const { control } = useForm({});
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const handlePasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };
  return (
    <LayoutDashBoard>
      <div className="py-[50px] px-[130px]">
        <h1 className="text-text1 dark:text-white font-bold text-3xl ">
          Account Information
        </h1>
        <span className="text-sm font-medium text-text3 ">
          Update your account information
        </span>
        <form>
          <div className="flex items-center justify-between mt-20">
            <p className="text-text1 font-bold dark:text-white text-2xl">
              Personal Information
            </p>
            <span className="flex items-center gap-x-2 text-secondary font-bold  text-xl underline">
              <svg
                width={19}
                height={19}
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="underline"
              >
                <path
                  d="M11.2594 2.60022L3.04936 11.2902C2.73936 11.6202 2.43936 12.2702 2.37936 12.7202L2.00936 15.9602C1.87936 17.1302 2.71936 17.9302 3.87936 17.7302L7.09936 17.1802C7.54936 17.1002 8.1794 16.7702 8.4894 16.4302L16.6994 7.74022C18.1194 6.24022 18.7594 4.53022 16.5494 2.44022C14.3494 0.370217 12.6794 1.10022 11.2594 2.60022Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Edit
            </span>
          </div>
          <FieldRow>
            <Field>
              <Label>First Name</Label>
              <Input
                control={control}
                type="text"
                placeholder=""
                name="firstname"
              ></Input>
            </Field>
            <Field>
              <Label>Last Name</Label>
              <Input
                control={control}
                type="text"
                placeholder=""
                name="lastname"
              ></Input>
            </Field>
          </FieldRow>
          <FieldRow>
            <Field>
              <Label>Date</Label>
              <Input
                control={control}
                type="date"
                placeholder=""
                name="date"
              ></Input>
            </Field>
            <Field>
              <Label className="text-sm">Phone Number</Label>
              <Input
                control={control}
                type="text"
                placeholder=""
                name="phone"
              ></Input>
            </Field>
          </FieldRow>
          <div className="flex items-center justify-between mt-20">
            <p className="text-text1 font-bold dark:text-white text-2xl">
              Credentials
            </p>
            <span className="flex items-center gap-x-2 text-secondary font-bold  text-xl underline">
              <svg
                width={19}
                height={19}
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="underline"
              >
                <path
                  d="M11.2594 2.60022L3.04936 11.2902C2.73936 11.6202 2.43936 12.2702 2.37936 12.7202L2.00936 15.9602C1.87936 17.1302 2.71936 17.9302 3.87936 17.7302L7.09936 17.1802C7.54936 17.1002 8.1794 16.7702 8.4894 16.4302L16.6994 7.74022C18.1194 6.24022 18.7594 4.53022 16.5494 2.44022C14.3494 0.370217 12.6794 1.10022 11.2594 2.60022Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Edit
            </span>
          </div>
          <Field>
            <Label>Email</Label>
            <Input
              control={control}
              type="text"
              placeholder=""
              name="email"
            ></Input>
          </Field>
          <FieldRow>
            <Field>
              <Label>New Password</Label>
              <Input
                control={control}
                type={showPassword ? "text" : "password"}
                placeholder=""
                name="newPassword"
              >
                <ToogleEyes
                  onClick={handleTogglePassword}
                  open={showPassword}
                ></ToogleEyes>
              </Input>
            </Field>
            <Field>
              <Label className="text-sm">Confirm Password</Label>
              <Input
                control={control}
                type={showPasswordConfirm ? "text" : "password"}
                placeholder=""
                name="confirmPassword"
              >
                <ToogleEyes
                  onClick={handlePasswordConfirm}
                  open={showPasswordConfirm}
                ></ToogleEyes>
              </Input>
            </Field>
          </FieldRow>
        </form>
      </div>
    </LayoutDashBoard>
  );
};

export default ProfilePages;
