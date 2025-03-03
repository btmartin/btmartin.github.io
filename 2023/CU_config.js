var config_data = `
{
  "title": "2481 Match Scouting",
  "page_title": "2025 Arkansas",
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
      "defaultValue": "2025ark",
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
        "p": "Coral Station - Processor Side<br>",
        "c": "Center<br>",
        "o": "Coral Station - Other<br>",
        "x": "Out of the way"
      },
      "defaultValue": "x"
    }
  ],
  "auton": [
   { "name": "Leave Bonus?",
      "code": "al",
      "type": "bool"
    },
    { "name": "Auto L4",
      "code": "ah",
      "text-color": "red",
      "type": "counter"
    },
    { "name": "Auto L3",
      "code": "am",
      "type": "counter"
    },
    { "name": "Auto L2",
      "code": "al",
      "type": "counter"
    },
    { "name": "Auto Trough",
      "code": "aam",
      "type": "counter"
    },
    { "name": "Auto Fouls",
      "code": "af",
      "type": "counter"
    },
    { "name": "Comments: Auto",
      "code": "aco",
      "type": "text",
      "size": 25,
      "maxSize": 100
    },
    { "name": "Teleop L4",
      "code": "th",
      "type": "counter"
    },
    { "name": "Teleop L3",
      "code": "tm",
      "type": "counter"
    },
    { "name": "Teleop L2",
      "code": "tl",
      "type": "counter"
    },
    { "name": "Teleop Trough",
      "code": "tt",
      "type": "counter"
    },
    { "name": "Processor",
      "code": "tp",
      "type": "counter"
    },
     { "name": "Net",
      "code": "tn",
      "type": "counter"
    },
     { "name": "Algae Removal",
      "code": "tar",
      "type": "counter"
    },
    { "name": "Teleoperated Fouls",
      "code": "tf",
      "type": "counter"
    },
    { "name": "Final Status",
      "code": "ef",
      "type":"radio",
      "choices": {
        "1": "Parked<br>",
        "3": "Shallow Cage<br>",
        "4": "Deep Cage<br>",
        "0": "No points"
      },
      "defaultValue": "0"
    },
    { "name": "Did they Break?",
      "code": "dtb",
      "type": "bool"
    },   
    { "name": "De-Algify <= 3 sec?",
      "code": "das",
      "type":"radio",
      "choices": {
        "1": "yes<br>",
        "0": "no<br>",
        "n": "N/A"
      },
      "defaultValue": "n"
    },
    { "name": "Pick Algae off ground <= 5 sec?",
      "code": "pag",
      "type":"radio",
      "choices": {
        "1": "yes<br>",
        "0": "no<br>",
        "n": "N/A"
      },
      "defaultValue": "n"
    },
     { "name": "Ground Coral Pickup | 0 = N/A | How long to pick up coral off ground (1-10 sec)",
      "code": "fgc",
      "type": "counter"
    },
    { "name": "Coral Station | 0 = N/A | How much time spent at coral station (1-10 sec)",
      "code": "fcs",
      "type": "counter"
    },
     { "name": "Time to Score Coral | 0 = N/A | Time from entering to leaving reef when scoring (1-10 sec)",
      "code": "fts",
      "type": "counter"
    },
    { "name": "Time to Net Score | 0 = N/A | Time from line-up back to original position or driving away (1-10 sec)",
      "code": "ftn",
      "type": "counter"
    },
    { "name": "Climb | 0 = N/A | Time from entering barge zone to being off ground (1-10 sec)",
      "code": "fcc",
      "type": "counter"
    },
    { "name": "Robot Was Defended (>50% of match) | 0 = N/A | Score 1-5 | 1 -> Robot slowed 10% | 3 -> Robot slowed 50% | 5 -> Robot shut down 100%",
      "code": "fwd",
      "type": "counter"
    },
    { "name": "Robot Played Defense (>50% of match) | 0 = N/A | Score 1-5 | 1 -> Robot slowed 10% | 3 -> Robot slowed 50% | 5 -> Robot shut down 100%",
      "code": "fpd",
      "type": "counter"
    },
    { "name": "Comments",
      "code": "coo",
      "type": "text",
      "size": 25,
      "maxSize": 200
    }
  ]

}`;
