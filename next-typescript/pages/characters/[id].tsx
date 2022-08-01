import { Character } from "../../types";
import Image from "next/image";
import imageLoader from "../../imageLoader";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";

function CharacterPage({ character }: { character: Character }) {
  return (
    <div>
      <h1>{character.name}</h1>
      <Image
        loader={imageLoader}
        unoptimized
        src={character.image}
        alt={character.name}
        width="200"
        height="200"
      />
    </div>
  );
}

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage) {
  // console.log(typeof CharacterPage);
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  );
  const character = await res.json();
  return {
    props: {
      character,
    },
  };
};
export default CharacterPage;
