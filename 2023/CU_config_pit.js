var config_data = `
{
  "title": "2481 Scouting - Pit",
  "page_title": "2026 Alabama - Pit",
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
    { "name": "Wheel Width (in inches)",
      "code": "ww",
      "type": "text",
      "size": 1,
      "maxSize": 250
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
    { "name": "Fuel Intake Type",
      "code": "cit",
      "type":"radio",
      "choices": {
        "oo": "Outpost only<br>",
        "go": "Ground only<br>",
        "b": "Both<br>",
        "n": "N/A"
      },
      "defaultValue": "n"
    },
    { "name": "Max Hopper Capacity",
      "code": "mhc",
      "type": "text",
      "size": 1,
      "maxSize": 250
    },
    { "name": "Can They Go Under the Trench (check=yes)",
      "code": "cgt",
      "type": "checkbox",
      "defaultValue": "0"
    },
    { "name": "How Does Their Feeder to Shooter Work",
      "code": "fts",
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
