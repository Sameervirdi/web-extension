/*
 * This function just inserts a bunch of records into browser storage.
 *
 * Normally, the database would not need to have data pre-loaded.
 */

function setItem() {
    console.log("OK - item set");
}

function gotPerson(item) {
    console.log("OK - item fetched");

    item.db.entries.forEach(function(entry) {
        console.log(`Name is: ${entry.name}`);
        console.log(`Email is: ${entry.email}`);


        var call_tag = document.createElement("div");
        var button = document.createElement("button");
        button.innerHTML = "Call";
        call_tag.appendChild(button);

        var name_tag = document.createElement("div");
        name_tag.innerHTML = `${entry.name} &lt;${entry.email}&gt;`;
    
        document.getElementById("id_container").appendChild(call_tag);
        document.getElementById("id_container").appendChild(name_tag);
    });

}

function onError(error) {
    console.log(error)
}

function preload_db() {

    // define an object
    var db = {
        "entries": [
        {   
            name: "Victor",
            email: "victor@crankycoder.com"
        },
        {
            name: "Sameer",
            email: "samvirdi@outlook.com"
        },
        {
            name: "Brendan",
            email: "brendan.choy@crankycoder.com"
        },
        {
            name: "Rosie",
            email: "thing1@crankycoder.com"
        }
        ]
    }

    // store the objects
    browser.storage.local.set({db})
        .then(setItem, onError);

    browser.storage.local.get("db")
      .then(gotPerson, onError);

}

function load_records_from_db() {
}


preload_db();
