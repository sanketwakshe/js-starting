<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sanket</title>
</head>
<body style="background: black; color: white;">
    <h2>sanket</h2>
    
</body>
<script>
    const div = document.createElement('h1');  // create h1 by using a javascript
    div.className = "main"
    div.id =Math.floor(Math.random()*6)+1;
    div.setAttribute("title","shreya");
    div.style.backgroundColor = "red";
    const addText = document.createTextNode("sanket wakshe")
    div.appendChild(addText)
    //div.innerText = "sanket"
    console.log(div);
    document.body.appendChild(div)

    
</script>
</html>