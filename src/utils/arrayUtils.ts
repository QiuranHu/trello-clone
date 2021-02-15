interface Item {
  id: string;
}
export const findItemIndexById = <T extends Item>(items: T[], id: string) => {
  return items.findIndex((item: T) => item.id === id);
};

// Generate a new array where object at index targetIndex is overriden
// with the newItem value.
// User type variable T to represent the type of the items in the array.
// All items in our array should have the same type.ß
export function overriedItemAtItem<T>(
  array: T[],
  newItem: T,
  targetIndex: number
) {
  return array.map((item, index) => {
    if (index !== targetIndex) {
      return item;
    }
    return newItem;
  });
}
