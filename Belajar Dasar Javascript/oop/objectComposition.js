class Developer {
    constructor (name) {
        this.name = name;
    }

    commitChanges() {
        console.log(`${this.name} is committing changes...`);
    }
}

function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI...`);
        }
    }
}

function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API`)
        }
    }
}

function canDeployApp(developer) {
    return {
        DeployApp: () => {
            console.log(`${developer.name} is deploying App...`);
        }
    }
}

function createFrontEndDeveloper(name) {
    const developer = new Developer (name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer,canDeployApp(developer));
}

function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(Developer));
}

const frontEndDeveloper = createFrontEndDeveloper('Rizky');
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(`is ${frontEndDeveloper.name} developer?`, frontEndDeveloper instanceof Developer);
console.log("-----------------------------------");

const backEndDeveloper = createBackEndDeveloper('Ramadhani');
backEndDeveloper.commitChanges();
backEndDeveloper.buildAPI();
console.log(`is ${backEndDeveloper.name} developer?`, backEndDeveloper instanceof Developer);

console.log("-----------------------------------");
const devOpsDeveloper = createDevOps('Rizky');
devOpsDeveloper.commitChanges();
devOpsDeveloper.DeployApp();
console.log(`is ${devOpsDeveloper.name} developer?`, devOpsDeveloper instanceof Developer);
console.log("-----------------------------------");

const fullStackDeveloper = createFullStackDeveloper('Rizky');
fullStackDeveloper.commitChanges();
fullStackDeveloper.buildAPI();
fullStackDeveloper.buildUI();
fullStackDeveloper.DeployApp();
console.log(`is ${fullStackDeveloper.name} developer?`, fullStackDeveloper instanceof Developer);