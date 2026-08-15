// Update this file from the Google Sheet when the roster is complete.
// Standard audio names are auto-detected from mediaKey:
//   media/<mediaKey>_Music.wav, .mp3, or .m4a
//   media/<mediaKey>_Announce.mp3, .m4a, or numbered variants like _Announce_1.mp3
window.WALKUP_BOARD_CONFIG = {
  seasonLabel: "8U Twins Fall 2026",
  teamName: "Twins",
  storageKey: "twins_walkup_lineup_v1",
  celebrate: [
    "media/Celebrate_Music_1.wav",
    "media/Celebrate_Music_2.wav",
    "media/Celebrate_Music_3.wav"
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
      music: ["media/Jude_Music.wav"],
      announces: ["media/Jude_Announce_1.mp3", "media/Jude_Announce_2.mp3"]
    },
    {
      id: "calvin-ecker",
      mediaKey: "Calvin",
      name: "Calvin Ecker",
      song: "White Flag - Connor Price",
      start: "1.53",
      end: "2.3",
      music: ["media/Calvin_Music.wav"]
    },
    {
      id: "wyatt-ecker",
      mediaKey: "Wyatt",
      name: "Wyatt Ecker",
      song: "White Flag - Connor Price",
      start: "1.37",
      end: "2.3",
      music: ["media/Wyatt_Music.wav"]
    },
    {
      id: "callum-carson-alford",
      mediaKey: "Callum",
      name: "Callum Carson-Alford",
      number: "4",
      song: "The Final Countdown",
      start: "0.37",
      end: "1.25",
      music: ["media/Callum_Music.wav"]
    },
    {
      id: "josiah-whitworth",
      mediaKey: "Josiah",
      name: "Josiah Whitworth",
      song: "Batter Up",
      music: ["media/Josiah_Music.wav"]
    },
    {
      id: "asa-wenrich",
      mediaKey: "Asa",
      name: "Asa Wenrich"
    },
    {
      id: "chachi-wright",
      mediaKey: "Chachi",
      name: "Chachi Wright"
    },
    {
      id: "dakin-wooster",
      mediaKey: "Dakin",
      name: "Dakin Wooster"
    },
    {
      id: "enzo-balos",
      mediaKey: "Enzo",
      name: "Enzo Balos"
    },
    {
      id: "ernie-hardiman",
      mediaKey: "Ernie",
      name: "Ernie Hardiman"
    },
    {
      id: "oscar-supica",
      mediaKey: "Oscar",
      name: "Oscar Supica"
    }
  ]
};
