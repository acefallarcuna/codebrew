var monthly = 10;
var semiAnnually = 50;
var annually = 100;
$(document).ready(function() {
    $("#Monthly").click(function() {
        $("#Price").text("₱"+monthly);
        $("#btnPlan").text("Monthly Plan ");
        $("#DateRange").text("Monthly");
        $("#Total").text("₱"+monthly * 1.02);
    });
    $("#Semi-Annually").click(function() {
        $("#Price").text("₱"+semiAnnually);
        $("#btnPlan").text("Semi-Annually Plan ");
        $("#DateRange").text("Every 6 Months");
        $("#Total").text("₱"+semiAnnually * 1.02);
    });
    $("#Annually").click(function() {
        $("#Price").text("₱"+annually);
        $("#btnPlan").text("Annually Plan ");
        $("#DateRange").text("Yearly");
        $("#Total").text("₱"+annually * 1.02);
    });
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


