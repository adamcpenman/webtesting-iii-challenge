// Test away
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";
import { template } from "@babel/core";

afterEach(rtl.cleanup);

test("<App /> snapshot", () => {
  const wrapper = rtl.render(<Dashboard />)

  expect(wrapper.asFragment()).toMatchSnapshot()
})


test('default state is open and unlocked', () => {
    const {queryByText} = rtl.render(<Dashboard />)

    expect(queryByText(/open/i)).toBeTruthy()
    expect(queryByText(/unlocked/i)).toBeTruthy()
})