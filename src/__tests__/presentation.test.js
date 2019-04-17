import React from 'react'
import renderer from 'react-test-renderer'
import Presentation from '../pages/presentation'
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

describe('Presentation', () => {
    it('renders correctly', () => {
        const location = {
            pathname: '/',
        }

        const tree = renderer
            .create(<Presentation location={location} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
