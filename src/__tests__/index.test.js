import React from "react"
import renderer from "react-test-renderer"
import IndexPage from "../pages/index"

describe("IndexPage", () => {
  xit("renders correctly", () => {
    const location = {
      pathname: "/",
    }

    const tree = renderer.create(<IndexPage location={location} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})