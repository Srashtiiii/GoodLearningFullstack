$('body')
    .append(
        $('<h1>').text('ToDo List').addClass('heading')
    )

    .append(
        $('<input>')
            .attr('placeholder', 'Enter New Task')
            .attr('type', 'text')
            .addClass('newTask')
    )


    .append(
        $('<button>')
            .text('Add Task')
            .addClass('btn')
    )

    .append(
        $('<ul>')
            .addClass('taskList')
    )