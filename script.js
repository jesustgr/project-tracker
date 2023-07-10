setInterval(dateTime, 1000);

function dateTime() {
    $("#dateTime").text(dayjs().format('MMM DD, YYYY hh:mm:ss'));
}

document.getElementById("AddProject").addEventListener("click", function(){
    form.submit();
});

var form = document.getElementById("projectsForm");

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})