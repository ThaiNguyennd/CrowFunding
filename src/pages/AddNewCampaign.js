import React, { useEffect, useMemo, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import LayoutDashBoard from "../layout/LayoutDashBoard";
import FieldRow from "../components/field/FieldRow";
import Field from "../components/field/Field";
import Label from "../components/label/Label";
import { useForm } from "react-hook-form";
import { Input } from "../components/input";
import { Dropdown } from "../components/dropdown";
import Textarea from "../components/textareaer/Textarea";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import Button from "../components/button/Button";
import axios from "axios";
import useOnChange from "../hooks/useOnChange";
import ImageUpload from "../components/image/ImageUpload";
import { apiURL } from "../components/config/Config";
import { toast } from "react-toastify";
Quill.register("modules/imageUploader", ImageUploader);

const AddNewCampaign = () => {
  const [content, setContent] = useState();
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      // imageUploader: {
      //   upload: async (file) => {
      //     const bodyFormData = new FormData();
      //     bodyFormData.append("image", file);
      //     const response = await axios({
      //       method: "post",
      //       url: imgbbAPI,
      //       data: bodyFormData,
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //       },
      //     });
      //     return response.data.data.url;
      //   },
      // },
    }),
    []
  );
  const categoriesData = ["architecture", "education"];

  const { control, handleSubmit, setValue, watch, reset } = useForm({
    mode: "onChange",
  });
  const [countries, setCountries] = useState();
  const selectDropdown = (name, defaultValue = "") => {
    const value = watch(name) || defaultValue;
    return value;
  };
  const handleStartCampaign = async (values) => {
    try {
      await axios.post(`${apiURL}/campaigns`, {
        ...values,
        content,
      });
      toast.success("Create campaign successfully");
      reset({});
    } catch (error) {
      toast.error("Can not create new campaign");
    }
  };
  const handleSelectCategory = (value) => {
    setValue("category", value);
  };
  const handleSelectCountry = (value) => {
    setValue("country", value);
  };
  const [filterCountry, setFilterCountry] = useOnChange(500);

  useEffect(() => {
    async function fetch() {
      if (!filterCountry) return;
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${filterCountry}`
      );
      setCountries(response.data);
    }
    fetch();
  }, [filterCountry]);
  return (
    <LayoutDashBoard>
      <div className="py-10 px-[66px] bg-white dark:bg-darksecondary rounded-lg  ">
        <div className="block text-center mb-10">
          <span className="py-4 px-14 bg-[#B2B3BD] dark:bg-darkstroke font-bold text-2xl dark:text-white text-text2 rounded-lg ">
            Start a Campaign 🚀
          </span>
        </div>
        <form onSubmit={handleSubmit(handleStartCampaign)}>
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
                  placeholder={selectDropdown("category", "select category")}
                  className="dark:text-text4 dark:bg-darksecondary"
                ></Dropdown.Select>
                <Dropdown.List>
                  {categoriesData.map((category) => (
                    <Dropdown.Option
                      key={category}
                      onClick={() => handleSelectCategory(category)}
                    >
                      <span className="capitalize">{category}</span>
                    </Dropdown.Option>
                  ))}
                </Dropdown.List>
              </Dropdown>
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
          <Field>
            <Label>Story *</Label>
            <ReactQuill
              placeholder="Write your story......"
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
            />
          </Field>
          <FieldRow>
            <Field>
              <ImageUpload></ImageUpload>
            </Field>
          </FieldRow>
          <div className="my-10 bg-secondary bg-opacity-20 flex items-center gap-x-5 px-10 py-8 rounded-lg">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2287_14876)">
                <path
                  d="M26.4997 9.979H13.1663C12.6663 9.979 12.333 10.3123 12.333 10.8123C12.333 11.3123 12.6663 11.6457 13.1663 11.6457H26.4997C26.9997 11.6457 27.333 11.3123 27.333 10.8123C27.333 10.3123 26.9997 9.979 26.4997 9.979Z"
                  fill="white"
                />
                <path
                  d="M12.4999 7.81266C12.4999 8.146 12.8332 8.31266 13.1666 8.31266H26.4999C26.8332 8.31266 27.1666 8.146 27.1666 7.81266L30.4999 1.146C30.6666 0.812663 30.6666 0.479329 30.3332 0.145996C30.1666 -0.0206706 29.8332 -0.0206706 29.4999 0.145996L23.3332 3.146L20.4999 0.312663C20.1666 -0.0206706 19.6666 -0.0206706 19.3332 0.312663L16.3332 3.146L10.1666 0.145996C9.83324 -0.0206706 9.4999 -0.0206706 9.16657 0.145996C8.83324 0.312663 8.9999 0.812663 9.16657 1.146L12.4999 7.81266Z"
                  fill="white"
                />
                <path
                  d="M27.1667 13.6456C27 13.4789 26.6667 13.3123 26.5 13.3123H13.1667C13 13.3123 12.6667 13.4789 12.5 13.6456C12.1667 13.9789 4 22.6456 4 27.4789C4 34.3123 11.1667 39.9789 19.8333 39.9789C28.5 39.9789 35.6667 34.3123 35.6667 27.4789C35.6667 22.6456 27.5 13.9789 27.1667 13.6456ZM20.6667 33.3123V34.1456C20.6667 34.6456 20.3333 34.9789 19.8333 34.9789C19.3333 34.9789 19 34.6456 19 34.1456V33.3123C17.1667 32.9789 15.8333 31.8123 15.6667 30.3123C15.6667 29.8123 16 29.4789 16.5 29.4789C17 29.4789 17.3333 29.8123 17.3333 30.3123C17.3333 30.9789 18.1667 31.6456 19 31.8123V28.4789C16.8333 27.9789 15.6667 26.8123 15.6667 25.3123C15.6667 23.6456 17.1667 22.3123 19 21.9789V21.1456C19 20.6456 19.3333 20.3123 19.8333 20.3123C20.3333 20.3123 20.6667 20.6456 20.6667 21.1456V21.6456C22.5 21.9789 23.8333 23.1456 24 24.6456C24 25.1456 23.6667 25.4789 23.1667 25.4789C22.6667 25.4789 22.3333 25.1456 22.3333 24.6456C22.3333 23.9789 21.5 23.3123 20.6667 23.1456V26.4789C22.8333 26.9789 24 28.1456 24 29.6456C24 31.6456 22.5 32.9789 20.6667 33.3123Z"
                  fill="white"
                />
                <path
                  d="M20.667 28.4785V31.4785C21.667 31.3119 22.3337 30.6452 22.3337 29.9785C22.3337 29.3119 21.8337 28.8118 20.667 28.4785Z"
                  fill="white"
                />
                <path
                  d="M17.333 24.9788C17.333 25.6454 17.833 26.1454 18.9997 26.4788V23.4788C17.9997 23.6454 17.333 24.3121 17.333 24.9788Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2287_14876">
                  <rect
                    width="39.6667"
                    height="39.9579"
                    fill="white"
                    transform="translate(0 0.0209961)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="text-text1 dark:text-white font-bold text-2xl">
              You will get 90% of total raised
            </span>
          </div>
          <FieldRow>
            <Field>
              <Label>Goal *</Label>
              <Input
                control={control}
                name="goal"
                type="text"
                placeholder="$0.00 USD"
              ></Input>
            </Field>
            <Field>
              <Label>Raised Amount *</Label>
              <Input
                control={control}
                name="raised"
                type="text"
                placeholder="$0.00 USD"
              ></Input>
            </Field>
          </FieldRow>
          <FieldRow>
            <Field>
              <Label>Amount Prefilled</Label>
              <Input
                control={control}
                name="amount"
                type="text"
                placeholder="Amount Prefilled"
              ></Input>
              <span className="text-text3 mt-3 font-medium text-sm">
                {" "}
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </span>
            </Field>
            <Field>
              <Label>Video</Label>
              <Input
                control={control}
                name="video"
                type="text"
                placeholder="Video"
              ></Input>
              <span className="text-text3 mt-3 font-medium text-sm">
                {" "}
                Place Youtube or Vimeo Video URL
              </span>
            </Field>
          </FieldRow>
          <FieldRow>
            <Field>
              <Label>Campaign End Method</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder="Select one"
                  className="dark:text-text4 dark:bg-darksecondary"
                ></Dropdown.Select>
              </Dropdown>
            </Field>
            <Field>
              <Label>Conutry</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={selectDropdown("country", "Select a conutry")}
                  className="dark:text-text4 dark:bg-darksecondary"
                ></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Search
                    placeholder="search country.."
                    onChange={setFilterCountry}
                  ></Dropdown.Search>
                  {countries?.length > 0 &&
                    countries.map((country) => (
                      <Dropdown.Option
                        key={country?.name?.common}
                        onClick={() =>
                          handleSelectCountry(country?.name?.common)
                        }
                      >
                        {country?.name?.common}
                      </Dropdown.Option>
                    ))}
                </Dropdown.List>
              </Dropdown>
            </Field>
          </FieldRow>
          <FieldRow>
            <Field>
              <Label>Start Date</Label>
              <Input
                control={control}
                name="start-date"
                type="date"
                placeholder="Start Date"
              ></Input>
            </Field>
            <Field>
              <Label>End Date</Label>
              <Input
                control={control}
                name="end-date"
                type="date"
                placeholder="End date"
              ></Input>
            </Field>
          </FieldRow>
          <Button
            className="bg-primary font-bold text-xl px-8 py-5 flex mx-auto my-10 mt-14"
            type="submit"
          >
            Submit new campaign{" "}
          </Button>
        </form>
      </div>
    </LayoutDashBoard>
  );
};

export default AddNewCampaign;
