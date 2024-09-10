import Image from "next/image";

const artists = [
  {
    name: "BTS",
    image: "/bts.png",
    time: "14:00",
  },
  {
    name: "BLACKPINK",
    image: "/blackpink.png",
    time: "16:00",
  },
  {
    name: "EXO",
    image: "/exo.png",
    time: "18:00",
  },
  {
    name: "TWICE",
    image: "/twice.png",
    time: "20:00",
  },
];

const ArtistCards = () => (
  <div className="grid gap-6 lg:grid-cols-4">
    {artists.map((artist, index) => (
      <div key={index} className="rounded-lg border p-4 shadow-md">
        <Image
          alt={artist.name}
          className="mb-4 aspect-square w-full rounded-lg object-cover"
          height="400"
          src={artist.image}
          width="400"
        />
        <h3 className="mb-2 text-lg font-bold">{artist.name}</h3>
        <p className="text-sm text-gray-500">Passage à {artist.time}</p>
      </div>
    ))}
  </div>
);

export default ArtistCards;
