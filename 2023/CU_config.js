var config_data = `
{
  "title": "2481 Scouting",
  "page_title": "2023 CIR",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023ilpe",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
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
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
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
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "code": "asg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Mobility Bonus?",
      "code": "am",
      "type": "bool"
    },
    { "name": "Docked",
      "code": "ad",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Auto Type (relative to driver station)",
      "code": "at",
      "type":"radio",
      "choices": {
        "l": "Left<br>",
        "r": "Right<br>",
        "c": "Center<br>",
        "o": "Other<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "code": "tct",
      "type": "cycle"
    },
    { "name": "Grid Scoring",
      "code": "tsg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
    },
    { "name": "Was Defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Who Defended this bot",
      "code": "who",
      "type": "text"
    },
    { "name": "Fouls",
      "code": "ls",
      "type": "counter"
    },
    { "name": "Cycling - Single Substation",
      "code": "css",
      "type": "bool"
    },
    { "name": "Cycling - Double Substation Shelf",
      "code": "cdss",
      "type": "bool"
    },
    { "name": "Cycling - Double Substation Floor",
      "code": "cdsf",
      "type": "bool"
    },
    { "name": "Cycling - Floor",
      "code": "cf",
      "type": "bool"
    },
    { "name": "No Cycling",
      "code": "nc",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Balance Speed",
      "code": "bs",
      "type":"radio",
      "choices": {
        "s": "Slow (&gt20)<br>",
        "m": "Medium (10 - 20)<br>",
        "f": "Fast (&lt10)<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Breakage / Connectivity Issues",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tipped",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Comments: Match Flow Issues",
      "code": "coa",
      "type": "text",
      "size": 15,
      "maxSize": 1000
    },
    { "name": "Comments: Balancing Details",
      "code": "cob",
      "type": "text",
      "size": 15,
      "maxSize": 1000
    },
    { "name": "Comments: Defense Details",
      "code": "coc",
      "type": "text",
      "size": 15,
      "maxSize": 1000
    },
    { "name": "Comments: Other",
      "code": "cod",
      "type": "text",
      "size": 15,
      "maxSize": 1000
    }
  ]
}`;
