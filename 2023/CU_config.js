var config_data = `
{
  "title": "2481 Match Scouting",
  "page_title": "2026 Worlds",
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
      "defaultValue": "2026alhu",
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
    { "name": "Robot Start Location (relative to driver station)",
      "code": "rsl",
      "type":"radio",
      "choices": {
        "dt": "Depot Trench<br>",
        "db": "Depot Bump<br>",
        "c": "Center<br>",
        "ob": "Outpost Bump<br>",
        "ot": "Outpost Trench<br>",
        "nos": "Did Not Show<br>"
      },
      "defaultValue": "nos"
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
      "type": "radio",
      "choices": {
        "150": "150+<br>",
        "125": "100-149<br>",
        "85": "75-99<br>",
        "60": "50-74<br>",
        "35": "25-49<br>",
        "15": "10-24<br>",
        "5": "1-9<br>",
        "0": "Did Not Score<br>",
        "manual": "Enter Custom Number Below"
      },
      "defaultValue": "0"
    },
    {
      "name": "Custom Fuel Count",
      "code": "cfa",
      "type": "number",
      "placeholder": "Type exact number here...",
      "defaultValue": 0
    },
    { 
      "name": "Fuel Scored During Transition Phase", 
      "code": "fst", 
      "type": "radio",
      "choices": {
        "150": "150+<br>",
        "125": "100-149<br>",
        "85": "75-99<br>",
        "60": "50-74<br>",
        "35": "25-49<br>",
        "15": "10-24<br>",
        "5": "1-9<br>",
        "0": "Did Not Score<br>",
        "manual": "Enter Custom Number Below"
      },
      "defaultValue": "0"
    },
    {
      "name": "Custom Fuel Count",
      "code": "cft",
      "type": "number",
      "placeholder": "Type exact number here...",
      "defaultValue": 0
    },
    { 
      "name": "Fuel Scored For Shift 1", 
      "code": "ss1", 
      "type": "radio",
      "choices": {
        "150": "150+<br>",
        "125": "100-149<br>",
        "85": "75-99<br>",
        "60": "50-74<br>",
        "35": "25-49<br>",
        "15": "10-24<br>",
        "5": "1-9<br>",
        "0": "Did Not Score<br>",
        "manual": "Enter Custom Number Below"
      },
      "defaultValue": "0"
    },
    {
      "name": "Custom Fuel Count",
      "code": "cf1",
      "type": "number",
      "placeholder": "Type exact number here...",
      "defaultValue": 0
    },
    { 
      "name": "Fuel Scored During Shift 2", 
      "code": "ss2", 
      "type": "radio",
      "choices": {
        "150": "150+<br>",
        "125": "100-149<br>",
        "85": "75-99<br>",
        "60": "50-74<br>",
        "35": "25-49<br>",
        "15": "10-24<br>",
        "5": "1-9<br>",
        "0": "Did Not Score<br>",
        "manual": "Enter Custom Number Below"
      },
      "defaultValue": "0"
    },
    {
      "name": "Custom Fuel Count",
      "code": "cf2",
      "type": "number",
      "placeholder": "Type exact number here...",
      "defaultValue": 0
    },
    { 
      "name": "Fuel Scored During Endgame", 
      "code": "fse", 
      "type": "radio",
      "choices": {
        "150": "150+<br>",
        "125": "100-149<br>",
        "85": "75-99<br>",
        "60": "50-74<br>",
        "35": "25-49<br>",
        "15": "10-24<br>",
        "5": "1-9<br>",
        "0": "Did Not Score<br>",
        "manual": "Enter Custom Number Below"
      },
      "defaultValue": "0"
    },
    {
      "name": "Custom Fuel Count",
      "code": "cfe",
      "type": "number",
      "placeholder": "Type exact number here...",
      "defaultValue": 0
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
        "fa": "Far<br>",
        "med": "Mid<br>",
        "clo": "Close<br>",
        "all": "Anywhere<br>",
        "ds": "Didnt Shoot"
      },
      "defaultValue": "ds"
    },
    { "name": "E-Stop (Check=Yes)",
      "code": "esp",
      "type": "checkbox"
    },
    { "name": "Disconnected (Check=Yes)",
      "code": "dsc",
      "type": "checkbox"
    },
  { "name": "Did They Break (Check=Yes)",
      "code": "dtb",
      "type": "checkbox"
    },
    { "name": "Robot Played Defense (Check=Yes)",
     "code": "deft",
      "type": "range",
      "min": 0,
      "max": 100,
      "default": 50
    },
    { "name": "Robot Was Defended (Check=Yes)",
      "code": "fwd",
      "type": "checkbox"
    }
  ]

}`;
