import { useDispatch, useSelector } from "react-redux";
import { ETypes, IInitialState } from "../redux/reducer/exmple";
import { wrapper } from "../redux/store";

const Home = () => {
  const { tick } = useSelector((state: IInitialState) => state);
  const dispatch = useDispatch();

  function changeState() {
    dispatch({ type: ETypes.CHANGE_STATE, payload: { tick: "Prueba" } });
  }

  return (
    <div>
      <p>Hola mundo {tick}</p>
      <button onClick={changeState}>Change</button>
    </div>
  );
};

// export const getServerSideProps = (context: GetServerSidePropsContext) => {
//   console.log(context.query.hola);
//   const query = context.query.hola;
//   return { props: { query } };
// };

export const getServerSideProps = wrapper.getServerSideProps(({ store }) => {
  store.dispatch({ type: ETypes.CHANGE_STATE, payload: { tick: "Server" } });
});

export default Home;
