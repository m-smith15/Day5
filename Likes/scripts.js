function likeClicked() {
    var string = document.querySelector(".likes").innerText;
    var addMe = parseInt(string, 10);
    addMe += 1;
    console.log(addMe);
    document.querySelector(".likes").innerText = addMe +' likes';
    return;
}

function likeClicked1() {
    var string = document.querySelector(".likes1").innerText;
    var addMe = parseInt(string, 10);
    addMe += 1;
    console.log(addMe);
    document.querySelector(".likes1").innerText = addMe +' likes';
    return;
}

function likeClicked2() {
    var string = document.querySelector(".likes2").innerText;
    var addMe = parseInt(string, 10);
    addMe += 1;
    console.log(addMe);
    document.querySelector(".likes2").innerText = addMe +' likes';
    return;
}

//todo - explore using this to get the text of the button to determine which one was clicked?