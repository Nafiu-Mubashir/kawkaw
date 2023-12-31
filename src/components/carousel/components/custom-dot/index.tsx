const CustomDots = ({ onmove, index, onClick, active }: any) => {
  // onmove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <div className="relative top-[-60px]">
      <li
        className={`rounded-full w-3 h-3 m-1 cursor-pointer block md:hidden lg:hidden ${active ? "active bg-mine" : "inactive bg-gray-200"}`}
        onClick={() => onClick()}
      >
        {/* {index + 1} */}
      </li>
    </div>
  );
};

export default CustomDots