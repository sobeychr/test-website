const fPopulateEntry = message => {
    console.log('fPopulateEntry', message);

    var $html = $('.main__messages__entry.template').clone();
    $html.removeClass('template');
    $html.find('.main__messages__entry__name-name').text(message.name);
    $html.find('.main__messages__entry__body').text(message.body);

    $('.main__messages').append($html);
};

$(() => {
    var socket = io();
    
    $.get('/message', messageList => {
        messageList.forEach(fPopulateEntry);
    });

    socket.on('newMessage', fPopulateEntry);

    $(document, '.main__form').on('submit', e => {
        e.preventDefault();

        var data = {
            name: $('.main__form__name').val(),
            body: $('.main__form__body').val()
        };

        $.post('/message', data);
    });
});