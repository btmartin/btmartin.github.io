var config_data = `
{
  "title": "2481 Scouting - Pit",
  "page_title": "2023 7 Rivers - Pit",
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
      "defaultValue": "2023wila",
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
    { "name": "Robot",
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
    { "name": "Auto Start Position",
      "code": "as",
      "gsCol": "autoStartPosition",
      "type": "field_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    },
    { "name": "Weight With Bumpers",
      "code": "wwb",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    },
    { "name": "Long Dimension",
      "code": "ld",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    },
    { "name": "Wide Dimension",
      "code": "wd",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    },
    { "name": "What autos can they do",
      "code": "au",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    },
    { "name": "Comments: Robot Build Quality",
      "code": "cob",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    },
    { "name": "Other Comments",
      "code": "coo",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    },
    { "name": "Drivetrain Type",
      "code": "dt",
      "type":"radio",
      "choices": {
        "s": "Swerve<br>",
        "t": "Tank<br>",
        "m": "Mecanum<br>",
        "o": "Omni",
        "r": "Other"
      },
      "defaultValue": "s"
    }
  ]
}`;
