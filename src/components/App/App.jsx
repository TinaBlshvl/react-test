import css from '../App/App.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { loading, selectUsers } from 'redux/selectors';

import { Button } from '../LoadMore/LoadMore';
import { Loader } from '../Loader/Loader';
import { Item } from '../Item/Item';
import { List } from '../List/List.styled';

export const App = () => {
  const items = useSelector(selectUsers);
  const isLoading = useSelector(loading);
  const dispatch = useDispatch();

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
      <Button />
    </div>
  );
};
