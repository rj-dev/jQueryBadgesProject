$(function() {

    $.ajax({
        url: 'https://www.codeschool.com/users/1195032.json',
        dataType: 'jsonp',
        success: function (response) {
            $.each(response.courses.completed, function (index, item) {
                console.log('i ' + index + ' v ' + item);
                $("#badges").append("<div class='course'><h3>" + item.title + "</h3><img src='" + item.badge + "'/><a href='" + item.url + "' class='btn btn-primary' taget='_blank'>See Course</a></div>")
            });
        }
    });

});
