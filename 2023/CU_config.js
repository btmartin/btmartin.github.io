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
      "name": "Main Pickup Location", 
      "code": "am", 
      "type": "radio",
      "choices": {
        "op": "Outpost<br>",
        "de": "Depot<br>",
        "nz": "Neutral Zone"
      }
    },
   { 
      "name": "Total Auto Fuel Scored", 
      "code": "fsh", 
      "type": "text", 
      "size": 3, 
      "maxSize": 50 
    },
    { 
      "name": "Total Teleop Fuel Scored", 
      "code": "fsh", 
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
     { "name": "Number of Cycles",
      "code": "noc",
      "type": "counter"
    },
    { 
      "name": "Preferred shooting location", 
      "code": "psl", 
      "type": "radio",
      "choices": {
        "fo": "In Front of Outpost<br>",
        "fd": "In Front of Depot<br>",
        "ut": "Under Trench<br>",
        "nps": "No Preferred Spot"
      },
      "defaultValue": "nps"
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
    { "name": "Robot Was Defended | 0 = N/A | Score 1-10 | 1 -> Robot slowed 10% | 5 -> Robot slowed 50% | 10 -> Robot shut down 100%",
      "code": "fwd",
      "type": "counter"
    },
    { "name": "Robot Played Defense | 0 = N/A | Score 1-10 | 1 -> Robot slowed 10% | 5 -> Robot slowed 50% | 10 -> Robot shut down 100%",
      "code": "fpd",
      "type": "counter"
    }
  ]

}`;
