import React from 'react'
import Search from './Search'
import ShowCard from './ShowCard'
import preload from '../public/data.json'
import { shallow } from 'enzyme'
import { shallowToJson} from 'enzyme-to-json'

test('Search snapshot test', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Search should render a ShowCard for each show', () => {
  const component = shallow(<Search />)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('Search should render correct amount of shows based on search term', () => {
  const searchTerm = 'house'
  const component = shallow(<Search />)
  component.find('input').simulate('change', {target: {value: searchTerm}})
  const showCount = preload.shows.filter((show) => (
    `${show.title} ${show.description}`.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
  )).length
  expect(component.find(ShowCard).length).toEqual(showCount)
})
