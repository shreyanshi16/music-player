import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "False Hope",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      artist: "Nymano, Pandrezz",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10148",
      color: ["#956E8D", "#EFA099"],
      id: uuidv4(),
      active: "true"
    },
    {
      name: "Far From Home",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg",
      artist: "Toonorth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8127",
      color: ["#62573E", "#546F6E"],
      id: uuidv4(),
      active: "false"
    },
    {
      name: "After Dark",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/be9e5dca9d4c9015c407a2d2590af8a0e5e278ce-1024x1024.jpg",
      artist: "Sugi.wa",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8105",
      color: ["#FABC8F", "#66C094"],
      id: uuidv4(),
      active: "false"
    },
    {
      name: "Cozy Fire",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",
      artist: "xander.",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7955",
      color: ["#5B4B99", "#FCE7E6"],
      id: uuidv4(),
      active: "false"
    },
    {
      name: "Inside",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/edaf1202cf33c7a2a122b7494a7e4d3e643af45f-1024x1024.jpg",
      artist: "Miscél",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9322",
      color: ["#F5BD5C", "#B3506D"],
      id: uuidv4(),
      active: "false"
    },
    {
      name: "Lagoons",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      artist: "Strehlow, Chris Mazuera",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8266",
      color: ["#E4C3BE", "#F8B091"],
      id: uuidv4(),
      active: "false"
    },
    {
      name: "Embers",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/58028b4ad62050072228e4c833916e5512772399-1024x1024.jpg",
      artist: "Blue Wednesday, Aso",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9048",
      color: ["#392934", "#E1858F"],
      id: uuidv4(),
      active: "false"
    }
  ];
}

export default chillHop;
