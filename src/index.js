import get from "lodash.get";

export const getPhone = ({ profile }) => profile.phone;

const testNull = (state, testFunction) => nextTest => {
    var key = Object.keys(state);
    var temp = get(state, `${key}`);
    console.log("nextTest", nextTest)
    return testFunction({ [key]: temp }) == null && nextTest();
};

const testUndefined = (state, testFunction) => nextTest => {
    var key = Object.keys(state);
    var temp = {};
    return testFunction({ [key]: temp }) == undefined && nextTest;
};

const endChain = () => {
    console.log("endChain");
    return true;
};

const testChain = a => testNull(a)(testUndefined(a)(endChain));

var temp = testNull({ profile: { phone: 1123 } }, getPhone)(endChain);

console.log(temp);
