import nextIndex from '../src/components/fragment/next-index'

describe('nextIndex function', () => {
  it('gives the next index', () => {
    expect(nextIndex([0, 1, 2], 1)).toEqual(2)
    expect(nextIndex([0, 3, 5, 7], 5)).toEqual(7)
  })

  it('returns null when out of bounds', () => {
    expect(nextIndex([0, 2, 3], 5)).toEqual(null)
    expect(nextIndex([1], 5)).toEqual(null)
    expect(nextIndex([1], 1)).toEqual(null)
    expect(nextIndex([1, 2, 3], 2, -3)).toEqual(null)
  })

  it('ignores order and repeated objects', () => {
    expect(nextIndex([0, 4, 1, 1, 1], 1)).toEqual(4)
    expect(nextIndex([7, 2, 5], 2)).toEqual(5)
  })

  it('falls back to the closest element if current is missing', () => {
    expect(nextIndex([1, 7, 9], 0)).toEqual(7)
    expect(nextIndex([0, 1, 7, 9], 500, -2)).toEqual(1)
    expect(nextIndex([0, 7, 9], 2)).toEqual(9)
    expect(nextIndex([0, 7, 9], 2, -10)).toEqual(null)
    expect(nextIndex([0, 7, 9], 0, 10)).toEqual(null)
  })

  it('supports ∞/-∞ as elements', () => {
    expect(nextIndex([-Infinity, 0, 1, 2], 0, -1)).toEqual(-Infinity)
    expect(nextIndex([Infinity, 0, 1, 2], 2, 1)).toEqual(Infinity)
    expect(nextIndex([Infinity, 0, 1, 2], 2, 2)).toEqual(null)
  })
})
