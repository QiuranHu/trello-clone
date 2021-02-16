import { useDrag } from "react-dnd";
import { useAppState } from "./AppStateContext";
import { DragItem } from "./DragItem";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useEffect } from "react";

// This hook will return a drag method that accepts the ref of
// a draggable element.
// When we start dragging, we store the item in our app state.
// When we stop, we reset it to undefined.
export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    item, // "item" contains the data about the dragged item.
    begin: () =>
      // "begin" is called when we start dragging an item.
      dispatch({
        type: "SET_DRAGGED_ITEM",
        payload: item,
      }),
    end: () =>
      // "end" is called when we release the item.
      dispatch({
        type: "SET_DRAGGED_ITEM",
        payload: undefined,
      }),
  });
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  });
  return { drag };
};
