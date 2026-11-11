const { MongoClient } = require("mongodb");

const mongoUrl = "mongodb://127.0.0.1:27017";

const ministre = [
    ["Mette Frederiksen", "Statsminister", "S"],
    ["Pia Olsen Dyhr", "Økonomi- og indenrigsminister", "SF"],
    ["Lars Løkke Rasmussen", "Udenrigsminister", "M"],
    ["Martin Lidegaard", "Erhvervs- og konkurrencekraftsminister", "RV"],
    ["Peter Hummelgaard", "Finansminister", "S"],
    ["Nicolai Wammen", "Justitsminister", "S"],
    ["Christina Egelund", "Forsknings-, uddannelses- og digitaliseringsminister", "M"],
    ["Samira Nawa", "Klima-, energi- og forsyningsminister", "RV"],
    ["Karina Lorentzen Dehnhardt", "By-, land- og transportminister", "SF"],
    ["Morten Bødskov", "Udlændinge- og integrationsminister", "S"],
    ["Magnus Heunicke", "Undervisningsminister", "S"],
    ["Ane Halsboe-Jørgensen", "Beskæftigelsesminister og minister for ligestilling", "S"],
    ["Jeppe Bruus", "Forsvarsminister", "S"],
    ["Jakob Engel-Schmidt", "Skatte- og vækstminister", "M"],
    ["Ida Auken", "Sundhedsminister og kirkeminister", "S"],
    ["Christian Rabjerg Madsen", "Minister for natur og dyrevelfærd", "S"],
    ["Zenia Stampe", "Kulturminister", "RV"],
    ["Lisbeth Bech-Nielsen", "Minister for samfundssikkerhed og beredskab", "SF"],
    ["Jacob Mark", "Børne-, ældre- og boligminister", "SF"],
    ["Monika Rubin", "Socialminister og minister for nordisk samarbejde", "M"],
    ["Maria Reumert Gjerding", "Miljøminister", "SF"]
];

async function main() {
    const client = new MongoClient(mongoUrl);

    try {
        await client.connect();

        const db = client.db("folketinget");
        const collection = db.collection("ministers");

        const dokumenter = ministre.map(([navn, ministerpost, parti]) => ({
            navn,
            ministerpost,
            parti,
            aktiv: true,
            opdateret: new Date()
        }));

        // Erstat den gamle liste med den aktuelle
        await collection.deleteMany({});
        await collection.insertMany(dokumenter);

        console.log(`${dokumenter.length} aktive ministre gemt i MongoDB`);

    } catch (error) {
        console.error("Fejl:", error.message);
    } finally {
        await client.close();
    }
}

main();