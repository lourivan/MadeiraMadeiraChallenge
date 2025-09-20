import axios from 'axios'
import Plp from '~/modules/PLP/pages/plp'
import { render, screen, waitFor } from '~/commons/utils/test-utils'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockedData = {
  data: [
    {
      id: 1,
      title: 'Notebook Gamer',
      price: 5000,
      category: 'jewelery',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Mouse Wireless',
      price: 150,
      category: 'electronics',
      image: 'https://via.placeholder.com/150',
    },
  ],
}

describe('ProductList Screen', () => {
  it('Should show loader and no products in the screen', async () => {
    mockedAxios.get.mockResolvedValueOnce([])
    const { queryByTestId, getByText } = render(<Plp />)
    expect(getByText('Carregando produtos...')).toBeOnTheScreen()

    await waitFor(async () => {
      await screen.findByText('Não ha produtos a serem exibidos')
    })
    expect(queryByTestId('loader')).toBeNull()
    expect(getByText('Não ha produtos a serem exibidos')).toBeTruthy()
  })

  it('Render products list after load', async () => {
    mockedAxios.get.mockResolvedValueOnce(mockedData)

    const { getByText, queryByTestId, getByTestId } = render(<Plp />)

    expect(getByText('Carregando produtos...')).toBeOnTheScreen()

    await waitFor(() => {
      expect(queryByTestId('loader')).toBeNull()
      expect(getByText('Notebook Gamer')).toBeTruthy()
      expect(getByText('jewelery')).toBeTruthy()
      expect(getByText('R$ 5.000,00')).toBeTruthy()
      expect(getByText('Mouse Wireless')).toBeTruthy()
      expect(getByText('Catálogo de produtos')).toBeTruthy()
    })
  })
})
