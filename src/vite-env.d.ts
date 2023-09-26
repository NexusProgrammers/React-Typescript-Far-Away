/// <reference types="vite/client" />

interface Item {
  id: number;
  description: string;
  quality: number;
  packed: boolean;
}

interface ItemProps {
  item: Item;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

interface FormProps {
  onAddItems: (item: Item) => void;
}

interface StatsProps {
  items: Item[];
}

interface PackingListProps {
  items: Item[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearList: () => void;
}
