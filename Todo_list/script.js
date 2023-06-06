$(document).ready(function() {
    // Add task
    $('#addButton').on('click', function() {
        var task = $('#inputdata').val();
        if (task.trim() !== '') {
            var listItem = $('<li>' + task + '</li>');
            listItem.on('click', function() {
                $(this).toggleClass('completed');
            });
            $('#list').append(listItem);
            $('#inputdata').val('');
        }
    });
});
