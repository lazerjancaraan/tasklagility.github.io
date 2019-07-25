$(document).ready(function() {

    var table = $('#tasks-table').DataTable( {
        dom: 'Bfrtip',
        "pageLength": 7,
        "scrollY":        "false",
        "scrollCollapse": true,
        "paging":         true,
        select: true,
        buttons: [
            {
               className: 'btn mt-1 mr-1 btn-sm btn-circle-rad btn-outline-secondary',
                text: 'Select all',
                action: function () {
                    table.rows().select();
                }
            },
            {
                className: 'btn mt-1 mr-1 btn-sm btn-circle-rad btn-outline-secondary',
                text: 'Select none',
                action: function () {
                    table.rows().deselect();
                }
            }
        ],
             columnDefs: [ {
            orderable: false,
            className: 'select-checkbox',
            targets:   0
        } ],
        select: {
            style:    'os',
            selector: 'td:first-child',
        },
        order: [[ 1, 'asc' ]]


    } );



// table.on("click", "th.select-checkbox", function() {
//     if ($("th.select-checkbox").hasClass("selected")) {
//         table.rows().deselect();
//         $("th.select-checkbox").removeClass("selected");
//     } else {
//         table.rows().select();
//         $("th.select-checkbox").addClass("selected");
//     }
// }).on("select deselect", function() {
//     ("Some selection or deselection going on")
//     if (table.rows({
//             selected: true
//         }).count() !== table.rows().count()) {
//         $("th.select-checkbox").removeClass("selected");
//     } else {
//         $("th.select-checkbox").addClass("selected");
//     }
// });





} );