type Song = {
   title: string,
   artist: string,
   numOfStreams: number,
   credits: {
      producer: string,
      writer: string
   }
};

function calculatePayout(song: Song): number {
   return song.numOfStreams * 0.0033;
};

function printSong(song: Song): void {
   console.log(`${song.title} by ${song.artist}`);
};

const currentSong: Song = {
   title: "Unchained Melody",
   artist: "Righteous Brothers",
   numOfStreams: 12873321,
   credits: {
      producer: "Phil Specter",
      writer: "Alex North"
   }
};

const currentSongEarnings = calculatePayout(currentSong);
const currentSongDetails = printSong(currentSong);