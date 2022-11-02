// JSX - Javascript + XML (HTML)
export default function Home(props) {
  return <h1>Count: {props.count}</h1>;
}

export const getServerSideProps = async () => {
  const responseRaw = await fetch("http://localhost:3333/pools/count");
  const responseJSON = await responseRaw.json();

  console.log(responseJSON);

  return {
    props: {
      count: responseJSON.poolCount,
    },
  };
};
