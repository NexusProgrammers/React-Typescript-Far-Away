import { FC, FormEvent, useState } from "react";

const Form: FC<FormProps> = ({ onAddItems }) => {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!description) return;
    const newItem: Item = {
      id: Date.now(),
      description,
      quality: quantity,
      packed: false,
    };
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😊 trip</h3>
      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        name="quantity"
        id="quantity"
        value={quantity.toString()}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Item..."
        value={description}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
