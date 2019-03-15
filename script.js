function append(text)
{
    var p = document.createElement("p");
    p.innerText = text;

    document.body.appendChild(p);
}

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    append(this.readyState + " " + this.satus);

    if (this.readyState == 4) {
        document.write("Response: " + this.responseText);
    }
};

xhttp.open("GET", "test.txt", true);
xhttp.send();
