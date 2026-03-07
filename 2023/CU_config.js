var config_data = `
{
  "title": "2481 Match Scouting",
  "page_title": "2026 CIR",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter (First name + last initial)",
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
      "defaultValue": "2026ilpe",
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
        "dt": "Depot Trench<br>",
        "db": "Depot Bump<br>",
        "c": "Center<br>",
        "ob": "Outpost Bump<br>",
        "ot": "Outpost Trench<br>"
      },
      "defaultValue": "c"
    }
  ],
  "auton": [
    { "name": "Auto Climb",
      "code": "ac",
      "text-color": "red",
      "type": "checkbox"
    },
   { 
      "name": "Fuel Scored During Auto", 
      "code": "fsa", 
      "type": "text", 
      "size": 3, 
      "maxSize": 50 
    },
    { 
      "name": "Fuel Scored During Transition Phase", 
      "code": "fst", 
      "type": "text", 
      "size": 3, 
      "maxSize": 50 
    },
    { 
      "name": "Scoring Shift 1", 
      "code": "ss1", 
      "type": "text", 
      "size": 3, 
      "maxSize": 50 
    },
    { 
      "name": "Scoring Shift 2", 
      "code": "ss2", 
      "type": "text", 
      "size": 3, 
      "maxSize": 50 
    },
   
    { 
      "name": "Fuel Scored During Endgame", 
      "code": "fse", 
      "type": "text", 
      "size": 3, 
      "maxSize": 50 
    },
    { 
      "name": "Total Fouls", 
      "code": "ef", 
      "type": "counter" 
    },
    { 
      "name": "Endgame Climb", 
      "code": "egc", 
      "type": "radio",
      "choices": {
        "30": "L3<br>",
        "20": "L2<br>",
        "10": "L1<br>",
        "0": "Did not climb<br>"
      },
      "defaultValue": "0"
    },
    { 
      "name": "Preferred shooting location", 
      "code": "psl", 
      "type": "radio",
      "choices": {
        "fo": "In Front of Outpost<br>",
        "fd": "Near Depot<br>",
        "ut": "Under Trench<br>",
        "ah": "Against Hub<br>",
        "ab": "Against Bump<br>",
        "at": "Against Tower<br>",
        "nps": "No Preferred Spot"
      },
      "defaultValue": "nps"
    },
    { 
      "name": "Main Pickup Location", 
      "code": "am", 
      "type": "radio",
      "choices": {
        "op": "Outpost Area<br>",
        "de": "Depot Area<br>",
        "az": "Alliance Zone<br>",
        "nz": "Neutral Zone"
      }
    },
    { 
      "name": "Inactive Strategy", 
      "code": "ias", 
      "type": "radio",
      "choices": {
        "dfs": "Defense<br>",
        "puf": "Pickup Fuel<br>",
        "pss": "Feeding<br>",
        "noa": "none of the above"
      },
      "defaultValue": "noa"
    },
   { "name": "Time to Climb",
      "code": "ttc",
      "type":"radio",
      "choices": {
        "0": "Less than 10 sec<br>",
        "1": "Between 10 and 20 sec<br>",
        "2": "More than 20 sec<br>",
        "n": "Didnt Climb"
      },
      "defaultValue": "n"
    },   
    { "name": "Robot Was Defended | 0 = N/A | Score 1-5 | 1 -> Robot slowed 10% | 3 -> Robot slowed 50% | 5 -> Robot shut down 100%",
      "code": "fwd",
      "type": "counter"
    },
    { "name": "Robot Played Defense | 0 = N/A | Score 1-5 | 1 -> Robot slowed 10% | 3 -> Robot slowed 50% | 5 -> Robot shut down 100%",
      "code": "fpd",
      "type": "counter"
    }
  ]

}`;
