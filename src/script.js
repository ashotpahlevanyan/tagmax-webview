$(document).ready(function(){
    // $("#fileInput").fileinput({
    //     previewFileIcon: "<i class=\"fa fa-edit\"></i>",
    //     previewFileType: "image",
    //     browseClass: "btn btn-success",
    //     browseLabel: "Pick Image",
    //     browseIcon: "<i class=\"fa fa-edit\"></i> ",
    //     removeClass: "btn btn-danger",
    //     removeLabel: "Delete",
    //     removeIcon: "<i class=\"fa fa-remove\"></i> ",
    //     uploadClass: "btn btn-info",
    //     uploadLabel: "Upload",
    //     uploadIcon: "<i class=\"fa fa-edit\"></i> "
    // }); // {showCaption: false, dropZoneEnabled: false}
    $('.usersTable').stacktable({myClass:'responsive'});

    $('#usersTable').DataTable();

    //$('#fileupload').fileupload();

    $("#fileInput").fileinput({
        showPreview: true,
        showCaption: true,
        browseClass: "btn btn-success btn-sm withIcon browse",
        browseLabel: "",
        removeClass: "btn btn-danger btn-sm withIcon",
        removeLabel: "Delete",
        uploadClass: "btn btn-info btn-sm withIcon",
        cancelClass: "btn btn-secondary btn-sm withIcon",
        uploadLabel: "Upload",
        removeIcon: "<i class=\"fa fa-trash\"></i> ",
        uploadIcon: "<i class=\"fa fa-upload\"></i> ",
        cancelIcon: "<i class=\"fa fa-close\"></i> ",
        allowedPreviewTypes: ["text"],
        allowedPreviewExtensions: ["csv"],
        fileTypeSettings: {
            office: function (vType, vName) {
                return vType.match(/(word|excel|powerpoint|office)$/i) ||
                    vName.match(/\.(docx?|xlsx?|pptx?|pps|potx?)$/i);
            },
            text: function(vType, vName) {
                return typeof vType !== "undefined" && vType.match('text.*') || vName.match(/\.(txt|md|csv|nfo|php|ini)$/i);
            }
        }
    });


});
