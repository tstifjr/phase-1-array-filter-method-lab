// Code your solution here


function findMatching(nameArray=["david", "james", "grace"], name="kyle") {
    const matchedName= nameArray.filter(function (driverName) {
        return (driverName.toLocaleUpperCase() === name.toUpperCase());
    })
    return matchedName;
};

// console.log(findMatching());

function fuzzyMatch(arrayNames=[], string=""){
    const matchedFL = arrayNames.filter(function (driverName) {
        return (driverName[0] === string[0])
    })
    return matchedFL;
};

nameObjectArray=[
    {
        name: "kyle",
        hometown: "aaa"
    },
    {
        name: "chip",
        hometown: "bbb"
    },
    {
        name: "bill",
        hometown: "ccc"
    },
    {
        name: "kyle",
        hometown: "ddd"
    }
]

function matchName (nameObjectArray=[{},{}], string=""){
    const matchedName = nameObjectArray.filter(function (nameObject){

        //console.log((nameObject.name === string))
        return (nameObject.name === string);
    })
    return matchedName;
};

//console.log(matchName(nameObjectArray, "kyle"));