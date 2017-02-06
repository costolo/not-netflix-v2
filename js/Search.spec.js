/* global test expect */
import React from 'react'
import { Provider } from 'react-redux'
import Search, { Unwrapped as UnwrappedSearch } from './Search'
import { shallow, render } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { setSearchTerm } from './actionCreators'
import ShowCard from './ShowCard'
import store from './store'
import preload from '../public/data.json'

test('Search snapshot test', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Search should render a ShowCard for each show', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('Search should render correct amount of shows based on search term', () => {
  const searchTerm = 'house'
  store.dispatch(setSearchTerm(searchTerm))
  const component = render(<Provider store={store}><Search shows={preload.shows} /></Provider>)
  const showCount = preload.shows.filter((show) => (
    `${show.title} ${show.description}`.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
  )).length
  expect(component.find('.show-card').length).toEqual(showCount)
})
