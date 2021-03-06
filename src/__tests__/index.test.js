import React from 'react'
import renderer from 'react-test-renderer'
import IndexPage from '../pages/index'
import { StaticQuery } from 'gatsby'

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) =>
        render({
            site: {
                siteMetadata: {
                    title: `Test site name`,
                },
            },
        })
    )
})

describe('IndexPage', () => {
    it('renders correctly', () => {
        const location = {
            pathname: '/',
        }

        const tree = renderer.create(<IndexPage location={location} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
