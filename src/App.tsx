import  { FC, useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";



const initialItems: Item[] = [
  {
    id: 1,
    description: "Sunscreen",
    quality: 4,
    packed: false,
  },
  {
    id: 2,
    description: "Swimsuit",
    quality: 6,
    packed: false,
  },
  {
    id: 3,
    description: "Beach Towel",
    quality: 8,
    packed: false,
  },
];


const App: FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems);

  const handleAddItems = (newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setItems(initialItems);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
