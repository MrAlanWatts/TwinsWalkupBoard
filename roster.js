// Update this file from the Google Sheet when the roster is complete.
// Standard audio names are auto-detected from mediaKey:
//   media/<mediaKey>_Music.mp3, .m4a, .wav, or numbered variants like _Music_1.mp3
//   media/<mediaKey>_Announce.mp3, .m4a, .wav, or numbered variants like _Announce_1.mp3
// Team tracks are auto-detected as Celebrate_Music_1.mp3 and Pregame_Music_1.mp3 variants.
window.WALKUP_BOARD_CONFIG = {
  seasonLabel: "8U Twins Fall 2026",
  teamName: "Twins",
  storageKey: "twins_walkup_lineup_v1",
  celebrate: [
    "media/Celebrate_Music_1.mp3",
    "media/Celebrate_Music_2.mp3",
    "media/Celebrate_Music_3.mp3"
  ],
  players: [
    {
      id: "jude-mindich",
      mediaKey: "Jude",
      name: "Jude Mindich",
      number: "2",
      nickname: "The Dude",
      song: "Hey Jude 2015 Remastered Version - The Beatles",
      start: "3:49",
      end: "4:24",
      music: ["media/Jude_Music.mp3"],
      announces: ["media/Jude_Announce_1.mp3", "media/Jude_Announce_2.mp3"]
    },
    {
      id: "calvin-ecker",
      mediaKey: "Calvin",
      name: "Calvin Ecker",
      number: "8",
      song: "White Flag - Connor Price",
      start: "1.53",
      end: "2.3",
      music: ["media/Calvin_Music.mp3"],
      announces: ["media/Calvin_Announce_1.mp3", "media/Calvin_Announce_2.mp3"]
    },
    {
      id: "wyatt-ecker",
      mediaKey: "Wyatt",
      name: "Wyatt Ecker",
      number: "9",  
      song: "White Flag - Connor Price",
      start: "1.37",
      end: "2.3",
      music: ["media/Wyatt_Music.mp3"],
      announces: ["media/Wyatt_Announce_1.mp3", "media/Wyatt_Announce_2.mp3"]
    },
    {
      id: "callum-carson-alford",
      mediaKey: "Callum",
      name: "Callum Carson-Alford",
      number: "4",
      song: "The Final Countdown",
      start: "0.37",
      end: "1.25",
      music: ["media/Callum_Music.mp3"],
      announces: ["media/Callum_Announce.mp3"]
    },
    {
      id: "josiah-whitworth",
      mediaKey: "Josiah",
      name: "Josiah Whitworth",
      number: "5",
      song: "Gods Plan - Drake",
      music: ["media/Josiah_Music.mp3"],
      announces: ["media/Josiah_Announce_1.mp3", "media/Josiah_Announce_2.mp3"]
    },
    {
      id: "asa-wenrich",
      mediaKey: "Asa",
      name: "Asa Wenrich",
      number: "7",
      song: "Smells Like Teen Spirit - Nirvana",
      music: ["media/Asa_Music.mp3"],
      announces: ["media/Asa_Announce.mp3"]
    },
    {
      id: "chachi-wright",
      mediaKey: "Chachi",
      name: "Chachi Wright",
      number: "1",
      music: ["media/Chachi_Music.mp3"],
      announces: ["media/Chachi_Announce.mp3"]
    },
    {
      id: "dakin-wooster",
      mediaKey: "Dakin",
      name: "Dakin Wooster",
      number: "6",
      music: ["media/Dakin_Music.mp3"],
      announces: ["media/Dakin_Announce.mp3"]
    },
    {
      id: "enzo-balos",
      mediaKey: "Enzo",
      name: "Enzo Balos",
      number: "11",
      music: ["media/Enzo_Music_1.mp3", "media/Enzo_Music_2.mp3"],
      announces: ["media/Enzo_Announce.mp3"]
    },
    {
      id: "ernie-hardiman",
      mediaKey: "Ernie",
      name: "Ernie Hardiman",
      number: "3",
      music: ["media/Ernie_Music.mp3"],
      announces: ["media/Ernie_Announce.mp3"]
    },
    {
      id: "oscar-supica",
      mediaKey: "Oscar",
      name: "Oscar Supica",
      number: "10",
      song: "Astronomia (Coffin Dance) - Huts",
      start: "0:07",
      music: ["media/Oscar_Music.mp3"],
      announces: ["media/Oscar_Announce_1.mp3", "media/Oscar_Announce_2.mp3"]
    }
  ]
};
