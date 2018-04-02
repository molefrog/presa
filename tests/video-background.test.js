import { makeQuery } from './youtube-video'

describe('makeQuery', () => {
  it('serializes key-value pair using 1/0 instead of bools', () => {
    expect(makeQuery({ foo: true })).toEqual('foo=1')
    expect(makeQuery({ foo: false })).toEqual('foo=0')
  })

  it('supports multiple keys', () => {
    expect(makeQuery({ foo: true, bar: 'hello' })).toEqual('foo=1&bar=hello')
  })
})
