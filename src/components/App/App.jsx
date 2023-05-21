import css from '../App/App.module.css';

import { setPage } from 'redux/slice';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { selectLoading, selectUsers, selectPage } from 'redux/selectors';

import { Button } from '../LoadMore/LoadMore';
import { Loader } from '../Loader/Loader';
import { Item } from '../Item/Item';
import { List } from '../List/List.styled';

export const App = () => {
  const items = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {items.length > 0 && (
        <List>
          {items.map(({ id, ...params }) => (
            <Item key={id} params={params} id={id} />
          ))}
        </List>
      )}
      {isLoading && <Loader />}
      <Button type="button" className="baseBtn" onClick={handleLoadMore}>
        Load more
      </Button>
    </div>
  );
};
