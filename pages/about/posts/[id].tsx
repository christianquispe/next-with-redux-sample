import { useRouter } from "next/router";

function id() {
  const router = useRouter();
  const { id, hola } = router.query;
  return <p>About {`${id} ${hola}`} </p>;
}

export default id;
