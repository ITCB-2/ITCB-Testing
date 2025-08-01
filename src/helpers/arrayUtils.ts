export const findItemByProperty = <T>(
  array: readonly T[],
  propertyName: keyof T,
  expectedValue: unknown,
): T => {
  const foundItem: T | undefined = array.find(
    (item) => item[propertyName] === expectedValue,
  )
  if (!foundItem) {
    throw new Error(
      `Failed to find item in array: No item found with property '${String(
        propertyName,
      )}' matching value '${expectedValue}'. Array contains ${array.length} items.`,
    )
  }
  return foundItem
}
