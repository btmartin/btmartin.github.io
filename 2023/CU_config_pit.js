var config_data = `
{
  "title": "2481 Scouting - Pit",
  "page_title": "2023 Worlds - Pit",
  "checkboxAs": "10",
  "pit": [
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
    },
    { "name": "Weight Without Bumpers",
      "code": "wwb",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    },
    { "name": "Dimensions No Bumpers",
      "code": "dnb",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    },
    { "name": "Drive Under Stage?",
      "code": "dus",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    },
    { "name": "Comments",
      "code": "coo",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    }
  ]
}`;
