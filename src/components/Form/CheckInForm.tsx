import React from "react";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
const CheckInForm = () => {
  return (
    <div className="flex flex-col items-start p-4 text-black  h-[78vh] w-full">
      <Image src={Logo} alt="" height={"60"} width={"60"} />
      <br />
      <h1 className="font-bold">
        Welcome to <span className="text-red-600">Clinic San Miguel!</span>
      </h1>
      <br />
      <div className="flex items-center ">
        <div className="flex itmes-center justify-center mx-1 font-semibold text-white text-xs bg-[#202B40] border-[4px] border-[#2D3C59]  rounded-[8px] px-3 py-2">
          {" "}
          New patient
        </div>{" "}
        <div className="flex itmes-center justify-center mx-1 font-semibold bg-white text-xs text-[#6B7A99] border-[4px] border-[#F5F6F7] rounded-[8px] px-3 py-2">
          Returning patient
        </div>
      </div>

      <TextField
        id="outlined-basic"
        label="Your Name"
        variant="outlined"
        className="flex w-[300px]  my-4 border border-zinc-700 rounded-[10px]"
      />
      <TextField
        id="outlined-basic"
        label="Email Address"
        variant="outlined"
        className="flex w-[300px]  my-4 border border-zinc-700 rounded-[10px]"
      />
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        className="flex w-[300px]  my-4 border border-zinc-700 rounded-[10px]"
      />
      <FormControl className="w-[300px]">
        <InputLabel id="demo-simple-select-label ">Select Treatment</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={""}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Diabetes</MenuItem>
          <MenuItem value={20}>Cancer</MenuItem>
          <MenuItem value={30}>COVID</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CheckInForm;
