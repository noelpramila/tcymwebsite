import { Individual } from "./Individual";
import { TeamData } from "./TeamData";

const PREFIX_ALT_TEXT: string = 'Picture of ';
const INSTA_URL: string = 'https://www.instagram.com/';
const LINKEDIN_URL: string = 'https://www.linkedin.com/in/';
const ASSETS_PICTURE_URL: string = '../../assets/pictures/';

const youthCommissionDirector: Individual = {
    name: 'பணி.மபா. மார்ட்டின்  ஜோசப்,',
    designation: 'செயலர்',
    birthday: '',
    pictureUrl: ASSETS_PICTURE_URL + 'martin.jpg',
    pictureAltText: PREFIX_ALT_TEXT + 'தமிழ்நாடு இளைஞர் பணிக்குழு',
    readMoreUrl: '',
    instagramUrl: '',
    linkedInUrl: ''
};

const commissionChiefs: Individual[] = [
    {
        name: 'மேதகு ஆயர்.நசரேன் சூசை',
        designation: 'இளைஞர் பணிக்குழு தலைவர்',
        birthday: '',
        pictureUrl: ASSETS_PICTURE_URL + 'nazarene.jpeg',
        pictureAltText: PREFIX_ALT_TEXT + 'Bishop Nazarene Soosai',
        readMoreUrl: 'https://en.wikipedia.org/wiki/Nazarene_Soosai',
        instagramUrl: '',
        linkedInUrl: ''
    }
].concat(youthCommissionDirector);

const websiteDeveloperTeam: Individual[] = [youthCommissionDirector].concat([
    {
        name: 'Mr. Maria Irudaya Regilan J',
        designation: 'Product Owner',
        birthday: 'May 11',
        pictureUrl: ASSETS_PICTURE_URL + 'Regilan.jpg',
        pictureAltText: PREFIX_ALT_TEXT + 'Regilan',
        readMoreUrl: '',
        instagramUrl: INSTA_URL + 'regilanj/',
        linkedInUrl: LINKEDIN_URL + 'regilanj/'
    },
    {
        name: 'Miss. Anitha A V',
        designation: 'Lead Full Stack Developer',
        birthday: 'May 11',
        pictureUrl: ASSETS_PICTURE_URL + 'Anitha.jpeg',
        pictureAltText: PREFIX_ALT_TEXT + 'Anitha',
        readMoreUrl: '',
        instagramUrl: INSTA_URL + 'av_anitha/',
        linkedInUrl: LINKEDIN_URL + 'anitha-a-v-0229b6160/'
    }
]);

// TEAM COMPONENT DATA

// Leaders in Landing Page
export const LEADERS: TeamData = {
    title: 'Our Leaders',
    description: 'இயேசுவின் நற்செய்தி மதிப்பீடுகளான உண்மை, அன்பு, நீதி, சமத்துவம். சகோதரத்துவம் ஆகியவற்றின் அடிப்படையில் புதிய சமுதாயம் படைக்கும் பணியில் இளைஞர்களை உருவாக்கி ஈடுபட வைத்தல்.',
    individuals: commissionChiefs
};

// '/developer'
export const DEVELOPER: TeamData = {
    title: 'Our Developer Crew',
    description: 'This website is a testament to the creativity and technical skills of our development team.',
    individuals: websiteDeveloperTeam
};