import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

const getUserLanguage = () => {
    return 'ja';
};

TAPi18n.setLanguage(getUserLanguage());