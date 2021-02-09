import React from "react"
import { screen, render, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/extend-expect"
// Component
import App from "./App"

test("should render text", () => {
  render(<App />)

  expect(screen.getByText("Test me!")).toBeInTheDocument()
})

test("should render default Option", () => {
  render(<App />)

  expect(screen.queryByText("Option 1")).not.toBeInTheDocument()
})

test("should select an option on click", async () => {
  render(<App />)

  await act(async () => {
    userEvent.click(await screen.findByPlaceholderText("Please Select"))
  })
  await act(async () => {
    userEvent.click(await screen.findByText("Option 2"))
  })

  expect(
    await screen.findByPlaceholderText("Please Select")
  ).toHaveDisplayValue("Option 2")
})
