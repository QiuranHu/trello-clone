// Type of the object that we provide to react-dnd.
export type ColumnDrageItem = {
  index: number;
  id: string; // id of the particular item.
  text: string;
  type: "COLUMN"; // Use type to know if it's a card or a column.
};

export type CardDragItem = {
  index: number;
  id: string;
  columnId: string;
  text: string;
  type: "CARD";
};

export type DragItem = ColumnDrageItem | CardDragItem;
