import { Grid } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <Grid
        position="fixed"
        top="0"
        left="0"
        display="flex"
        justify-content="center"
        align-items="center"
        height="120"
        width="120"
        color="#5736A3"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
