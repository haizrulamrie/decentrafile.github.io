function saveTextAsFile() {
    var a = document.body.appendChild(
        document.createElement("a")
    );
    a.download = "upload.txt";
    a.href = "data:text/plain," + document.getElementById("response").innerHTML;
    a.innerHTML = "[Export conent]";
}