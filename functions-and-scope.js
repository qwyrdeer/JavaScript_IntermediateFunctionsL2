// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.
/* Opdracht  1: Cum Laude */
/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.
// ---- Verwachte uitkomst: 6
console.log("opdracht 1a")
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6 ];

let numberCumLaude = 0;

function amountCumLaude(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            numberCumLaude = numberCumLaude + 1;
        }
    }
    return numberCumLaude;
}
console.log(amountCumLaude(grades));

console.log("opdracht 1b")

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

let numberCumLaude1 = 0;

function cumLaude(gradesGroup2){
    for (let i = 0; i < gradesGroup2.length; i++) {
        if (gradesGroup2[i] >= 8) {
            numberCumLaude1 = numberCumLaude1 + 1;
        }
    }
    return numberCumLaude1;
}

console.log(cumLaude(grades));
console.log(cumLaude([6, 4, 5]));
console.log(cumLaude([8, 9, 4, 6, 10]));

console.log("opdracht 2a")
/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

//gemiddelde is de hoeveelheid cijfers delen door het totaal cijfers opgeteld
//optellen van alle behaalde cijfers, aantal cijfers optellen - deze twee uitkomsten delen door elkaar
//alle cijfers zijn aan te roepen door een length te gebruiken

let numberOfGrades = 0
let totalOfGrades = 0

function averageGrade1a(grades) {
    for (let i = 0; i < grades.length; i++) {
        totalOfGrades = totalOfGrades + grades[i];
        numberOfGrades = numberOfGrades + 1;
    }
    const averageOfGrades = totalOfGrades / numberOfGrades;
    return averageOfGrades
}

console.log(averageGrade1a(grades))

console.log("opdracht 2b")
/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4
//

    function averageGrade2b(functGrades) {
        let functNumberGrades = 0
        let functTotalGrades = 0

        for (let i = 0; i < functGrades.length; i++) {
            functTotalGrades = functTotalGrades + functGrades[i];
            functNumberGrades = functNumberGrades + 1;
        }
        const functAverageGrade2b = functTotalGrades / functNumberGrades;
        return functAverageGrade2b
    }

console.log(averageGrade2b(grades));
console.log(averageGrade2b([6, 4, 5]));
console.log(averageGrade2b([8, 9, 4, 6, 10]));


console.log("opdracht 2c")
/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function averageGrade(functGrades) {
    let functNumberGrades = 0
    let functTotalGrades = 0

    for (let i = 0; i < functGrades.length; i++) {
        functTotalGrades = functTotalGrades + functGrades[i];
        functNumberGrades = functNumberGrades + 1;
    }
    const functAverageGrade = functTotalGrades / functNumberGrades;
    return functAverageGrade
}

console.log(averageGrade(grades).toFixed(2));
console.log(averageGrade([6, 4, 5]).toFixed(2));
console.log(averageGrade([8, 9, 4, 6, 10]).toFixed(2));

console.log("bonus 3a")
/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.
// ---- Verwachte uitkomst: 9

// ik bekijk een getal en sla dat op
// ik ga naar het volgende getal
// ik vergelijk dat getal met het vorige getal
// is het hoger? dan sla ik hem op
// is het lager? dan doe ik er niks mee

let highestFoundGrade3a = 0

function highestGrade3a(grades) {

    for (let i = 0; i < grades.length; i++)
    {
        if (grades[i] >= highestFoundGrade3a) {
            highestFoundGrade3a = (highestFoundGrade3a - highestFoundGrade3a) + grades[i];
        }
    }
    return highestFoundGrade3a;
}

console.log(highestGrade3a(grades));

console.log("bonus 3b")
/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function highestGrade(grades) {
    let highestFoundGrade = 0
    for (let i = 0; i < grades.length; i++)
    {
        if (grades[i] > highestFoundGrade) {
            highestFoundGrade = (highestFoundGrade - highestFoundGrade) + grades[i];
        }
    }
    return highestFoundGrade;
}

console.log(highestGrade(grades));
console.log(highestGrade([6, 4, 5]));
console.log(highestGrade([8, 9, 4, 6, 10]));