/*
 * This function is used in order to calculate the index
 * of the next fragment.
 *  `variants` — a list of indexes, e.g. [1, 0, 10]
 *  `current` — current index, may not be present in the list.
 *  `shift` — how many indexes to skip, use negative to move
 *   backwards.
 *
 * Returns `null` if the index is out of bounds.
 */
const nextIndex = (variants, current, shift = 1) => {
  const sorted = unique(variants).sort()
  const closest = closestIndex(sorted, current, shift > 0)

  if (closest === null) {
    return null
  }

  return elementAt(sorted, closest + shift)
}

const closestIndex = (sortedList, elem, right = true) => {
  const predicate = x => (right ? x >= elem : elem >= x)
  const sliced = sortedList.filter(predicate)

  if (!sliced.length) {
    return null
  }

  const closestElement = right ? sliced[0] : sliced[sliced.length - 1]
  return sortedList.indexOf(closestElement)
}

const elementAt = (array, index) => {
  if (index < 0 || index >= array.length) return null
  return array[index]
}

// returns a list of unique elements of the array
const unique = list => {
  let result = []
  list.forEach(x => result.indexOf(x) === -1 && result.push(x))
  return result
}

export default nextIndex
