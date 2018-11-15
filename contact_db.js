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
    console.log(`Name is: ${item.entry.name}`);
    console.log(`Email is: ${item.entry.email}`);
    console.log(`Name is: ${item.entry.name2}`);
    console.log(`Email is: ${item.entry.email2}`);
    console.log(`Name is: ${item.entry.name3}`)
    console.log(`Email is: ${item.entry.email3}`)

    /* TODO: 
     * 1. Create a div tags like what we have in the HTML already.
     * 2. Find the div container, and append the new tags to the list
          of child tags inside of the div container
     */
    var call_tag = document.createElement("div");
    var button = document.createElement("button");
    button.innerHTML = "Call";
    call_tag.appendChild(button);

    var name_tag = document.createElement("div");
    name_tag.innerHTML = `${item.entry.name} &lt;${item.entry.email}&gt;`;
    
    document.getElementById("id_container").appendChild(call_tag);
    document.getElementById("id_container").appendChild(name_tag);

    var call_tag2 = document.createElement("div");
    var button2 = document.createElement("button");
    button2.innerHTML = "Call";
    call_tag2.appendChild(button);

    var name_tag2 = document.createElement("div");
    name_tag2.innerHTML = `${item.entry.name2} &lt;${item.entry.email2}&gt;`;

    document.getElementById("id_container").appendChild(call_tag2)
    document.getElementById("id_container").appendChild(name_tag2)

    var call_tag3 = document.createElement("div");
    var button3 = document.createElement("button");
    button2.innerHTML = "Call";
    call_tag3.appendChild(button);

    var name_tag3 = document.createElement("div");
    name_tag3.innerHTML = `${item.entry.name3} &lt;${item.entry.email3}&gt;`;

    document.getElementById("id_container").appendChild(call_tag3)
    document.getElementById("id_container").appendChild(name_tag3)
    

}

function onError(error) {
    console.log(error)
}

function preload_db() {

    // define an object
    var entry = {
        name: "Victor",
        email: "victor@crankycoder.com",
        name2: "Sameer",
        email2: "samvirdi@outlook.com",
        name3: "Brendan",
        email3: "brendanchoy@crankycoder.com",
    }

    // store the objects
    browser.storage.local.set({entry})
        .then(setItem, onError);

    browser.storage.local.get("entry")
      .then(gotPerson, onError);

}

function load_records_from_db() {
}


preload_db();
