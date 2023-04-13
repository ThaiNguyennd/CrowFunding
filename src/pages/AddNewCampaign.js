import React from "react";
import LayoutDashBoard from "../layout/LayoutDashBoard";
import FieldRow from "../components/field/FieldRow";
import Field from "../components/field/Field";
import Label from "../components/label/Label";
import { useForm } from "react-hook-form";
import { Input } from "../components/input";
import { Dropdown } from "../components/dropdown";
import Textarea from "../components/textareaer/Textarea";

const AddNewCampaign = () => {
  const { control } = useForm({ mode: "onChange" });
  return (
    <LayoutDashBoard>
      <div className="py-10 px-[66px] bg-white dark:bg-darksecondary rounded-lg  ">
        <div className="block text-center mb-10">
          <span className="py-4 px-14 bg-[#B2B3BD] dark:bg-darkstroke font-bold text-2xl dark:text-white text-text2 rounded-lg ">
            Start a Campaign 🚀
          </span>
        </div>
        <form>
          <FieldRow>
            <Field>
              <Label>Campaign Title *</Label>
              <Input
                control={control}
                placeholder="Write a titel"
                type="text"
                name="title"
              ></Input>
            </Field>
            <Field>
              <Label>Select a category *</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder="Select a category"
                  className="dark:text-text4 dark:bg-darksecondary"
                ></Dropdown.Select>
              </Dropdown>
              {/* <Dropdown.List>
                <Dropdown.Option>education</Dropdown.Option>
                <Dropdown.Option>education</Dropdown.Option>
                <Dropdown.Option>education</Dropdown.Option>
                <Dropdown.Option>education</Dropdown.Option>
              </Dropdown.List> */}
            </Field>
          </FieldRow>
          <Field>
            <Label>Short Description *</Label>
            <Textarea
              control={control}
              placeholder="Write a short description...."
              name="textarea"
            ></Textarea>
          </Field>
        </form>
      </div>
    </LayoutDashBoard>
  );
};

export default AddNewCampaign;
