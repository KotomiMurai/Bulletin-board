$(function() {
  $(document).on('click', '#rep-button' , function() {
    var rep_box = $(this).closest("ul");
    var rep_num = $(this).prev().val();
    var rep_name = $("#rep-name"+ rep_num).val();
    var rep_comment = $("#rep-comment"+ rep_num).val();
    rep_box.before(
      "<ul'><li>" + 
      "<p>" + rep_name + "：" + rep_comment + "</p>" + 
      "</li></ul>"
    );
    //初期化
    $("#rep-name"+ rep_num).val("");
    $("#rep-comment"+ rep_num).val("");
  });
});

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
    var thread = $("input#thread:last").val();
    if(thread && thread > 0){
      thread = parseInt(thread) + 1;
    } else {
      thread = 1;
    }
    $("#todo-list").append(
        "<ul id='rep-box'><li>" + 
        "<input class='rep-name' id='rep-name" + thread + "' type='text' size=10 placeholder='名前'>" + 
        "<textarea class='rep-comment' id='rep-comment" + thread + "'  style='height: 2em' placeholder='コメント'></textarea>" + 
        "<input type='hidden' id='thread' value='"+ thread +"'>" + 
        "<button id='rep-button'>返信</button>" + 
        "</li></ul>"
    );

    //$("#todo-list").listview('refresh');
    
    //初期化
    $("#todo-title").val("");
    $("#todo-name").val("");
    $("#todo-body").val("");
};


