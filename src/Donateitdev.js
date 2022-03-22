import React, { useState } from "react";
import axios from "axios";

export const Donateitdev = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    device: "",
    devicedesc: "",
    devicepic: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormdata({ ...formdata, [name]: value });
  };
  const sendData = async () => {
    console.log(formdata);
    try {
      const res = await axios.post(
        "http://localhost:8000/getFormData",
        formdata
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "deviceimages");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqf4iqhxc/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setFormdata({ ...formdata, devicepic: file.secure_url });
  };

  return (
    <div className="donateitdev">
      <div className="img carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative mx-auto w-auto">
          <img
            src="https://thumbs.dreamstime.com/b/donation-concept-electronic-devices-isolated-white-background-desktop-computer-tablet-smartphone-screen-digital-162229878.jpg"
            className="block w-full"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center"></div>
        </div>
      </div>
      <div className="flex flex-col text-center w-full mt-4">
        <h2 className="heading text-3xl text-sky-500 tracking-widest font-bold title-font mb-1  text-2xl">
          DONATE IT DEVICES
        </h2>
        <p className="text-xl">
          If you have a working/non-working Computer,Laptop or Smartphone, then
          fill the form below.
        </p>
      </div>
      <div className="form px-4">
        <div className="container my-10 mx-auto lg:w-1/2 px-4 bg-gray-200 rounded-lg py-3">
          <label
            htmlFor="name"
            className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Name
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <i className="fad fa-user-alt text-sky-900"></i>
            </div>
            <input
              value={formdata.name}
              name="name"
              onChange={handleInputs}
              type="text"
              id="name"
              className="pl-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 outline-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <label
            htmlFor="email"
            className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <i className="fad fa-envelope text-sky-900"></i>
            </div>
            <input
              value={formdata.email}
              name="email"
              onChange={handleInputs}
              type="text"
              id="email"
              className="pl-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 outline-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <label
            htmlFor="phone"
            className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Phone
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <i className="fas fa-phone-alt text-sky-900"></i>
            </div>
            <input
              value={formdata.phone}
              name="phone"
              onChange={handleInputs}
              type="number"
              id="email"
              className="pl-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 outline-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                City
              </label>
              <input
                value={formdata.city}
                name="city"
                onChange={handleInputs}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 outline-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="grid-city"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                State
              </label>
              <div className="relative">
                <select
                  value={formdata.state}
                  name="state"
                  onChange={handleInputs}
                  className="block appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 outline-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="grid-state"
                >
                  <option>Andhra Pradesh</option>
                  <option>Andaman and Nicobar Islands</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chandigarh</option>
                  <option>Chhattisgarh</option>
                  <option>Dadar and Dadar and Nagar Haveli</option>
                  <option>Daman and Diu</option>
                  <option>Delhi</option>
                  <option>Lakshadweep</option>
                  <option>Puducherry</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jammu and Kashmir</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                htmlFor="email"
                className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Zip
              </label>
              <input
                value={formdata.zip}
                name="zip"
                onChange={handleInputs}
                className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 outline-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="grid-zip"
                type="number"
              />
            </div>
          </div>

          <div className="mt-4 inline-block relative lg:w-2/6 sm:w-2/4">
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">
              Select device
            </label>

            <select
              value={formdata.device}
              name="device"
              onChange={handleInputs}
              className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 outline-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Computer</option>
              <option>Laptop</option>
              <option>Smartphone</option>
              <option>Tablet</option>
              <option>Monitor</option>
              <option>Keyboard/Mouse</option>
              <option>Speaker</option>
              <option>Projector</option>
              <option>Webcam</option>
              <option>Speaker</option>
              <option>Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-6 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <label
            htmlFor="condition"
            className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Describe the condition of the device
          </label>
          <textarea
            value={formdata.devicedesc}
            name="devicedesc"
            onChange={handleInputs}
            id="condition"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-sky-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>

          <label
            className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300"
            htmlFor="user_avatar"
          >
            Upload picture of the device
          </label>
          <input
            type="file"
            name="file"
            onChange={uploadImage}
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 p-2.5 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
          />

          <button
            type="button"
            onClick={sendData}
            className="mt-4 text-white bg-emerald-500 hover:bg-emerald-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};
