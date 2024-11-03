import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Posts from './Posts'
//import axios from 'axios'

describe('Post Component', () => {
    test('should render if request successful', async() => {
        // jest.mock(axios)
        // axios.get.mockResolvedValueOnce(data)

        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async() => [{ id: 1, title: 'title 1' }]
        })

        render(<Posts />)

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0)
    })
})