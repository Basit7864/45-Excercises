let personName = '';
personName = prompt("what is your name?") || "";
if (personName !== null && personName !== '') {
    alert("Hello ".concat(personName, ",would you like some python today?"));
}
else {
    alert('You have to fill your name!');
}
