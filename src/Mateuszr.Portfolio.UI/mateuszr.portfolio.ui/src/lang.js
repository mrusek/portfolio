import { createI18n } from 'vue-i18n';
import cvPL from './assets/CV_PL.png';
import cvEN from './assets/CV_EN.png';
const messages = {
    en : {
        home : {
            hello: 'Welcome to my page!',
            disclaimer: 'This is portfolio of sorts, still in the making, where I will post updates regarding my experience, links to my most recent projects and detailed description of myself.',
            contactMe: 'Please contact me 💬',
            appCode: 'If you want to dive into the code of this app, you can do this ',
            linkAlt: 'under this link'
        },
        cv: {
            cvUrl: cvEN,
            firstDescription: '[ENG] Zakres obowiązków: R&D, implementacja oraz prezentacja rozwiązania IoT zbudowanego na platformie Thingworx',
            secondDescription: '[ENG] Zakres obowiązków: Implementacja systemu zarządzania zapytaniami ofertowymi w technologii ASP.NET MVC + Knockout.JS',
            thirdDescription: '[ENG] Zakres obowiązków: projektowanie oraz implementacja rozwiązań webowych z zakresu BPM, CRM czy Document Management przy użyciu stosu technologicznego .NET, języka SQL oraz frameworków języka Javascript.',
        }
    },
    pl : {
        home : {
            hello: 'Witaj na mojej stronie!',
            disclaimer: 'Jest to swego rodzaju zalążek portfolio, gdzie będą pojawiać się kolejne informacje o moim doświadczeniu, odnośniki do wykonanych projektów czy szerszy opis mojej osoby.',
            contactMe: 'Zachęcam do kontaktu 💬',
            appCode: 'Jeżeli chcesz zajrzeć w kod tej aplikacji możesz to zrobić ',
            linkAlt: 'pod tym linkiem'
        },
        cv: {
            cvUrl: cvPL,
            firstDescription: 'Zakres obowiązków: R&D, implementacja oraz prezentacja rozwiązania IoT zbudowanego na platformie Thingworx',
            secondDescription: 'Zakres obowiązków: Implementacja systemu zarządzania zapytaniami ofertowymi w technologii ASP.NET MVC + Knockout.JS',
            thirdDescription: 'Zakres obowiązków: projektowanie oraz implementacja rozwiązań webowych z zakresu BPM, CRM czy Document Management przy użyciu stosu technologicznego .NET, języka SQL oraz frameworków języka Javascript.',
        }
    }
    
    };
    export const i18n = new createI18n({
        locale: 'pl',
        fallbackLocale: 'en',
        globalInjection: true,
        legacy: false,
        messages
    });