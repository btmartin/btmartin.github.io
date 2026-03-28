var config_data = `
{
  "title": "2481 Scouting - Pit",
  "page_title": "2026 Rocket City- Pit",
  "checkboxAs": "10",
  "pit": [
    { "name": "Scouter (First Name + Last Initial)",
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
    { "name": "Tread Width (in inches)",
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
    { "name": "Weight With Bumpers",
      "code": "bwp",
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
    { "name": "Hopper Capacity",
      "code": "mhc",
      "type": "text",
      "size": 5
      ,
      "maxSize": 250
    },
    { "name": "Can They Go Under the Trench (check=yes)",
      "code": "cgt",
      "type": "checkbox",
      "defaultValue": "0"
    },
    { "name": "How Many Gummy Bears Can They Fit Into Their Hopper? (Do NOT Use ANY Punctuation)",
      "code": "sts",
      "type": "text",
      "size": 25,
      "maxSize": 100000
    },
    { "name": "Comments (Do NOT Use ANY Punctuation)",
      "code": "coo",
      "type": "text",
      "size": 25,
      "maxSize": 1000
    }
  ]
}`;
