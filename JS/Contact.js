const SHEETID = "1mhB3n_RdUE6raNTCDuq59XT3ImiBH6ndvA1Kayss_4k";
const SHEETNAME = "Contact";
const RANGE = "B3:N10";

const url = "https://docs.google.com/spreadsheets/d/" + SHEETID + "/gviz/tq?tqx=out:json&sheet=" + SHEETNAME + "&range=" + RANGE ;

//______________________________________________________________(Google Data)

const NAME = document.getElementById("NAME");
const AGE = document.getElementById("AGE");
const SEX = document.getElementById("SEX");
const RACE = document.getElementById("RACE");

const STR = document.getElementById("STR");
const STRM = document.getElementById("STR MOD");

const DEX = document.getElementById("DEX");
const DEXM = document.getElementById("DEX MOD");

const CON = document.getElementById("CON");
const CONM = document.getElementById("CON MOD");

const INT = document.getElementById("INT");
const INTM = document.getElementById("INT MOD");

const WIS = document.getElementById("WIS");
const WISM = document.getElementById("WIS MOD");

const CHAR = document.getElementById("CHA");
const CHARM = document.getElementById("CHA MOD");

//______________________________________________________________(Value)

fetch(url)
.then((response) => response.text())
.then((data) => 
{
    const Jsondata = JSON.parse(data.substring(47).slice(0, -2))

    const table = Jsondata.table.rows[0].c;

    const PRO = Jsondata.table.rows

    const Skill = Jsondata.table.rows

    const Flaw = Jsondata.table.rows

    console.log();

    //__________________________________________________________(Display Value)

    NAME.innerText = Jsondata.table.rows[0].c[0].v;
    AGE.innerText = Jsondata.table.rows[0].c[1].v;
    SEX.innerText = Jsondata.table.rows[0].c[2].v;
    RACE.innerText = Jsondata.table.rows[0].c[3].v;

    STRM.innerText = Math.floor((table[4].v - 10) / 2);
    STR.innerText = table[4].v;    

    DEXM.innerText = Math.floor((table[5].v - 10) / 2);
    DEX.innerText = table[5].v;

    CONM.innerText = Math.floor((table[6].v - 10) / 2);
    CON.innerText = table[6].v;

    INTM.innerText = Math.floor((table[7].v - 10) / 2);
    INT.innerText = table[7].v;

    WISM.innerText = Math.floor((table[8].v - 10) / 2);
    WIS.innerText = table[8].v;

    CHARM.innerText = Math.floor((table[9].v - 10) / 2);
    CHAR.innerText = table[9].v;

    PRO.forEach(row => 
    {
        //console.log(row.c[10]);

        const NewText = document.createElement("h3");
        NewText.innerText = row.c[10].v;

        document.getElementById("PROFICIENCIES").append(NewText);
    });

    Skill.forEach(row => 
    {
        console.log(row.c[11]);

        const NewText = document.createElement("h3");
        NewText.innerText = row.c[11].v;

        document.getElementById("SKILL").append(NewText);
    });

    Flaw.forEach(row => 
    {
        console.log(row.c[12]);

        const NewText = document.createElement("h3");
        NewText.innerText = row.c[12].v;

        document.getElementById("FLAW").append(NewText);
    });
    
})