import {i18n} from '../lang.js';
const getCvUrl = async function () {
    return i18n.global.t("cv.cvUrl");
};
const getFirstDescription = async function () {
    return i18n.global.t("cv.firstDescription");
};
const getSecondDescription = async function () {
    return i18n.global.t("cv.secondDescription");
};
const getThirdDescription = async function () {
    return i18n.global.t("cv.thirdDescription");
};
export {getCvUrl, getFirstDescription, getSecondDescription, getThirdDescription};