import counters from './index'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

it('counter should be a function', () => {
    expect(counters).to.be.a('function')
})

it('should add a counter', () => {
    const before = deepFreeze([])
    const action = deepFreeze({type: 'ADD_COUNTER'})
    const after = [0]
    expect(counters(before, action)).to.be.deep.equal(after)
})

it('should add new a counter again', () => {
    const before = deepFreeze([0, 1])
    const action = deepFreeze({type: 'ADD_COUNTER'})
    const after = [0, 1, 0]
    expect(counters(before, action)).to.be.deep.equal(after)
})

it('should remove a counter', () => {
    const before = deepFreeze([0, 1, 2])
    const action = deepFreeze({type: 'REMOVE_COUNTER', index: 1})
    const after = [0, 2]
    expect(counters(before, action)).to.be.deep.equal(after)
})

it('should remove a counter again', () => {
    const before = deepFreeze([1, 1])
    const action = deepFreeze({type: 'REMOVE_COUNTER', index: 0})
    const after = [1]
    expect(counters(before, action)).to.be.deep.equal(after)
})