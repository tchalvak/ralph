import React from 'react'
import renderer from 'react-test-renderer'
import Page2 from '../pages/page-2'
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

describe('Page 2', () => {
    it('renders correctly', () => {
        const location = {
            pathname: '/',
        }

        const tree = renderer.create(<Page2 location={location} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
