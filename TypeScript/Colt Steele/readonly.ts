type SongType = {
   readonly id: number, // readonly property
   title: string,
   artist: string,
   numOfStreams: number,
   credits: {
      producer: string,
      writer: string
   }
};

const currentPlayingSong: SongType = {
   id: 200110,
   title: "Unchained Melody",
   artist: "Righteous Brothers",
   numOfStreams: 12873321,
   credits: {
      producer: "Phil Specter",
      writer: "Alex North"
   }
};

console.log(currentPlayingSong.id); // valid

/*
   // invalid
   currentPlayingSong.id = 200;
*/