$(function () {
    $('[data-toggle="popover"]').popover()
})

function showPopover(e) {

    $('#' + e).popover('show');
}

function hidePopover(e) {

    $('#' + e).popover('hide');
}

