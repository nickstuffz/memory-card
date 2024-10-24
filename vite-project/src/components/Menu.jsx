function Menu({ onResetClick }) {
  return (
    <div id="reset-container" className="flex justify-center">
      <button className="border-4" onClick={onResetClick}>
        Reset
      </button>
    </div>
  );
}

export default Menu;
