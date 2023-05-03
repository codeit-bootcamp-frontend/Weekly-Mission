import childStyles from "/src/components/Star.module.css";

function Star({ styles }) {

  function toggleLikeIcon(e) {
    e.preventDefault();
    const star = e.target;
    star.classList.toggle(childStyles.inactive);
    star.classList.toggle(childStyles.active);
  }

  return (
    <>
      <div className = {styles.star}>
        <button onClick={toggleLikeIcon} className={childStyles.inactive}></button>
      </div>
    </>
  );
}

export default Star;
