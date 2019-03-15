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
        append("Response: " + this.responseText);
    }
};

append(location.toString());

xhttp.open("GET", "test.txt", true);
xhttp.send();
