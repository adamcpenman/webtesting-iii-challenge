// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

test("<App /> snapshot", () => {
  const wrapper = rtl.render(<Display />)
  
  expect(wrapper.asFragment()).toMatchSnapshot()
})