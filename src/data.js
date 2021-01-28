import { v4 as uuidv4 } from "uuid";
//Audio
import blessingIt from "./audio/blessingit.mp3";
import feather from "./audio/feather.mp3";
import kumomi from "./audio/kumomi.mp3";
import lady from "./audio/lady.mp3";
import reflection from "./audio/reflection.mp3";
import luv1 from "./audio/luv1.mp3";
import luv2 from "./audio/luv2.mp3";
import luv3 from "./audio/luv3.mp3";
import fowl from "./audio/fowl.mp3";
import another from "./audio/another.mp3";

function data() {
  return [
    {
      name: "Blessing It",
      cover:
        "https://lastfm.freetls.fastly.net/i/u/500x500/d0923aa8b7a3fbb2d9b456306750c083.jpg",
      artist: "Nujabes, Substantial, Pase Rock",
      audio: blessingIt,
      color: ["#7FA987", "#FEC46A"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Feather",
      cover:
        "https://lastfm.freetls.fastly.net/i/u/ar0/e605e0031a208775b7ac76f8c34290e3.jpg",
      artist: "Nujabes, Cise Starr, Akin",
      audio: feather,
      color: ["#BA2E25", "#327090"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Lady Brown",
      cover: "https://i1.sndcdn.com/artworks-000242434589-tww40w-t500x500.jpg",
      artist: "Nujabes, Cise Starr",
      audio: lady,
      color: ["#DAAB7C", "#08070A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Luv (sic)",
      cover:
        "https://img.discogs.com/cWrUrK4dWfGty1JAJiEAP6NsNJA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4374831-1374918126-8103.jpeg.jpg",
      artist: "Nujabes, Shing02",
      audio: luv1,
      color: ["#8AACDC", "#5B449E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Luv (sic) pt2",
      cover:
        "https://img.discogs.com/nQRu2IkKhUxzKjYjohtfdBgY1XI=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-717275-1590728754-5600.png.jpg",
      artist: "Nujabes, Shing02",
      audio: luv2,
      color: ["#E0E3BB", "#E7A374"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Luv (sic) pt3",
      cover:
        "https://img.discogs.com/mzS09Eng30IZQUR2xfIHgN5lm_g=/fit-in/500x502/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6661930-1424106558-8339.jpeg.jpg",
      artist: "Nujabes, Shing02",
      audio: luv3,
      color: ["#3963AC", "#EEB2CC"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Kumomi",
      cover:
        "https://images.genius.com/bc0e1ebb115f7517604adc5674b6a02a.600x600x1.jpg",
      artist: "Nujabes",
      audio: kumomi,
      color: ["#D52A4A", "#6FB5D6"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Far Fowls",
      cover: "https://i1.sndcdn.com/artworks-000101632567-cyiskp-t500x500.jpg",
      artist: "Nujabes",
      audio: fowl,
      color: ["#EE7AAB", "#14A7AF"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Another Reflection",
      cover:
        "https://img.rapzh.com/rapgod.swiftcarrot.com/4b7328ad9592d34da562a2177b4f5a2062f11dbb_400x400.jpg",
      artist: "Nujabes",
      audio: another,
      color: ["#FBCD0D", "#46B5D0"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection Eternal",
      cover:
        "https://img.discogs.com/2XQuzES3IV9NjW1I3snXGN7LGC8=/fit-in/600x599/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2277348-1374917247-6471.jpeg.jpg",
      artist: "Nujabes",
      audio: reflection,
      color: ["#E5A5BF", "#FDD38B"],
      id: uuidv4(),
      active: false,
    },

    //ADD MORE HERE
  ];
}

export default data;
