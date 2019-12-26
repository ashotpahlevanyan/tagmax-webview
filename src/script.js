$(document).ready(function(){
    $("#fileInput").fileinput({
        previewFileIcon: "<i class=\"fa fa-edit\"></i>",
        previewFileType: "image",
        browseClass: "btn btn-success",
        browseLabel: "Pick Image",
        browseIcon: "<i class=\"fa fa-edit\"></i> ",
        removeClass: "btn btn-danger",
        removeLabel: "Delete",
        removeIcon: "<i class=\"fa fa-remove\"></i> ",
        uploadClass: "btn btn-info",
        uploadLabel: "Upload",
        uploadIcon: "<i class=\"fa fa-edit\"></i> "
    }); // {showCaption: false, dropZoneEnabled: false}
    $('.usersTable').stacktable({myClass:'responsive'});

    $('#usersTable').DataTable();

    //$('#fileupload').fileupload();



});
