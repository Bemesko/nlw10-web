// JSX - Javascript + XML (HTML)
export default function Home() {
  return <h1>Hello World</h1>;
}

export const getServerSideProps = async () => {
  const poolCountRaw = await fetch("http://localhost:3333/pools/count");
  const poolCount = await poolCountRaw.json();

  console.log(poolCount);

  return {
    props: {},
  };
};
