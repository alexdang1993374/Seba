import { v4 as uuidv4 } from "uuid";
//Audio
import blessingIt from "./audio/blessingit.wav";
import feather from "./audio/feather.wav";
import kumomi from "./audio/kumomi.wav";
import lady from "./audio/lady.wav";
import reflection from "./audio/reflection.wav";
import luv1 from "./audio/luv1.wav";
import luv2 from "./audio/luv2.wav";

function data() {
  return [
    {
      name: "Blessing It",
      cover:
        "https://lastfm.freetls.fastly.net/i/u/500x500/d0923aa8b7a3fbb2d9b456306750c083.jpg",
      artist: "Nujabes, Substantial, Pase Rock",
      audio: blessingIt,
      color: ["#FBFFFB", "#FEC46A"],
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
      color: ["#8AACDC", "#5B449E", "#D15091"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Luv (sic) pt2",
      cover:
        "https://img.discogs.com/nQRu2IkKhUxzKjYjohtfdBgY1XI=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-717275-1590728754-5600.png.jpg",
      artist: "Nujabes, Shing02",
      audio: luv2,
      color: ["#E2E6C3", "#E7A374", "#5D7335"],
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
      name: "Reflection Eternal",
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/51X-8sTHDGL._SX355_.jpg",
      artist: "Nujabes",
      audio: reflection,
      color: ["#774C95", "#D2EBDF"],
      id: uuidv4(),
      active: false,
    },

    //ADD MORE HERE
  ];
}

export default data;
