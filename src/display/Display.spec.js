// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

test("<App /> snapshot", () => {
  const wrapper = rtl.render(<Display />)

  // Saves our snapshot to disk, or checks an existing snapshot on the disk.
  // If it looks at all different, the test will fail.
  expect(wrapper.asFragment()).toMatchSnapshot()
})