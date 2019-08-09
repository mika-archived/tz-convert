type Zone = {
  territory: string;
  type: string | string[];
};

type TimeZoneInfo = {
  // IANA TimeZone Canonical Name
  i: Zone[];

  // Microsoft (Windows) TimeZone Index Value
  w: string;
};

// Timezone Conversion Table
// This is based on Unicode CLDR and Windows Registry Data
const timezones: TimeZoneInfo[] = [
  {
    w: "Afghanistan Standard Time",
    i: [
      { territory: "001", type: ["Asia/Kabul"] },
      { territory: "AF", type: ["Asia/Kabul"] }
    ]
  },
  {
    w: "Alaskan Standard Time",
    i: [
      { territory: "001", type: ["America/Anchorage"] },
      {
        territory: "US",
        type: [
          "America/Anchorage",
          "America/Juneau",
          "America/Nome",
          "America/Sitka",
          "America/Yakutat"
        ]
      }
    ]
  },
  {
    w: "Aleutian Standard Time",
    i: [
      { territory: "001", type: ["America/Adak"] },
      { territory: "US", type: ["America/Adak"] }
    ]
  },
  {
    w: "Altai Standard Time",
    i: [
      { territory: "001", type: ["Asia/Barnaul"] },
      { territory: "RU", type: ["Asia/Barnaul"] }
    ]
  },
  {
    w: "Arab Standard Time",
    i: [
      { territory: "001", type: ["Asia/Riyadh"] },
      { territory: "BH", type: ["Asia/Bahrain"] },
      { territory: "KW", type: ["Asia/Kuwait"] },
      { territory: "QA", type: ["Asia/Qatar"] },
      { territory: "SA", type: ["Asia/Riyadh"] },
      { territory: "YE", type: ["Asia/Aden"] }
    ]
  },
  {
    w: "Arabian Standard Time",
    i: [
      { territory: "001", type: ["Asia/Dubai"] },
      { territory: "AE", type: ["Asia/Dubai"] },
      { territory: "OM", type: ["Asia/Muscat"] },
      { territory: "ZZ", type: ["Etc/GMT-4"] }
    ]
  },
  {
    w: "Arabic Standard Time",
    i: [
      { territory: "001", type: ["Asia/Baghdad"] },
      { territory: "IQ", type: ["Asia/Baghdad"] }
    ]
  },
  {
    w: "Argentina Standard Time",
    i: [
      { territory: "001", type: ["America/Buenos_Aires"] },
      {
        territory: "AR",
        type: [
          "America/Buenos_Aires",
          "America/Argentina/La_Rioja",
          "America/Argentina/Rio_Gallegos",
          "America/Argentina/Salta",
          "America/Argentina/San_Juan",
          "America/Argentina/San_Luis",
          "America/Argentina/Tucuman",
          "America/Argentina/Ushuaia",
          "America/Catamarca",
          "America/Cordoba",
          "America/Jujuy",
          "America/Mendoza"
        ]
      }
    ]
  },
  {
    w: "Astrakhan Standard Time",
    i: [
      { territory: "001", type: ["Europe/Astrakhan"] },
      { territory: "RU", type: ["Europe/Astrakhan", "Europe/Ulyanovsk"] }
    ]
  },
  {
    w: "Atlantic Standard Time",
    i: [
      { territory: "001", type: ["America/Halifax"] },
      { territory: "BM", type: ["Atlantic/Bermuda"] },
      {
        territory: "CA",
        type: [
          "America/Halifax",
          "America/Glace_Bay",
          "America/Goose_Bay",
          "America/Moncton"
        ]
      },
      { territory: "GL", type: ["America/Thule"] }
    ]
  },
  {
    w: "AUS Central Standard Time",
    i: [
      { territory: "001", type: ["Australia/Darwin"] },
      { territory: "AU", type: ["Australia/Darwin"] }
    ]
  },
  {
    w: "Aus Central W. Standard Time",
    i: [
      { territory: "001", type: ["Australia/Eucla"] },
      { territory: "AU", type: ["Australia/Eucla"] }
    ]
  },
  {
    w: "AUS Eastern Standard Time",
    i: [
      { territory: "001", type: ["Australia/Sydney"] },
      { territory: "AU", type: ["Australia/Sydney", "Australia/Melbourne"] }
    ]
  },
  {
    w: "Azerbaijan Standard Time",
    i: [
      { territory: "001", type: ["Asia/Baku"] },
      { territory: "AZ", type: ["Asia/Baku"] }
    ]
  },
  {
    w: "Azores Standard Time",
    i: [
      { territory: "001", type: ["Atlantic/Azores"] },
      { territory: "GL", type: ["America/Scoresbysund"] },
      { territory: "PT", type: ["Atlantic/Azores"] }
    ]
  },
  {
    w: "Bahia Standard Time",
    i: [
      { territory: "001", type: ["America/Bahia"] },
      { territory: "BR", type: ["America/Bahia"] }
    ]
  },
  {
    w: "Bangladesh Standard Time",
    i: [
      { territory: "001", type: ["Asia/Dhaka"] },
      { territory: "BD", type: ["Asia/Dhaka"] },
      { territory: "BT", type: ["Asia/Thimphu"] }
    ]
  },
  {
    w: "Belarus Standard Time",
    i: [
      { territory: "001", type: ["Europe/Minsk"] },
      { territory: "BY", type: ["Europe/Minsk"] }
    ]
  },
  {
    w: "Bougainville Standard Time",
    i: [
      { territory: "001", type: ["Pacific/Bougainville"] },
      { territory: "PG", type: ["Pacific/Bougainville"] }
    ]
  },
  {
    w: "Canada Central Standard Time",
    i: [
      { territory: "001", type: ["America/Regina"] },
      { territory: "CA", type: ["America/Regina", "America/Swift_Current"] }
    ]
  },
  {
    w: "Cape Verde Standard Time",
    i: [
      { territory: "001", type: ["Atlantic/Cape_Verde"] },
      { territory: "CV", type: ["Atlantic/Cape_Verde"] },
      { territory: "ZZ", type: ["Etc/GMT+1"] }
    ]
  },
  {
    w: "Caucasus Standard Time",
    i: [
      { territory: "001", type: ["Asia/Yerevan"] },
      { territory: "AM", type: ["Asia/Yerevan"] }
    ]
  },
  {
    w: "Cen. Australia Standard Time",
    i: [
      { territory: "001", type: ["Australia/Adelaide"] },
      { territory: "AU", type: ["Australia/Adelaide", "Australia/Broken_Hill"] }
    ]
  },
  {
    w: "Central America Standard Time",
    i: [
      { territory: "001", type: ["America/Guatemala"] },
      { territory: "BZ", type: ["America/Belize"] },
      { territory: "CR", type: ["America/Costa_Rica"] },
      { territory: "EC", type: ["Pacific/Galapagos"] },
      { territory: "GT", type: ["America/Guatemala"] },
      { territory: "HN", type: ["America/Tegucigalpa"] },
      { territory: "NI", type: ["America/Managua"] },
      { territory: "SV", type: ["America/El_Salvador"] },
      { territory: "ZZ", type: ["Etc/GMT+6"] }
    ]
  },
  {
    w: "Central Asia Standard Time",
    i: [
      { territory: "001", type: ["Asia/Almaty"] },
      { territory: "AQ", type: ["Antarctica/Vostok"] },
      { territory: "CN", type: ["Asia/Urumqi"] },
      { territory: "IO", type: ["Indian/Chagos"] },
      { territory: "KG", type: ["Asia/Bishkek"] },
      { territory: "KZ", type: ["Asia/Almaty", "Asia/Qostanay"] },
      { territory: "ZZ", type: ["Etc/GMT-6"] }
    ]
  },
  {
    w: "Central Brazilian Standard Time",
    i: [
      { territory: "001", type: ["America/Cuiaba"] },
      { territory: "BR", type: ["America/Cuiaba", "America/Campo_Grande"] }
    ]
  },
  {
    w: "Central Europe Standard Time",
    i: [
      { territory: "001", type: ["Europe/Budapest"] },
      { territory: "AL", type: ["Europe/Tirane"] },
      { territory: "CZ", type: ["Europe/Prague"] },
      { territory: "HU", type: ["Europe/Budapest"] },
      { territory: "ME", type: ["Europe/Podgorica"] },
      { territory: "RS", type: ["Europe/Belgrade"] },
      { territory: "SI", type: ["Europe/Ljubljana"] },
      { territory: "SK", type: ["Europe/Bratislava"] }
    ]
  },
  {
    w: "Central European Standard Time",
    i: [
      { territory: "001", type: ["Europe/Warsaw"] },
      { territory: "BA", type: ["Europe/Sarajevo"] },
      { territory: "HR", type: ["Europe/Zagreb"] },
      { territory: "MK", type: ["Europe/Skopje"] },
      { territory: "PL", type: ["Europe/Warsaw"] }
    ]
  },
  {
    w: "Central Pacific Standard Time",
    i: [
      { territory: "001", type: ["Pacific/Guadalcanal"] },
      { territory: "AU", type: ["Antarctica/Macquarie"] },
      { territory: "FM", type: ["Pacific/Ponape", "Pacific/Kosrae"] },
      { territory: "NC", type: ["Pacific/Noumea"] },
      { territory: "SB", type: ["Pacific/Guadalcanal"] },
      { territory: "VU", type: ["Pacific/Efate"] },
      { territory: "ZZ", type: ["Etc/GMT-11"] }
    ]
  },
  {
    w: "Central Standard Time",
    i: [
      { territory: "001", type: ["America/Chicago"] },
      {
        territory: "CA",
        type: [
          "America/Winnipeg",
          "America/Rainy_River",
          "America/Rankin_Inlet",
          "America/Resolute"
        ]
      },
      { territory: "MX", type: ["America/Matamoros"] },
      {
        territory: "US",
        type: [
          "America/Chicago",
          "America/Indiana/Knox",
          "America/Indiana/Tell_City",
          "America/Menominee",
          "America/North_Dakota/Beulah",
          "America/North_Dakota/Center",
          "America/North_Dakota/New_Salem"
        ]
      },
      { territory: "ZZ", type: ["CST6CDT"] }
    ]
  },
  {
    w: "Central Standard Time (Mexico)",
    i: [
      { territory: "001", type: ["America/Mexico_City"] },
      {
        territory: "MX",
        type: [
          "America/Mexico_City",
          "America/Bahia_Banderas",
          "America/Merida",
          "America/Monterrey"
        ]
      }
    ]
  },
  {
    w: "Chatham Islands Standard Time",
    i: [
      { territory: "001", type: ["Pacific/Chatham"] },
      { territory: "NZ", type: ["Pacific/Chatham"] }
    ]
  },
  {
    w: "China Standard Time",
    i: [
      { territory: "001", type: ["Asia/Shanghai"] },
      { territory: "CN", type: ["Asia/Shanghai"] },
      { territory: "HK", type: ["Asia/Hong_Kong"] },
      { territory: "MO", type: ["Asia/Macau"] }
    ]
  },
  {
    w: "Cuba Standard Time",
    i: [
      { territory: "001", type: ["America/Havana"] },
      { territory: "CU", type: ["America/Havana"] }
    ]
  },
  {
    w: "Dateline Standard Time",
    i: [
      { territory: "001", type: ["Etc/GMT+12"] },
      { territory: "ZZ", type: ["Etc/GMT+12"] }
    ]
  },
  {
    w: "E. Africa Standard Time",
    i: [
      { territory: "001", type: ["Africa/Nairobi"] },
      { territory: "AQ", type: ["Antarctica/Syowa"] },
      { territory: "DJ", type: ["Africa/Djibouti"] },
      { territory: "ER", type: ["Africa/Asmera"] },
      { territory: "ET", type: ["Africa/Addis_Ababa"] },
      { territory: "KE", type: ["Africa/Nairobi"] },
      { territory: "KM", type: ["Indian/Comoro"] },
      { territory: "MG", type: ["Indian/Antananarivo"] },
      { territory: "SO", type: ["Africa/Mogadishu"] },
      { territory: "SS", type: ["Africa/Juba"] },
      { territory: "TZ", type: ["Africa/Dar_es_Salaam"] },
      { territory: "UG", type: ["Africa/Kampala"] },
      { territory: "YT", type: ["Indian/Mayotte"] },
      { territory: "ZZ", type: ["Etc/GMT-3"] }
    ]
  },
  {
    w: "E. Australia Standard Time",
    i: [
      { territory: "001", type: ["Australia/Brisbane"] },
      { territory: "AU", type: ["Australia/Brisbane", "Australia/Lindeman"] }
    ]
  },
  {
    w: "E. Europe Standard Time",
    i: [
      { territory: "001", type: ["Europe/Chisinau"] },
      { territory: "MD", type: ["Europe/Chisinau"] }
    ]
  },
  {
    w: "E. South America Standard Time",
    i: [
      { territory: "001", type: ["America/Sao_Paulo"] },
      { territory: "BR", type: ["America/Sao_Paulo"] }
    ]
  },
  {
    w: "Easter Island Standard Time",
    i: [
      { territory: "001", type: ["Pacific/Easter"] },
      { territory: "CL", type: ["Pacific/Easter"] }
    ]
  },
  {
    w: "Eastern Standard Time",
    i: [
      { territory: "001", type: ["America/New_York"] },
      { territory: "BS", type: ["America/Nassau"] },
      {
        territory: "CA",
        type: [
          "America/Toronto",
          "America/Iqaluit",
          "America/Montreal",
          "America/Nipigon",
          "America/Pangnirtung",
          "America/Thunder_Bay"
        ]
      },
      {
        territory: "US",
        type: [
          "America/New_York",
          "America/Detroit",
          "America/Indiana/Petersburg",
          "America/Indiana/Vincennes",
          "America/Indiana/Winamac",
          "America/Kentucky/Monticello",
          "America/Louisville"
        ]
      },
      { territory: "ZZ", type: ["EST5EDT"] }
    ]
  },
  {
    w: "Eastern Standard Time (Mexico)",
    i: [
      { territory: "001", type: ["America/Cancun"] },
      { territory: "MX", type: ["America/Cancun"] }
    ]
  },
  {
    w: "Egypt Standard Time",
    i: [
      { territory: "001", type: ["Africa/Cairo"] },
      { territory: "EG", type: ["Africa/Cairo"] }
    ]
  },
  {
    w: "Ekaterinburg Standard Time",
    i: [
      { territory: "001", type: ["Asia/Yekaterinburg"] },
      { territory: "RU", type: ["Asia/Yekaterinburg"] }
    ]
  },
  {
    w: "Fiji Standard Time",
    i: [
      { territory: "001", type: ["Pacific/Fiji"] },
      { territory: "FJ", type: ["Pacific/Fiji"] }
    ]
  },
  {
    w: "FLE Standard Time",
    i: [
      { territory: "001", type: ["Europe/Kiev"] },
      { territory: "AX", type: ["Europe/Mariehamn"] },
      { territory: "BG", type: ["Europe/Sofia"] },
      { territory: "EE", type: ["Europe/Tallinn"] },
      { territory: "FI", type: ["Europe/Helsinki"] },
      { territory: "LT", type: ["Europe/Vilnius"] },
      { territory: "LV", type: ["Europe/Riga"] },
      {
        territory: "UA",
        type: ["Europe/Kiev", "Europe/Uzhgorod", "Europe/Zaporozhye"]
      }
    ]
  },
  {
    w: "Georgian Standard Time",
    i: [
      { territory: "001", type: ["Asia/Tbilisi"] },
      { territory: "GE", type: ["Asia/Tbilisi"] }
    ]
  },
  {
    w: "GMT Standard Time",
    i: [
      { territory: "001", type: ["Europe/London"] },
      { territory: "ES", type: ["Atlantic/Canary"] },
      { territory: "FO", type: ["Atlantic/Faeroe"] },
      { territory: "GB", type: ["Europe/London"] },
      { territory: "GG", type: ["Europe/Guernsey"] },
      { territory: "IE", type: ["Europe/Dublin"] },
      { territory: "IM", type: ["Europe/Isle_of_Man"] },
      { territory: "JE", type: ["Europe/Jersey"] },
      { territory: "PT", type: ["Europe/Lisbon", "Atlantic/Madeira"] }
    ]
  },
  {
    w: "Greenland Standard Time",
    i: [
      { territory: "001", type: ["America/Godthab"] },
      { territory: "GL", type: ["America/Godthab"] }
    ]
  },
  {
    w: "Greenwich Standard Time",
    i: [
      { territory: "001", type: ["Atlantic/Reykjavik"] },
      { territory: "BF", type: ["Africa/Ouagadougou"] },
      { territory: "CI", type: ["Africa/Abidjan"] },
      { territory: "GH", type: ["Africa/Accra"] },
      { territory: "GM", type: ["Africa/Banjul"] },
      { territory: "GN", type: ["Africa/Conakry"] },
      { territory: "GW", type: ["Africa/Bissau"] },
      { territory: "IS", type: ["Atlantic/Reykjavik"] },
      { territory: "LR", type: ["Africa/Monrovia"] },
      { territory: "ML", type: ["Africa/Bamako"] },
      { territory: "MR", type: ["Africa/Nouakchott"] },
      { territory: "SH", type: ["Atlantic/St_Helena"] },
      { territory: "SL", type: ["Africa/Freetown"] },
      { territory: "SN", type: ["Africa/Dakar"] },
      { territory: "TG", type: ["Africa/Lome"] }
    ]
  },
  {
    w: "GTB Standard Time",
    i: [
      { territory: "001", type: ["Europe/Bucharest"] },
      { territory: "CY", type: ["Asia/Famagusta", "Asia/Nicosia"] },
      { territory: "GR", type: ["Europe/Athens"] },
      { territory: "RO", type: ["Europe/Bucharest"] }
    ]
  },
  {
    w: "Haiti Standard Time",
    i: [
      { territory: "001", type: ["America/Port-au-Prince"] },
      { territory: "HT", type: ["America/Port-au-Prince"] }
    ]
  },
  {
    w: "Hawaiian Standard Time",
    i: [
      { territory: "001", type: ["Pacific/Honolulu"] },
      { territory: "CK", type: ["Pacific/Rarotonga"] },
      { territory: "PF", type: ["Pacific/Tahiti"] },
      { territory: "UM", type: ["Pacific/Johnston"] },
      { territory: "US", type: ["Pacific/Honolulu"] },
      { territory: "ZZ", type: ["Etc/GMT+10"] }
    ]
  },
  {
    w: "India Standard Time",
    i: [
      { territory: "001", type: ["Asia/Calcutta"] },
      { territory: "IN", type: ["Asia/Calcutta"] }
    ]
  },
  {
    w: "Iran Standard Time",
    i: [
      { territory: "001", type: ["Asia/Tehran"] },
      { territory: "IR", type: ["Asia/Tehran"] }
    ]
  },
  {
    w: "Israel Standard Time",
    i: [
      { territory: "001", type: ["Asia/Jerusalem"] },
      { territory: "IL", type: ["Asia/Jerusalem"] }
    ]
  },
  {
    w: "Jordan Standard Time",
    i: [
      { territory: "001", type: ["Asia/Amman"] },
      { territory: "JO", type: ["Asia/Amman"] }
    ]
  },
  {
    w: "Kaliningrad Standard Time",
    i: [
      { territory: "001", type: ["Europe/Kaliningrad"] },
      { territory: "RU", type: ["Europe/Kaliningrad"] }
    ]
  },
  { w: "Kamchatka Standard Time", i: [] },
  {
    w: "Korea Standard Time",
    i: [
      { territory: "001", type: ["Asia/Seoul"] },
      { territory: "KR", type: ["Asia/Seoul"] }
    ]
  },
  {
    w: "Libya Standard Time",
    i: [
      { territory: "001", type: ["Africa/Tripoli"] },
      { territory: "LY", type: ["Africa/Tripoli"] }
    ]
  },
  {
    w: "Line Islands Standard Time",
    i: [
      { territory: "001", type: ["Pacific/Kiritimati"] },
      { territory: "KI", type: ["Pacific/Kiritimati"] },
      { territory: "ZZ", type: ["Etc/GMT-14"] }
    ]
  },
  {
    w: "Lord Howe Standard Time",
    i: [
      { territory: "001", type: ["Australia/Lord_Howe"] },
      { territory: "AU", type: ["Australia/Lord_Howe"] }
    ]
  },
  {
    w: "Magadan Standard Time",
    i: [
      { territory: "001", type: ["Asia/Magadan"] },
      { territory: "RU", type: ["Asia/Magadan"] }
    ]
  },
  {
    w: "Magallanes Standard Time",
    i: [
      { territory: "001", type: ["America/Punta_Arenas"] },
      { territory: "AQ", type: ["Antarctica/Palmer"] },
      { territory: "CL", type: ["America/Punta_Arenas"] }
    ]
  },
  {
    w: "Marquesas Standard Time",
    i: [
      { territory: "001", type: ["Pacific/Marquesas"] },
      { territory: "PF", type: ["Pacific/Marquesas"] }
    ]
  },
  {
    w: "Mauritius Standard Time",
    i: [
      { territory: "001", type: ["Indian/Mauritius"] },
      { territory: "MU", type: ["Indian/Mauritius"] },
      { territory: "RE", type: ["Indian/Reunion"] },
      { territory: "SC", type: ["Indian/Mahe"] }
    ]
  },
  { w: "Mid-Atlantic Standard Time", i: [] },
  {
    w: "Middle East Standard Time",
    i: [
      { territory: "001", type: ["Asia/Beirut"] },
      { territory: "LB", type: ["Asia/Beirut"] }
    ]
  },
  {
    w: "Montevideo Standard Time",
    i: [
      { territory: "001", type: ["America/Montevideo"] },
      { territory: "UY", type: ["America/Montevideo"] }
    ]
  },
  {
    w: "Morocco Standard Time",
    i: [
      { territory: "001", type: ["Africa/Casablanca"] },
      { territory: "EH", type: ["Africa/El_Aaiun"] },
      { territory: "MA", type: ["Africa/Casablanca"] }
    ]
  },
  {
    w: "Mountain Standard Time",
    i: [
      { territory: "001", type: ["America/Denver"] },
      {
        territory: "CA",
        type: [
          "America/Edmonton",
          "America/Cambridge_Bay",
          "America/Inuvik",
          "America/Yellowknife"
        ]
      },
      { territory: "MX", type: ["America/Ojinaga"] },
      { territory: "US", type: ["America/Denver", "America/Boise"] },
      { territory: "ZZ", type: ["MST7MDT"] }
    ]
  },
  {
    w: "Mountain Standard Time (Mexico)",
    i: [
      { territory: "001", type: ["America/Chihuahua"] },
      { territory: "MX", type: ["America/Chihuahua", "America/Mazatlan"] }
    ]
  },
  {
    w: "Myanmar Standard Time",
    i: [
      { territory: "001", type: ["Asia/Rangoon"] },
      { territory: "CC", type: ["Indian/Cocos"] },
      { territory: "MM", type: ["Asia/Rangoon"] }
    ]
  },
  {
    w: "N. Central Asia Standard Time",
    i: [
      { territory: "001", type: ["Asia/Novosibirsk"] },
      { territory: "RU", type: ["Asia/Novosibirsk"] }
    ]
  },
  {
    w: "Namibia Standard Time",
    i: [
      { territory: "001", type: ["Africa/Windhoek"] },
      { territory: "NA", type: ["Africa/Windhoek"] }
    ]
  },
  {
    w: "Nepal Standard Time",
    i: [
      { territory: "001", type: ["Asia/Katmandu"] },
      { territory: "NP", type: ["Asia/Katmandu"] }
    ]
  },
  {
    w: "New Zealand Standard Time",
    i: [
      { territory: "001", type: ["Pacific/Auckland"] },
      { territory: "AQ", type: ["Antarctica/McMurdo"] },
      { territory: "NZ", type: ["Pacific/Auckland"] }
    ]
  },
  {
    w: "Newfoundland Standard Time",
    i: [
      { territory: "001", type: ["America/St_Johns"] },
      { territory: "CA", type: ["America/St_Johns"] }
    ]
  },
  {
    w: "Norfolk Standard Time",
    i: [
      { territory: "001", type: ["Pacific/Norfolk"] },
      { territory: "NF", type: ["Pacific/Norfolk"] }
    ]
  },
  {
    w: "North Asia East Standard Time",
    i: [
      { territory: "001", type: ["Asia/Irkutsk"] },
      { territory: "RU", type: ["Asia/Irkutsk"] }
    ]
  },
  {
    w: "North Asia Standard Time",
    i: [
      { territory: "001", type: ["Asia/Krasnoyarsk"] },
      { territory: "RU", type: ["Asia/Krasnoyarsk", "Asia/Novokuznetsk"] }
    ]
  },
  {
    w: "North Korea Standard Time",
    i: [
      { territory: "001", type: ["Asia/Pyongyang"] },
      { territory: "KP", type: ["Asia/Pyongyang"] }
    ]
  },
  {
    w: "Omsk Standard Time",
    i: [
      { territory: "001", type: ["Asia/Omsk"] },
      { territory: "RU", type: ["Asia/Omsk"] }
    ]
  },
  {
    w: "Pacific SA Standard Time",
    i: [
      { territory: "001", type: ["America/Santiago"] },
      { territory: "CL", type: ["America/Santiago"] }
    ]
  },
  {
    w: "Pacific Standard Time",
    i: [
      { territory: "001", type: ["America/Los_Angeles"] },
      {
        territory: "CA",
        type: ["America/Vancouver", "America/Dawson", "America/Whitehorse"]
      },
      { territory: "US", type: ["America/Los_Angeles", "America/Metlakatla"] },
      { territory: "ZZ", type: ["PST8PDT"] }
    ]
  },
  {
    w: "Pacific Standard Time (Mexico)",
    i: [
      { territory: "001", type: ["America/Tijuana"] },
      { territory: "MX", type: ["America/Tijuana", "America/Santa_Isabel"] }
    ]
  },
  {
    w: "Pakistan Standard Time",
    i: [
      { territory: "001", type: ["Asia/Karachi"] },
      { territory: "PK", type: ["Asia/Karachi"] }
    ]
  },
  {
    w: "Paraguay Standard Time",
    i: [
      { territory: "001", type: ["America/Asuncion"] },
      { territory: "PY", type: ["America/Asuncion"] }
    ]
  },
  { w: "Qyzylorda Standard Time", i: [] },
  {
    w: "Romance Standard Time",
    i: [
      { territory: "001", type: ["Europe/Paris"] },
      { territory: "BE", type: ["Europe/Brussels"] },
      { territory: "DK", type: ["Europe/Copenhagen"] },
      { territory: "ES", type: ["Europe/Madrid", "Africa/Ceuta"] },
      { territory: "FR", type: ["Europe/Paris"] }
    ]
  },
  {
    w: "Russia Time Zone 10",
    i: [
      { territory: "001", type: ["Asia/Srednekolymsk"] },
      { territory: "RU", type: ["Asia/Srednekolymsk"] }
    ]
  },
  {
    w: "Russia Time Zone 11",
    i: [
      { territory: "001", type: ["Asia/Kamchatka"] },
      { territory: "RU", type: ["Asia/Kamchatka", "Asia/Anadyr"] }
    ]
  },
  {
    w: "Russia Time Zone 3",
    i: [
      { territory: "001", type: ["Europe/Samara"] },
      { territory: "RU", type: ["Europe/Samara"] }
    ]
  },
  {
    w: "Russian Standard Time",
    i: [
      { territory: "001", type: ["Europe/Moscow"] },
      {
        territory: "RU",
        type: ["Europe/Moscow", "Europe/Kirov", "Europe/Volgograd"]
      },
      { territory: "UA", type: ["Europe/Simferopol"] }
    ]
  },
  {
    w: "SA Eastern Standard Time",
    i: [
      { territory: "001", type: ["America/Cayenne"] },
      { territory: "AQ", type: ["Antarctica/Rothera"] },
      {
        territory: "BR",
        type: [
          "America/Fortaleza",
          "America/Belem",
          "America/Maceio",
          "America/Recife",
          "America/Santarem"
        ]
      },
      { territory: "FK", type: ["Atlantic/Stanley"] },
      { territory: "GF", type: ["America/Cayenne"] },
      { territory: "SR", type: ["America/Paramaribo"] },
      { territory: "ZZ", type: ["Etc/GMT+3"] }
    ]
  },
  {
    w: "SA Pacific Standard Time",
    i: [
      { territory: "001", type: ["America/Bogota"] },
      { territory: "BR", type: ["America/Rio_Branco", "America/Eirunepe"] },
      { territory: "CA", type: ["America/Coral_Harbour"] },
      { territory: "CO", type: ["America/Bogota"] },
      { territory: "EC", type: ["America/Guayaquil"] },
      { territory: "JM", type: ["America/Jamaica"] },
      { territory: "KY", type: ["America/Cayman"] },
      { territory: "PA", type: ["America/Panama"] },
      { territory: "PE", type: ["America/Lima"] },
      { territory: "ZZ", type: ["Etc/GMT+5"] }
    ]
  },
  {
    w: "SA Western Standard Time",
    i: [
      { territory: "001", type: ["America/La_Paz"] },
      { territory: "AG", type: ["America/Antigua"] },
      { territory: "AI", type: ["America/Anguilla"] },
      { territory: "AW", type: ["America/Aruba"] },
      { territory: "BB", type: ["America/Barbados"] },
      { territory: "BL", type: ["America/St_Barthelemy"] },
      { territory: "BO", type: ["America/La_Paz"] },
      { territory: "BQ", type: ["America/Kralendijk"] },
      {
        territory: "BR",
        type: ["America/Manaus", "America/Boa_Vista", "America/Porto_Velho"]
      },
      { territory: "CA", type: ["America/Blanc-Sablon"] },
      { territory: "CW", type: ["America/Curacao"] },
      { territory: "DM", type: ["America/Dominica"] },
      { territory: "DO", type: ["America/Santo_Domingo"] },
      { territory: "GD", type: ["America/Grenada"] },
      { territory: "GP", type: ["America/Guadeloupe"] },
      { territory: "GY", type: ["America/Guyana"] },
      { territory: "KN", type: ["America/St_Kitts"] },
      { territory: "LC", type: ["America/St_Lucia"] },
      { territory: "MF", type: ["America/Marigot"] },
      { territory: "MQ", type: ["America/Martinique"] },
      { territory: "MS", type: ["America/Montserrat"] },
      { territory: "PR", type: ["America/Puerto_Rico"] },
      { territory: "SX", type: ["America/Lower_Princes"] },
      { territory: "TT", type: ["America/Port_of_Spain"] },
      { territory: "VC", type: ["America/St_Vincent"] },
      { territory: "VG", type: ["America/Tortola"] },
      { territory: "VI", type: ["America/St_Thomas"] },
      { territory: "ZZ", type: ["Etc/GMT+4"] }
    ]
  },
  {
    w: "Saint Pierre Standard Time",
    i: [
      { territory: "001", type: ["America/Miquelon"] },
      { territory: "PM", type: ["America/Miquelon"] }
    ]
  },
  {
    w: "Sakhalin Standard Time",
    i: [
      { territory: "001", type: ["Asia/Sakhalin"] },
      { territory: "RU", type: ["Asia/Sakhalin"] }
    ]
  },
  {
    w: "Samoa Standard Time",
    i: [
      { territory: "001", type: ["Pacific/Apia"] },
      { territory: "WS", type: ["Pacific/Apia"] }
    ]
  },
  {
    w: "Sao Tome Standard Time",
    i: [
      { territory: "001", type: ["Africa/Sao_Tome"] },
      { territory: "ST", type: ["Africa/Sao_Tome"] }
    ]
  },
  {
    w: "Saratov Standard Time",
    i: [
      { territory: "001", type: ["Europe/Saratov"] },
      { territory: "RU", type: ["Europe/Saratov"] }
    ]
  },
  {
    w: "SE Asia Standard Time",
    i: [
      { territory: "001", type: ["Asia/Bangkok"] },
      { territory: "AQ", type: ["Antarctica/Davis"] },
      { territory: "CX", type: ["Indian/Christmas"] },
      { territory: "ID", type: ["Asia/Jakarta", "Asia/Pontianak"] },
      { territory: "KH", type: ["Asia/Phnom_Penh"] },
      { territory: "LA", type: ["Asia/Vientiane"] },
      { territory: "TH", type: ["Asia/Bangkok"] },
      { territory: "VN", type: ["Asia/Saigon"] },
      { territory: "ZZ", type: ["Etc/GMT-7"] }
    ]
  },
  {
    w: "Singapore Standard Time",
    i: [
      { territory: "001", type: ["Asia/Singapore"] },
      { territory: "BN", type: ["Asia/Brunei"] },
      { territory: "ID", type: ["Asia/Makassar"] },
      { territory: "MY", type: ["Asia/Kuala_Lumpur", "Asia/Kuching"] },
      { territory: "PH", type: ["Asia/Manila"] },
      { territory: "SG", type: ["Asia/Singapore"] },
      { territory: "ZZ", type: ["Etc/GMT-8"] }
    ]
  },
  {
    w: "South Africa Standard Time",
    i: [
      { territory: "001", type: ["Africa/Johannesburg"] },
      { territory: "BI", type: ["Africa/Bujumbura"] },
      { territory: "BW", type: ["Africa/Gaborone"] },
      { territory: "CD", type: ["Africa/Lubumbashi"] },
      { territory: "LS", type: ["Africa/Maseru"] },
      { territory: "MW", type: ["Africa/Blantyre"] },
      { territory: "MZ", type: ["Africa/Maputo"] },
      { territory: "RW", type: ["Africa/Kigali"] },
      { territory: "SZ", type: ["Africa/Mbabane"] },
      { territory: "ZA", type: ["Africa/Johannesburg"] },
      { territory: "ZM", type: ["Africa/Lusaka"] },
      { territory: "ZW", type: ["Africa/Harare"] },
      { territory: "ZZ", type: ["Etc/GMT-2"] }
    ]
  },
  {
    w: "Sri Lanka Standard Time",
    i: [
      { territory: "001", type: ["Asia/Colombo"] },
      { territory: "LK", type: ["Asia/Colombo"] }
    ]
  },
  {
    w: "Sudan Standard Time",
    i: [
      { territory: "001", type: ["Africa/Khartoum"] },
      { territory: "SD", type: ["Africa/Khartoum"] }
    ]
  },
  {
    w: "Syria Standard Time",
    i: [
      { territory: "001", type: ["Asia/Damascus"] },
      { territory: "SY", type: ["Asia/Damascus"] }
    ]
  },
  {
    w: "Taipei Standard Time",
    i: [
      { territory: "001", type: ["Asia/Taipei"] },
      { territory: "TW", type: ["Asia/Taipei"] }
    ]
  },
  {
    w: "Tasmania Standard Time",
    i: [
      { territory: "001", type: ["Australia/Hobart"] },
      { territory: "AU", type: ["Australia/Hobart", "Australia/Currie"] }
    ]
  },
  {
    w: "Tocantins Standard Time",
    i: [
      { territory: "001", type: ["America/Araguaina"] },
      { territory: "BR", type: ["America/Araguaina"] }
    ]
  },
  {
    w: "Tokyo Standard Time",
    i: [
      { territory: "001", type: ["Asia/Tokyo"] },
      { territory: "ID", type: ["Asia/Jayapura"] },
      { territory: "JP", type: ["Asia/Tokyo"] },
      { territory: "PW", type: ["Pacific/Palau"] },
      { territory: "TL", type: ["Asia/Dili"] },
      { territory: "ZZ", type: ["Etc/GMT-9"] }
    ]
  },
  {
    w: "Tomsk Standard Time",
    i: [
      { territory: "001", type: ["Asia/Tomsk"] },
      { territory: "RU", type: ["Asia/Tomsk"] }
    ]
  },
  {
    w: "Tonga Standard Time",
    i: [
      { territory: "001", type: ["Pacific/Tongatapu"] },
      { territory: "TO", type: ["Pacific/Tongatapu"] }
    ]
  },
  {
    w: "Transbaikal Standard Time",
    i: [
      { territory: "001", type: ["Asia/Chita"] },
      { territory: "RU", type: ["Asia/Chita"] }
    ]
  },
  {
    w: "Turkey Standard Time",
    i: [
      { territory: "001", type: ["Europe/Istanbul"] },
      { territory: "TR", type: ["Europe/Istanbul"] }
    ]
  },
  {
    w: "Turks And Caicos Standard Time",
    i: [
      { territory: "001", type: ["America/Grand_Turk"] },
      { territory: "TC", type: ["America/Grand_Turk"] }
    ]
  },
  {
    w: "Ulaanbaatar Standard Time",
    i: [
      { territory: "001", type: ["Asia/Ulaanbaatar"] },
      { territory: "MN", type: ["Asia/Ulaanbaatar", "Asia/Choibalsan"] }
    ]
  },
  {
    w: "US Eastern Standard Time",
    i: [
      { territory: "001", type: ["America/Indianapolis"] },
      {
        territory: "US",
        type: [
          "America/Indianapolis",
          "America/Indiana/Marengo",
          "America/Indiana/Vevay"
        ]
      }
    ]
  },
  {
    w: "US Mountain Standard Time",
    i: [
      { territory: "001", type: ["America/Phoenix"] },
      {
        territory: "CA",
        type: ["America/Dawson_Creek", "America/Creston", "America/Fort_Nelson"]
      },
      { territory: "MX", type: ["America/Hermosillo"] },
      { territory: "US", type: ["America/Phoenix"] },
      { territory: "ZZ", type: ["Etc/GMT+7"] }
    ]
  },
  {
    w: "UTC",
    i: [
      { territory: "001", type: ["Etc/GMT"] },
      { territory: "GL", type: ["America/Danmarkshavn"] },
      { territory: "ZZ", type: ["Etc/GMT", "Etc/UTC"] }
    ]
  },
  {
    w: "UTC+12",
    i: [
      { territory: "001", type: ["Etc/GMT-12"] },
      { territory: "KI", type: ["Pacific/Tarawa"] },
      { territory: "MH", type: ["Pacific/Majuro", "Pacific/Kwajalein"] },
      { territory: "NR", type: ["Pacific/Nauru"] },
      { territory: "TV", type: ["Pacific/Funafuti"] },
      { territory: "UM", type: ["Pacific/Wake"] },
      { territory: "WF", type: ["Pacific/Wallis"] },
      { territory: "ZZ", type: ["Etc/GMT-12"] }
    ]
  },
  {
    w: "UTC+13",
    i: [
      { territory: "001", type: ["Etc/GMT-13"] },
      { territory: "KI", type: ["Pacific/Enderbury"] },
      { territory: "TK", type: ["Pacific/Fakaofo"] },
      { territory: "ZZ", type: ["Etc/GMT-13"] }
    ]
  },
  {
    w: "UTC-02",
    i: [
      { territory: "001", type: ["Etc/GMT+2"] },
      { territory: "BR", type: ["America/Noronha"] },
      { territory: "GS", type: ["Atlantic/South_Georgia"] },
      { territory: "ZZ", type: ["Etc/GMT+2"] }
    ]
  },
  {
    w: "UTC-08",
    i: [
      { territory: "001", type: ["Etc/GMT+8"] },
      { territory: "PN", type: ["Pacific/Pitcairn"] },
      { territory: "ZZ", type: ["Etc/GMT+8"] }
    ]
  },
  {
    w: "UTC-09",
    i: [
      { territory: "001", type: ["Etc/GMT+9"] },
      { territory: "PF", type: ["Pacific/Gambier"] },
      { territory: "ZZ", type: ["Etc/GMT+9"] }
    ]
  },
  {
    w: "UTC-11",
    i: [
      { territory: "001", type: ["Etc/GMT+11"] },
      { territory: "AS", type: ["Pacific/Pago_Pago"] },
      { territory: "NU", type: ["Pacific/Niue"] },
      { territory: "UM", type: ["Pacific/Midway"] },
      { territory: "ZZ", type: ["Etc/GMT+11"] }
    ]
  },
  {
    w: "Venezuela Standard Time",
    i: [
      { territory: "001", type: ["America/Caracas"] },
      { territory: "VE", type: ["America/Caracas"] }
    ]
  },
  {
    w: "Vladivostok Standard Time",
    i: [
      { territory: "001", type: ["Asia/Vladivostok"] },
      { territory: "RU", type: ["Asia/Vladivostok", "Asia/Ust-Nera"] }
    ]
  },
  { w: "Volgograd Standard Time", i: [] },
  {
    w: "W. Australia Standard Time",
    i: [
      { territory: "001", type: ["Australia/Perth"] },
      { territory: "AQ", type: ["Antarctica/Casey"] },
      { territory: "AU", type: ["Australia/Perth"] }
    ]
  },
  {
    w: "W. Central Africa Standard Time",
    i: [
      { territory: "001", type: ["Africa/Lagos"] },
      { territory: "AO", type: ["Africa/Luanda"] },
      { territory: "BJ", type: ["Africa/Porto-Novo"] },
      { territory: "CD", type: ["Africa/Kinshasa"] },
      { territory: "CF", type: ["Africa/Bangui"] },
      { territory: "CG", type: ["Africa/Brazzaville"] },
      { territory: "CM", type: ["Africa/Douala"] },
      { territory: "DZ", type: ["Africa/Algiers"] },
      { territory: "GA", type: ["Africa/Libreville"] },
      { territory: "GQ", type: ["Africa/Malabo"] },
      { territory: "NE", type: ["Africa/Niamey"] },
      { territory: "NG", type: ["Africa/Lagos"] },
      { territory: "TD", type: ["Africa/Ndjamena"] },
      { territory: "TN", type: ["Africa/Tunis"] },
      { territory: "ZZ", type: ["Etc/GMT-1"] }
    ]
  },
  {
    w: "W. Europe Standard Time",
    i: [
      { territory: "001", type: ["Europe/Berlin"] },
      { territory: "AD", type: ["Europe/Andorra"] },
      { territory: "AT", type: ["Europe/Vienna"] },
      { territory: "CH", type: ["Europe/Zurich"] },
      { territory: "DE", type: ["Europe/Berlin", "Europe/Busingen"] },
      { territory: "GI", type: ["Europe/Gibraltar"] },
      { territory: "IT", type: ["Europe/Rome"] },
      { territory: "LI", type: ["Europe/Vaduz"] },
      { territory: "LU", type: ["Europe/Luxembourg"] },
      { territory: "MC", type: ["Europe/Monaco"] },
      { territory: "MT", type: ["Europe/Malta"] },
      { territory: "NL", type: ["Europe/Amsterdam"] },
      { territory: "NO", type: ["Europe/Oslo"] },
      { territory: "SE", type: ["Europe/Stockholm"] },
      { territory: "SJ", type: ["Arctic/Longyearbyen"] },
      { territory: "SM", type: ["Europe/San_Marino"] },
      { territory: "VA", type: ["Europe/Vatican"] }
    ]
  },
  {
    w: "W. Mongolia Standard Time",
    i: [
      { territory: "001", type: ["Asia/Hovd"] },
      { territory: "MN", type: ["Asia/Hovd"] }
    ]
  },
  {
    w: "West Asia Standard Time",
    i: [
      { territory: "001", type: ["Asia/Tashkent"] },
      { territory: "AQ", type: ["Antarctica/Mawson"] },
      {
        territory: "KZ",
        type: [
          "Asia/Oral",
          "Asia/Aqtau",
          "Asia/Aqtobe",
          "Asia/Atyrau",
          "Asia/Qyzylorda"
        ]
      },
      { territory: "MV", type: ["Indian/Maldives"] },
      { territory: "TF", type: ["Indian/Kerguelen"] },
      { territory: "TJ", type: ["Asia/Dushanbe"] },
      { territory: "TM", type: ["Asia/Ashgabat"] },
      { territory: "UZ", type: ["Asia/Tashkent", "Asia/Samarkand"] },
      { territory: "ZZ", type: ["Etc/GMT-5"] }
    ]
  },
  {
    w: "West Bank Standard Time",
    i: [
      { territory: "001", type: ["Asia/Hebron"] },
      { territory: "PS", type: ["Asia/Hebron", "Asia/Gaza"] }
    ]
  },
  {
    w: "West Pacific Standard Time",
    i: [
      { territory: "001", type: ["Pacific/Port_Moresby"] },
      { territory: "AQ", type: ["Antarctica/DumontDUrville"] },
      { territory: "FM", type: ["Pacific/Truk"] },
      { territory: "GU", type: ["Pacific/Guam"] },
      { territory: "MP", type: ["Pacific/Saipan"] },
      { territory: "PG", type: ["Pacific/Port_Moresby"] },
      { territory: "ZZ", type: ["Etc/GMT-10"] }
    ]
  },
  {
    w: "Yakutsk Standard Time",
    i: [
      { territory: "001", type: ["Asia/Yakutsk"] },
      { territory: "RU", type: ["Asia/Yakutsk", "Asia/Khandyga"] }
    ]
  }
];

export { timezones };
