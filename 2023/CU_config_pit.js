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
    { "name": "Team #",
      "code": "t",
      "gsCol": "teamNum",
      "type": "team",
      "min": 1,
      "max": 99999
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
        "o": "Omni<br>",
        "r": "Other"
      },
      "defaultValue": "s"
    }
  ]
}`;
