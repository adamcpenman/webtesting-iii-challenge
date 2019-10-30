// Test away!

import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";
import {fireEvent} from '@testing-library/react';

afterEach(rtl.cleanup);

test("<App /> snapshot", () => {
  const wrapper = rtl.render(<Controls />)

  expect(wrapper.asFragment()).toMatchSnapshot()
})

test("button changes if clicked",() => {
    const { getByText, findByText } = rtl.render(<Controls />)
    const btn1 = getByText(/close gate/i)
    rtl.act(() => {
        fireEvent.click(btn1)
    })
})

