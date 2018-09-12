import visibilityFilter from '../visibilityFilter'

describe('visibilityFilter reducer', () => {
  it('sets visibility filter to SHOW_COMPLETED', () => {
    expect(
      visibilityFilter('SHOW_ALL', {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED'
      })
    ).toEqual('SHOW_COMPLETED')
  })

  it('sets visibility filter to SHOW_ACTIVE', () => {
    expect(
      visibilityFilter('SHOW_ALL', {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ACTIVE'
      })
    ).toEqual('SHOW_ACTIVE')
  })

  it('sets visibility filter to SHOW_ALL', () => {
    expect(
      visibilityFilter('SHOW_ALL', {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ALL'
      })
    ).toEqual('SHOW_ALL')
  })

  it('sets visibility filter to SHOW_ALL if unknown action', () => {
    expect(
      visibilityFilter('SHOW_ALL', {
        type: 'SET_SOME_FILTER',
        filter: 'TEST'
      })
    ).toEqual('SHOW_ALL')
  })

  it('sets visibility filter according to previous state if unknown action', () => {
    expect(
      visibilityFilter('SHOW_COMPLETED', {
        type: 'SET_SOME_FILTER',
        filter: 'TEST'
      })
    ).toEqual('SHOW_COMPLETED')
  })
})
