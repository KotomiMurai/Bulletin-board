// function addTodoPicture() {
//     navigator.camera.getPicture(addTodo, function() {
//         alert("Failed to get camera.");
//     }, {
//         quality : 50,
//         destinationType : Camera.DestinationType.DATA_URL,
//         targetWidth : 100,
//         targetHeight : 100
//     });
// }
function addTodo(camera_url) {
    var title = $("#todo-title").val();
    //名前の取得
    var name = $("#todo-name").val();
    //現在日時の取得
    var date = new Date();
      var year = date.getFullYear();
      var month = (date.getMonth()+1)
      var day = date.getDate();
      var hour = date.getHours();
      var minutes = date.getMinutes();
      //時刻表示の桁数を２桁に揃える
      if (hour < 10) {
      hour = "0" + hour;
      }
      if (minutes < 10) {
      minutes = "0" + minutes;
      }
    var body = $("#todo-body").val();
    var img_tag = "";
    if (camera_url) {
        img_tag = "<img src='data:image/jpeg;base64," + camera_url + "'>";
    }
    $.mobile.changePage($("#list-page"));
    $("#todo-list").append(
      "<li>" + img_tag +
      "<h3>" + title + "</h3><p>" +
      name + " " + 
      year + "/" + month + "/" + day + " " + hour + ":" + minutes + "<p>" +
      body + "</p></li>"
      );
    //返信用のボックス追加
    $("#todo-list").append(
        "<ul><li>" + 
        "<div id='rep-box'><input id='rep-name' type='text' size=10 placeholder='名前'>" + 
        "<textarea id='rep-comment'  style='height: 2em' placeholder='コメント'></textarea>" + 
        "<input id='add-button' type='button' value='返信' onclick='addReply()'></div>" + 
        "</li></ul>"
    );

    $("#todo-list").listview('refresh');
};

function addReply(){
  var rep_name = $("#rep-name").val();
  var rep_comment = $("#rep-comment").val();
  $("#rep-box").before(
    "<ul><li>" + 
    "<p>" + rep_name + "：" + rep_comment + "</p>" + 
    "</li></ul>"
  );
}