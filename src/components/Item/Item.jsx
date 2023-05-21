import css from '../Item/Item.module.css';

import { ReactComponent as Logo } from 'images/logo.svg';
import title from 'images/title.svg';

import { Button } from '../Item/Item.styled.js';

import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/operations';

export const Item = ({ params, id }) => {
  const dispatch = useDispatch();

  const onClick = e => {
    e.preventDefault();

    if (e.target.name === params.user) {
      if (!params.following) {
        params.following = true;
        params.followers += 1;
      } else {
        params.following = false;
        params.followers -= 1;
      }
      dispatch(updateUser({ ...params, id }));
    }
  };

  const { user, avatar, tweets, followers, following } = params;
  return (
    <li className={css.li}>
      <Logo className={css.logo} width={76} height={22} />
      <img className={css.img} src={title} alt="main-img" />

      <div className={css.imgContainer}>
        <img className={css.avatar} src={avatar} alt="user-avatar" />
      </div>
      <div className={css.userContainer}>
        <p className={css.userText}>
          <span>{tweets}</span> Tweets
        </p>
        <p className={css.userText}>
          <span>{new Intl.NumberFormat('en-US').format(followers)} </span>
          Followers
        </p>
      </div>

      <Button
        className={css.btn}
        following={following}
        name={user}
        type="button"
        onClick={e => onClick(e)}
      >
        {following ? 'Following' : 'Follow'}
      </Button>
    </li>
  );
};
