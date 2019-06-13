import get from "lodash.get";

export const getPhone = ({ profile }) => profile.phone;

const testNull = state => testFunction => nextTest => {
    var key = Object.keys(state);
    var temp = get(state, `${key}`);
    return testFunction({ [key]: temp }) == null && nextTest;
};

const testUndefined = state => testFunction => nextTest => {
    var key = Object.keys(state);
    var temp = get(state, `${key}`);
    return testFunction({ [key]: temp }) == undefined && nextTest;
};

const endChain = () => {
    return true;
};

var temp = testNull({ profile: { phone: 1123 } })(getPhone)(endChain);

console.log(temp);
