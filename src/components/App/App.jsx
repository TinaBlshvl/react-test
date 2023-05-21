import css from '../App/App.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { loading, selectUsers } from 'redux/selectors';

import { Button } from '../LoadMore/LoadMore';
import { Loader } from '../Loader/Loader';
import { Item } from '../Item/Item';
import { List } from '../List/List.styled';

export const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const items = useSelector(selectUsers);
  const isLoading = useSelector(loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const loadMore = page => {
    setPage(page);
  };

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
      <Button value={search} loadMore={loadMore} numberPage={page} />
    </div>
  );
};
