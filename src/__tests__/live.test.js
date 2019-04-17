import React from 'react'
import renderer from 'react-test-renderer'
import Live from '../pages/live'
import { StaticQuery } from 'gatsby'

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) =>
        render({
            site: {
                siteMetadata: {
                    title: `Ralph AI`,
                },
            },
        })
    )
})

describe('Live', () => {
    it('renders correctly', () => {
        const location = {
            pathname: '/',
        }

        const tree = renderer.create(<Live location={location} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
