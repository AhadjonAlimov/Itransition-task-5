export const fullName = (data) => {
    let name = Math.floor(Math.random() * data.names.length);
    let midName = Math.floor(Math.random() * data.middleNames.length);
    let last = Math.floor(Math.random() * data.lastNames.length);
    return [
        data.names[name],
        data.middleNames[midName],
        data.lastNames[last],
    ].join(" ");
}

export const phone = (data) => {
    let phone = "";
    let code = Math.floor(Math.random() * data.phoneCodes.length);
    phone += data.phoneCodes[code];
    for (let i = 0; i < 7; i++) {
        const int = Math.floor(Math.random() * 10);
        phone += int;
    }
    return phone;
}

export const address = (data) => {
    let city = Math.floor(Math.random() * data.cities.length);
    let street = Math.floor(Math.random() * data.streets.length);
    let house = Math.floor(Math.random() * 1000);
    let apartment = Math.floor(Math.random() * 1000);
    return [
        `${data.cities[city]} city`,
        `${data.streets[street]} street`,
        `${house} / ${apartment}`,
    ].join(", ");
}