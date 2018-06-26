// Select color input
const color = $('#colorPicker');
// Select size input
const tableHeight = $('#inputHeight');
const tableWeight = $('#inputWeight');

// When size is submitted by the user, call makeGrid()
$("input[type='submit']").click(function (event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
    //Get table
    const table = $('#pixelCanvas');
    //Set number of rows
    const rows = tableHeight.val();
    //Set number of columns
    const columns = tableWeight.val();

    // Remove previous table (if it exists)
    table.children().remove();

    //For loops to create the grid 
    for (let i = 0; i < rows; i++) {
        // Generate rows
        var grid = $('<tr></tr>');

        for (let j = 0; j < columns; j++) {
            //Append cells to rows
            $('<td></td>').appendTo(grid);
        }
        table.append(grid);
    }

    //Pick the color and define it for the cell
    table.on('click', 'td', function () { //When clicked, add color to the cell
        var pickColor = color.val(); // Var to store current color
        $(this).css('background-color', pickColor); // Color the cell using CSS 'background-color'
    });

    //Remove color from the cell on double-click (color ==> white)
    table.on('dblclick', 'td', function () {
        $(this).css('background-color', '#ffffff')
    })
}

// slide up image to go to page content

$(document.body).click(function () {
    $("#overlay").slideUp("slow", function () {
        // Animation complete.
    });
});
