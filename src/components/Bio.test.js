import React from "react"
import renderer from "react-test-renderer"
import Bio from "./Bio"

describe("Bio", () => {
  it("renders correctly", () => {
    const person = {
      name: "Test name",
      phone: '15556667777'
    };
    const tree = renderer.create(<Bio person={{}} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
