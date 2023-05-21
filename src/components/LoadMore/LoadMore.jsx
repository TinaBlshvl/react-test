import css from '../LoadMore/LoadMore.module.css';

export const Button = ({ loadMore, numberPage }) => {
  const handleClick = () => {
    const newPage = numberPage + 1;
    loadMore(newPage);
  };

  return (
    <button className={css.button} onClick={handleClick} type="button">
      Load more
    </button>
  );
};
