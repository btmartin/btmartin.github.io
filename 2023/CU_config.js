var config_data = `
{
  "title": "2481 Match Scouting",
  "page_title": "2024 Worlds",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter",
      "code": "s",
      "gsCol": "scouter",
      "type": "scouter",
      "size": 15,
      "maxSize": 50,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "gsCol": "event",
      "type": "event",
      "defaultValue": "2024cur",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "gsCol": "level",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "gsCol": "matchNum",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot (Relative to the drivers looking at the robots, 1 is on the left, 2 is in the center, and 3 is on the right)",
      "code": "r",
      "gsCol": "robot",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "gsCol": "teamNum",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Robot Start Location(relative to driver station)",
      "code": "rsl",
      "type":"radio",
      "choices": {
        "a": "Amp Side<br>",
        "l": "Source Side<br>",
        "s": "Against Speaker<br>",
        "x": "Out of the way"
      },
      "defaultValue": "x"
    }
  ],
  "auton": [
    { "name": "Auto Speaker",
      "code": "as",
      "text-color": "red",
      "type": "counter"
    },
    { "name": "Auto Speaker Missed",
      "code": "asm",
      "type": "counter"
    },
    { "name": "Auto Amp",
      "code": "aa",
      "type": "counter"
    },
    { "name": "Auto Amp Missed",
      "code": "aam",
      "type": "counter"
    },
    { "name": "Auto Fouls",
      "code": "af",
      "type": "counter"
    },
    { "name": "Leave Bonus?",
      "code": "al",
      "type": "bool"
    },
    { "name": "Comments: Auto",
      "code": "aco",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    },
    { "name": "Teleop Speaker Scores",
      "code": "ts",
      "type": "counter"
    },
    { "name": "Teleop Speaker Misses",
      "code": "tsm",
      "type": "counter"
    },
    { "name": "Teleop Amp Scores",
      "code": "ta",
      "type": "counter"
    },
    { "name": "Teleop Amp Misses",
      "code": "tam",
      "type": "counter"
    },
    { "name": "Note Feed",
      "code": "tnf",
      "type": "counter"
    },
    { "name": "Teleoperated Fouls",
      "code": "tf",
      "type": "counter"
    },
    { "name": "Scored Speaker Against Subwoofer?",
      "code": "tsas",
      "type": "bool"
    },
    { "name": "Scored Speaker Between Subwoofer and Podium?",
      "code": "tssp",
      "type": "bool"
    },
    { "name": "Scored Speaker Between Podium and Wing Line?",
      "code": "tspw",
      "type": "bool"
    },
    { "name": "Scored Speaker Beyond Wing Line?",
      "code": "tsbw",
      "type": "bool"
    },
    { "name": "Played Defense?",
      "code": "tpd",
      "type": "bool"
    },
    { "name": "Was Defended?",
      "code": "twd",
      "type": "bool"
    },
    { "name": "Traps",
      "code": "et",
      "type": "counter"
    },
    { "name": "Final Status",
      "code": "ef",
      "type":"radio",
      "choices": {
        "1": "Parked<br>",
        "3": "Onstage<br>",
        "4": "Onstage Harmony<br>",
        "0": "No points"
      },
      "defaultValue": "0"
    },
    { "name": "Scored Microphone?",
      "code": "em",
      "type": "bool"
    },
    { "name": "Comments: Match Flow Issues",
      "code": "cof",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    },
    { "name": "Comments: Defense",
      "code": "cod",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    },
    { "name": "Comments: Other",
      "code": "coo",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    }
  ]
}`;
