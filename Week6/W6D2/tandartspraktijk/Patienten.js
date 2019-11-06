// elke patiënt heeft {achternaam, voornaam,  id, eleoonnummer,
// 50 patienten
// geboortejaar (doktoren en assit hebben role) en een emailadres (geen datum)}

const state = {
  dentists: [
    {
      id: 101,
      surname: 'Schouten',
      name: 'Maartje',
      phone: '0186604675',
      email: 'maartje@tandartspraktijkbvt.nl',
      ziek: false
    },
    {
      id: 102,
      surname: 'Schouten',
      name: 'Leentje',
      phone: '0186604676',
      email: 'leentje@tandartspraktijkbvt.nl',
      ziek: false
    },
    {
      id: 103,
      surname: 'Bom',
      name: 'Niels',
      phone: '0186604673',
      email: 'niels@tandartspraktijkbvt.nl',
      ziek: false
    },
    {
      id: 104,
      surname: 'van den Bosch',
      name: 'Guus',
      phone: '0186604674',
      email: 'guus@tandartspraktijkbvt.nl',
      ziek: false
    }
  ],

  assistants: [
    {
      id: 201,
      surname: 'van den Bosch',
      name: 'Truus',
      phone: '0186604674',
      email: 'truus@tandartspraktijkbvt.nl',
      ziek: false
    },
    {
      id: 202,
      surname: 'den Blijker',
      name: 'Herman',
      phone: '0186604674',
      email: 'herman@tandartspraktijkbvt.nl',
      ziek: false
    }
  ],

  patients: [
    {
      id: 42,
      surname: 'Monahan',
      name: 'Oceane',
      phone: '624-848-3148',
      year: 1983,
      email: 'Eric_Leuschke@zoie.ca'
    },
    {
      id: 6,
      surname: 'Heller',
      name: 'Koby',
      phone: '870.749.5821 x11971',
      year: 1978,
      email: 'Belle@nedra.tv'
    },
    {
      id: 3,
      surname: 'Ritchie',
      name: 'Micah',
      phone: '(262)392-8691 x201',
      year: 1943,
      email: 'Zack@clark.biz'
    },
    {
      id: 67,
      surname: 'Haag',
      name: 'Bennie',
      phone: '226.137.8534 x4037',
      year: 1970,
      email: 'Willie@ari.tv'
    },
    {
      id: 07,
      surname: 'Christiansen',
      name: 'Maggie',
      phone: '057.072.5434 x55611',
      year: 1972,
      email: 'Jarred@cooper.me'
    },
    {
      id: 4,
      surname: 'Becker',
      name: 'Newell',
      phone: '(226)055-6887',
      year: 1983,
      email: 'Torrance.Fadel@davon.me'
    },
    {
      id: 17,
      surname: 'Witting',
      name: 'Ericka',
      phone: '344-513-6431 x83700',
      year: 1923,
      email: 'Darrin.Mayer@lionel.me'
    },
    {
      id: 992,
      surname: 'Heller',
      name: 'Nicolette',
      phone: '1-547-729-5297 x9583',
      year: 77,
      email: 'Bernadette_McClure@hulda.org'
    },
    {
      id: 49,
      surname: 'Vandervort',
      name: 'Etha',
      phone: '1-068-479-1464',
      year: 1952,
      email: 'Corine@justus.net'
    },
    {
      id: 75,
      surname: 'Altenwerth',
      name: 'Laverna',
      phone: '(427)003-1031 x08035',
      year: 1989,
      email: 'Sterling@brycen.org'
    },
    {
      id: 63,
      surname: 'Wolff',
      name: 'Orion',
      phone: '157.671.8265 x3614',
      year: 1990,
      email: 'Kiara_Hansen@howard.io'
    },
    {
      id: 99,
      surname: 'Connelly',
      name: 'Ernestina',
      phone: '1-849-945-2820 x53094',
      year: 1971,
      email: 'Maverick@jovanny.tv'
    },
    {
      id: 10,
      surname: 'Trantow',
      name: 'Brendan',
      phone: '(541)295-2821 x466',
      year: 2000,
      email: 'Noemy_Tremblay@randal.io'
    },
    {
      id: 33,
      surname: 'Pollich',
      name: 'Lolita',
      phone: '938-655-0889',
      year: 1924,
      email: 'Coty_Wisozk@brooklyn.ca'
    },
    {
      id: 92,
      surname: 'Schmidt',
      name: 'Connor',
      phone: '997.129.6486 x317',
      year: 1954,
      email: 'Germaine_Kirlin@kaia.co.uk'
    },
    {
      id: 59,
      surname: 'Brakus',
      name: 'Susie',
      phone: '161-572-4110 x483',
      year: 1930,
      email: 'Sigmund@alicia.co.uk'
    },
    {
      id: 60,
      surname: 'Sporer',
      name: 'Esther',
      phone: '873.178.4550 x482',
      year: 1957,
      email: 'Veronica@john.me'
    },
    {
      id: 37,
      surname: 'Ledner',
      name: 'Candace',
      phone: '(192)936-3083',
      year: 2008,
      email: 'Cyril@garrick.ca'
    },
    {
      id: 04,
      surname: 'Pouros',
      name: 'Adaline',
      phone: '006-196-0162',
      year: 1994,
      email: 'Ole@nestor.org'
    },
    {
      id: 6,
      surname: 'Osinski',
      name: 'Grant',
      phone: '779-343-6874 x27685',
      year: 1991,
      email: 'Quinton@emma.info'
    },
    {
      id: 56,
      surname: 'Wisoky',
      name: 'Lorine',
      phone: '690-729-2699 x37079',
      year: 1998,
      email: 'Hollis@noemie.com'
    },
    {
      id: 49,
      surname: 'Greenholt',
      name: 'Elody',
      phone: '886-478-9667',
      year: 1955,
      email: 'Freda.Huels@gussie.org'
    },
    {
      id: 48,
      surname: 'Halvorson',
      name: 'Alba',
      phone: '041.114.2395 x51955',
      year: 1935,
      email: 'Damien_Schuppe@orrin.net'
    },
    {
      id: 11,
      surname: 'Kertzmann',
      name: 'Archibald',
      phone: '(890)495-2982 x3718',
      year: 1965,
      email: 'Dovie.Jaskolski@dock.biz'
    },
    {
      id: 92,
      surname: 'Kuhn',
      name: 'Anjali',
      phone: '(928)597-4191 x0635',
      year: 1964,
      email: 'Maximillian@hunter.name'
    },
    {
      id: 94,
      surname: 'Harris',
      name: 'Lindsay',
      phone: '1-260-371-1207 x35649',
      year: 1951,
      email: 'Sharon@cayla.info'
    },
    {
      id: 50,
      surname: 'Jacobi',
      name: 'Katheryn',
      phone: '346.975.8770 x573',
      year: 1936,
      email: 'Elena.Goyette@darrell.us'
    },
    {
      id: 96,
      surname: 'Kunde',
      name: 'Orin',
      phone: '(466)388-5380',
      year: 1936,
      email: 'Aaron_Mertz@syble.co.uk'
    },
    {
      id: 13,
      surname: 'Marks',
      name: 'Tabitha',
      phone: '787-352-2773 x5186',
      year: 1979,
      email: 'Katarina@carmella.tv'
    },
    {
      id: 5,
      surname: 'Streich',
      name: 'Cielo',
      phone: '1-543-880-1921',
      year: 1990,
      email: 'Jeremie@ezequiel.us'
    },
    {
      id: 24,
      surname: 'Terry',
      name: 'Lemuel',
      phone: '823-192-2941',
      year: 1970,
      email: 'Freeman@frederique.co.uk'
    },
    {
      id: 93,
      surname: 'Hoppe',
      name: 'Zelma',
      phone: '(460)231-0033',
      year: 1955,
      email: 'Caden@macy.co.uk'
    },
    {
      id: 71,
      surname: 'Bogan',
      name: 'Savion',
      phone: '1-460-176-8485',
      year: 1994,
      email: 'Alicia@claire.io'
    },
    {
      id: 35,
      surname: 'Beatty',
      name: 'Yadira',
      phone: '445-389-3755 x64487',
      year: 1950,
      email: 'Dalton.Harann@wendy.info'
    },
    {
      id: 18,
      surname: 'Schinner',
      name: 'Prince',
      phone: '753.264.3188 x3494',
      year: 2005,
      email: 'Patsy_Koelpin@torrance.biz'
    },
    {
      id: 75,
      surname: 'Ziemann',
      name: 'Janae',
      phone: '1-333-157-5057 x402',
      year: 1946,
      email: 'Casandra@shayna.biz'
    },
    {
      id: 22,
      surname: 'Morissette',
      name: 'Jairo',
      phone: '(526)366-7732 x105',
      year: 1924,
      email: 'Roxane@lonny.net'
    },
    {
      id: 19,
      surname: 'Mann',
      name: 'Fernando',
      phone: '(977)339-1816 x8425',
      year: 1980,
      email: 'Juliet@eldora.tv'
    },
    {
      id: 19,
      surname: 'Johnson',
      name: 'Frieda',
      phone: '1-345-197-6082 x27280',
      year: 1941,
      email: 'Jolie@milan.com'
    },
    {
      id: 24,
      surname: "O'Connell",
      name: 'Carmen',
      phone: '(595)271-2984 x2339',
      year: 1947,
      email: 'Adrien_Hammes@sonia.co.uk'
    },
    {
      id: 49,
      surname: 'Jacobs',
      name: 'Wiley',
      phone: '152-844-5990 x6777',
      year: 2002,
      email: 'Colten.Heidenreich@noemy.org'
    },
    {
      id: 60,
      surname: 'Pouros',
      name: 'Jammie',
      phone: '716.731.1070',
      year: 2004,
      email: 'Chase.Kirlin@marilou.io'
    },
    {
      id: 59,
      surname: 'Kemmer',
      name: 'Braden',
      phone: '(489)746-7598',
      year: 1960,
      email: 'Ezequiel.Lemke@delmer.biz'
    },
    {
      id: 28,
      surname: 'Wolf',
      name: 'Oren',
      phone: '118-872-5144',
      year: 1982,
      email: 'Isaac@sterling.biz'
    },
    {
      id: 8,
      surname: 'Rau',
      name: 'Kyle',
      phone: '(063)655-7833 x0880',
      year: 1993,
      email: 'Jamar@noemie.ca'
    },
    {
      id: 53,
      surname: 'McClure',
      name: 'Helen',
      phone: '(985)745-2595 x624',
      year: 1987,
      email: 'Simone@shad.tv'
    },
    {
      id: 17,
      surname: 'Turner',
      name: 'Lessie',
      phone: '(057)710-6651',
      year: 1937,
      email: 'Junius.Bradtke@jamie.info'
    },
    {
      id: 75,
      surname: 'Predovic',
      name: 'Elta',
      phone: '647.759.5878 x6800',
      year: 1994,
      email: 'Craig.Torp@patricia.info'
    },
    {
      id: 38,
      surname: 'Glover',
      name: 'Shanny',
      phone: '820.774.2231 x5845',
      year: 1968,
      email: 'Alisa@broderick.biz'
    },
    {
      id: 07,
      surname: 'Metz',
      name: 'Marjolaine',
      phone: '467.162.3631',
      year: 1987,
      email: 'Orpha.Bruen@candelario.com'
    }
  ]
};

// Make dentist Ill
const setDentistIll = (state, dentistId) => {
  const DentistIll = state.dentists.findIndex(
    dentists => dentists.id == dentistId
  );
  console.log(DentistIll);
  let dentist = state.dentists[DentistIll];
  console.log(dentist);

  dentist.ziek = true;
  const newDentists = [...state.dentists];
  newDentists[dentist] = newDentists;
  const newState = { ...state };
  console.log(newState.dentists);
  newState.dentists = newDentists;
  return newState;
};

newState = setDentistIll(state, 101);

// Add new Dentist: Toos Trekker:
const addDentist = newDentist => {
  state.dentists.push(newDentist);
};

// TODO: Ill dentist should get a backgound-color: red;

const addNewDentist = {
  id: 105,
  surname: 'Trekker',
  name: 'Toos',
  phone: '06-12345678',
  role: 'dentist',
  email: 'toos@tandartspraktijkbvt.nl',
  ill: true
};
newState = addDentist(addNewDentist);

const addPatient = newPatient => {
  state.patients.push(newPatient);
};

// Add new Patient: Piet Auw:
const newPatient = {
  id: 800,
  surname: 'Auw',
  name: 'Piet',
  phone: '06-12345679',
  year: 1985,
  email: 'piet@inacademy.nl',
  ill: true
};
newState = addPatient(newPatient);

const seeDentist = () => {
  const person = state.dentists[Math.floor(Math.random() * 5)];
  return `${person.name} ${person.id}`;
};
console.log(state.dentists);

const seeAssistants = () => {
  const person = state.assistants[Math.floor(Math.random() * 2)];
  return `${person.name} ${person.surname}`;
};
console.log(state.assistants);

const seePatients = () => {
  const person = state.patients[Math.floor(Math.random() * 50)];
  console.log(person);
  return `${person.name} ${person.surname}`;
};
console.log(state.patients);

const getRandomTime = () => {
  let goodTime = false;
  let hour;
  while (goodTime === false) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      goodTime = true;
    }
  }
  return `${hour}:00u`;
};

const createDayView = () => {
  console.log();
  const appointments = [];

  for (i = 0; i < 30; i++) {
    appointments.push(`<li class="appointment">
    <div class="time">
    ${getRandomTime(i)}</div>
    <div class="patient">Patiënt: ${seePatients()}
    </div><div class="dentist">Dentist: ${seeDentist()}</div>
    <div class="assistant">Assistant: ${seeAssistants()}</div>    
    </li>`);
  }
  console.log(appointments);
  document.querySelector('.dayview').innerHTML = appointments.join('');
};

const createDayOnCalendar = numAppointments => {
  const appointments = [];
  for (let i = 0; i < numAppointments; i++) {
    appointments.push(`
        <div class="appointment">
          <span class="time">${getRandomTime(i)}</span>
          <span class="patient">${seePatients()}</span>
        </div>`);
  }
  return `<div class="day">${appointments.join('')}</div>`;
};

const createCalendarView = () => {
  const days = [];

  for (let i = 1; i < 28; i++) {
    if ([6, 7, 13, 14, 20, 21, 27, 28].includes(i)) {
      continue;
    }
    days.push(createDayOnCalendar(5));
  }
  document.querySelector('.calendarview .table').innerHTML = days.join('');
};

const start = () => {
  //print html tandartsen en afspraken uit
  //   render(newState);
  try {
    createDayView();
  } catch {}

  try {
    createCalendarView();
  } catch {}
};

const setEventListeners = () => {
  document.querySelectorAll('.patient').forEach(patients => {
    return patients.addEventListener('click', event => {
      console.log(event.target);
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  start();
  setEventListeners();
});
