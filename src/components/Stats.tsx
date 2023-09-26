import { FC } from "react";

const Stats: FC<StatsProps> = ({ items }) => {
  if (!items.length)
    return (
      <p className="footer_paragraph">
        Start Adding some items to your packing List 🚀
      </p>
    );

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;

  return (
    <footer>
      <em className="footer_paragraph">
        👜 You have {totalItems} items on your list, and you already packed
        {packedItems} ({((packedItems / totalItems) * 100).toFixed(2)}%)
      </em>
    </footer>
  );
};

export default Stats;
