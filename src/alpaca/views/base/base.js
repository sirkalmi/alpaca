/**
 * Defines the base class implementation for views.  All views in Alpaca ultimately extend this form.
 * This provides the ideal place for any global overrides of view templates, message bundles or other settings.
 */
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(["alpaca/Alpaca", "jquery"], factory);
    } else {
        factory(window.Alpaca, window.$);
    }
}(this, function (Alpaca, $) {

    Alpaca.styleInjections = {};

    Alpaca.registerView({
        "id": "VIEW_BASE",
        "title": "Abstract base view",
        "description": "Foundation view which provides an abstract view from which all other views extend.",
        "messages": {
            "countries": {
                "afg": "Afghanistan",
                "ala": "Aland Islands",
                "alb": "Albania",
                "dza": "Algeria",
                "asm": "American Samoa",
                "and": "Andorra",
                "ago": "Angola",
                "aia": "Anguilla",
                "ata": "Antarctica",
                "atg": "Antigua and Barbuda",
                "arg": "Argentina",
                "arm": "Armenia",
                "abw": "Aruba",
                "aus": "Australia",
                "aut": "Austria",
                "aze": "Azerbaijan",
                "bhs": "Bahamas",
                "bhr": "Bahrain",
                "bgd": "Bangladesh",
                "brb": "Barbados",
                "blr": "Belarus",
                "bel": "Belgium",
                "blz": "Belize",
                "ben": "Benin",
                "bmu": "Bermuda",
                "btn": "Bhutan",
                "bol": "Bolivia",
                "bih": "Bosnia and Herzegovina",
                "bwa": "Botswana",
                "bvt": "Bouvet Island",
                "bra": "Brazil",
                "iot": "British Indian Ocean Territory",
                "brn": "Brunei Darussalam",
                "bgr": "Bulgaria",
                "bfa": "Burkina Faso",
                "bdi": "Burundi",
                "khm": "Cambodia",
                "cmr": "Cameroon",
                "can": "Canada",
                "cpv": "Cape Verde",
                "cym": "Cayman Islands",
                "caf": "Central African Republic",
                "tcd": "Chad",
                "chl": "Chile",
                "chn": "China",
                "cxr": "Christmas Island",
                "cck": "Cocos (Keeling), Islands",
                "col": "Colombia",
                "com": "Comoros",
                "cog": "Congo",
                "cod": "Congo, the Democratic Republic of the",
                "cok": "Cook Islands",
                "cri": "Costa Rica",
                "hrv": "Croatia",
                "cub": "Cuba",
                "cyp": "Cyprus",
                "cze": "Czech Republic",
                "civ": "Cote d'Ivoire",
                "dnk": "Denmark",
                "dji": "Djibouti",
                "dma": "Dominica",
                "dom": "Dominican Republic",
                "ecu": "Ecuador",
                "egy": "Egypt",
                "slv": "El Salvador",
                "gnq": "Equatorial Guinea",
                "eri": "Eritrea",
                "est": "Estonia",
                "eth": "Ethiopia",
                "flk": "Falkland Islands (Malvinas),",
                "fro": "Faroe Islands",
                "fji": "Fiji",
                "fin": "Finland",
                "fra": "France",
                "guf": "French Guiana",
                "pyf": "French Polynesia",
                "atf": "French Southern Territories",
                "gab": "Gabon",
                "gmb": "Gambia",
                "geo": "Georgia",
                "deu": "Germany",
                "gha": "Ghana",
                "gib": "Gibraltar",
                "grc": "Greece",
                "grl": "Greenland",
                "grd": "Grenada",
                "glp": "Guadeloupe",
                "gum": "Guam",
                "gtm": "Guatemala",
                "ggy": "Guernsey",
                "gin": "Guinea",
                "gnb": "Guinea-Bissau",
                "guy": "Guyana",
                "hti": "Haiti",
                "hmd": "Heard Island and McDonald Islands",
                "vat": "Holy See (Vatican City State),",
                "hnd": "Honduras",
                "hkg": "Hong Kong",
                "hun": "Hungary",
                "isl": "Iceland",
                "ind": "India",
                "idn": "Indonesia",
                "irn": "Iran, Islamic Republic of",
                "irq": "Iraq",
                "irl": "Ireland",
                "imn": "Isle of Man",
                "isr": "Israel",
                "ita": "Italy",
                "jam": "Jamaica",
                "jpn": "Japan",
                "jey": "Jersey",
                "jor": "Jordan",
                "kaz": "Kazakhstan",
                "ken": "Kenya",
                "kir": "Kiribati",
                "prk": "Korea, Democratic People's Republic of",
                "kor": "Korea, Republic of",
                "kwt": "Kuwait",
                "kgz": "Kyrgyzstan",
                "lao": "Lao People's Democratic Republic",
                "lva": "Latvia",
                "lbn": "Lebanon",
                "lso": "Lesotho",
                "lbr": "Liberia",
                "lby": "Libyan Arab Jamahiriya",
                "lie": "Liechtenstein",
                "ltu": "Lithuania",
                "lux": "Luxembourg",
                "mac": "Macao",
                "mkd": "Macedonia, the former Yugoslav Republic of",
                "mdg": "Madagascar",
                "mwi": "Malawi",
                "mys": "Malaysia",
                "mdv": "Maldives",
                "mli": "Mali",
                "mlt": "Malta",
                "mhl": "Marshall Islands",
                "mtq": "Martinique",
                "mrt": "Mauritania",
                "mus": "Mauritius",
                "myt": "Mayotte",
                "mex": "Mexico",
                "fsm": "Micronesia, Federated States of",
                "mda": "Moldova, Republic of",
                "mco": "Monaco",
                "mng": "Mongolia",
                "mne": "Montenegro",
                "msr": "Montserrat",
                "mar": "Morocco",
                "moz": "Mozambique",
                "mmr": "Myanmar",
                "nam": "Namibia",
                "nru": "Nauru",
                "npl": "Nepal",
                "nld": "Netherlands",
                "ant": "Netherlands Antilles",
                "ncl": "New Caledonia",
                "nzl": "New Zealand",
                "nic": "Nicaragua",
                "ner": "Niger",
                "nga": "Nigeria",
                "niu": "Niue",
                "nfk": "Norfolk Island",
                "mnp": "Northern Mariana Islands",
                "nor": "Norway",
                "omn": "Oman",
                "pak": "Pakistan",
                "plw": "Palau",
                "pse": "Palestinian Territory, Occupied",
                "pan": "Panama",
                "png": "Papua New Guinea",
                "pry": "Paraguay",
                "per": "Peru",
                "phl": "Philippines",
                "pcn": "Pitcairn",
                "pol": "Poland",
                "prt": "Portugal",
                "pri": "Puerto Rico",
                "qat": "Qatar",
                "rou": "Romania",
                "rus": "Russian Federation",
                "rwa": "Rwanda",
                "reu": "Reunion",
                "blm": "Saint Barthelemy",
                "shn": "Saint Helena",
                "kna": "Saint Kitts and Nevis",
                "lca": "Saint Lucia",
                "maf": "Saint Martin (French part)",
                "spm": "Saint Pierre and Miquelon",
                "vct": "Saint Vincent and the Grenadines",
                "wsm": "Samoa",
                "smr": "San Marino",
                "stp": "Sao Tome and Principe",
                "sau": "Saudi Arabia",
                "sen": "Senegal",
                "srb": "Serbia",
                "syc": "Seychelles",
                "sle": "Sierra Leone",
                "sgp": "Singapore",
                "svk": "Slovakia",
                "svn": "Slovenia",
                "slb": "Solomon Islands",
                "som": "Somalia",
                "zaf": "South Africa",
                "sgs": "South Georgia and the South Sandwich Islands",
                "esp": "Spain",
                "lka": "Sri Lanka",
                "sdn": "Sudan",
                "sur": "Suriname",
                "sjm": "Svalbard and Jan Mayen",
                "swz": "Swaziland",
                "swe": "Sweden",
                "che": "Switzerland",
                "syr": "Syrian Arab Republic",
                "twn": "Taiwan, Province of China",
                "tjk": "Tajikistan",
                "tza": "Tanzania, United Republic of",
                "tha": "Thailand",
                "tls": "Timor-Leste",
                "tgo": "Togo",
                "tkl": "Tokelau",
                "ton": "Tonga",
                "tto": "Trinidad and Tobago",
                "tun": "Tunisia",
                "tur": "Turkey",
                "tkm": "Turkmenistan",
                "tca": "Turks and Caicos Islands",
                "tuv": "Tuvalu",
                "uga": "Uganda",
                "ukr": "Ukraine",
                "are": "United Arab Emirates",
                "gbr": "United Kingdom",
                "usa": "United States",
                "umi": "United States Minor Outlying Islands",
                "ury": "Uruguay",
                "uzb": "Uzbekistan",
                "vut": "Vanuatu",
                "ven": "Venezuela",
                "vnm": "Viet Nam",
                "vgb": "Virgin Islands, British",
                "vir": "Virgin Islands, U.S.",
                "wlf": "Wallis and Futuna",
                "esh": "Western Sahara",
                "yem": "Yemen",
                "zmb": "Zambia",
                "zwe": "Zimbabwe"
            },
            "empty": "",
            "required": "This field is required",
            "valid": "",
            "invalid": "This field is invalid",
            "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "timeUnits": { SECOND: "seconds", MINUTE: "minutes", HOUR: "hours", DAY: "days", MONTH: "months", YEAR: "years" }
        }
    });

}));