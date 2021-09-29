import { printProfile } from './profile';
const userData = {
    name:'Bohdan',
    age:20,
}
const profile = {...userData,
    company:'Incora',
};
printProfile(profile);
