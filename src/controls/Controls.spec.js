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

test("buttons controlling lock and open", () => {
  const wrapper = rtl.render(<Controls />)
   const lock =wrapper.getByText(/lock/i)
   const open =wrapper.getByText(/close/i)

   expect(lock).toBeDefined()
   expect(open).toBeDefined()
})

test("button changes if clicked",() => {
    const { getByText } = rtl.render(<Controls />)
    const btn1 = getByText(/close/i)
    rtl.act(() => {
        fireEvent.click(btn1)
    })
    const btn2 = getByText(/lock/i)
    rtl.act(() => {
      fireEvent.click(btn2)
    })
})

// test("button on default", () => {
//   const { getByText } = rtl.render(<Controls />)
//   const btn3 = getByText(/unlock/i)
//   expect(btn3).toBeTruthy();
//     //  const btn4 = getByText(/open/i)
//     // rtl.act(() => {
//     //   fireEvent.click(btn4)
//     // })

// })
  



