let arrPosts = [];
/*
  let newDiv = "<div id ='target' class='post ' >"+
  "<div class='post-img'><a href='#'><img id='img-user' src='baseline_account_circle_black_48dp.png'></a></div>"+
  "<div class='property-user'>"+
     "<div class='top-post'>"+
      "<div class='user-name' ><h3 class='h3-name-post'>kenan hassan</h3></div>"+
      "<div  class='icon-edit more'><span class='material-icons'> expand_more </span></div>"+
      "</div>"+
     "<div class='user-post'><p class='p-post'></p></div>"+
     "<div class=''>"+
      "<span class='material-icons icons-post'>chat_bubble_outline </span>"+
      "<span class='material-icons icons-post'>favorite_border</span>"+
      "<span class='material-icons icons-post'>vertical_align_bottom</span>"+
     "</div>"+  
  "</div>"+
  "<div id ='mneu' class='mneu-item hide'>"+
      "<div class='delete-item'>"+
          "<div class='delete'><a href='#' ><span class='material-icons icon-delete'> delete</span> <p class='btn-delete'>Delete</p></a></div>"+
      "</div>"+
      "</div> </div>";*/


$(document).ready(function () {
    $(".btn-post").click(function () {
        let valuePost = $("#textarea-post").val();
        if (valuePost !== "") {
            let id = new Date().getTime();
            setsIdText(id, valuePost);
            $("#textarea-post").val("");

            let attrDiv = $("#target").clone();
            attrDiv.removeClass("hide");
            attrDiv.attr("id", id);
            attrDiv.find(".p-post").text(valuePost);
            attrDiv.find(".icon-delete").click(() =>{
                deletePost(id);
            });
            attrDiv.find(".like-post").click(() =>{
                 likePost(id);
            });
            attrDiv.find(".send-icon").click(() =>{
                addComment(id);
            });
            attrDiv.find(".icon-comment-post").click(() =>{
                viweDivComment(id); 
            })
            $(".add-post").prepend(attrDiv);
        }
    });


     const deletePost = (id) => {
         
         alert("Are you sure you want to delete the post?");
         $("#"+id).remove();
     };
     const likePost = (id) => {
        
         arrPosts.forEach(e =>{
             if( e.id === id ){
                 if(e.like.length === 0){
                    e.like.push(1);
                     $("#"+id).find(".like-post").text("favorite");
                 }else{
                     e.like.pop();
                    $("#"+id).find(".like-post").text("favorite_border"); 
                 }
             }
         });
     };
     const addComment = (id) =>{
            let valueTextCom = $("#"+id).find(".textarea-comment").val();
          if( valueTextCom !== ""){
              arrPosts.forEach(e =>{
                  if(e.id === id){
                      e.comment.push(valueTextCom);
                      $("#"+id).find(".div-comment-user").append("<div class='div-img-comment'><div class='img-comment'><a href='#'><img id='img-user' src='baseline_account_circle_black_48dp.png'></a></div><div class ='comment-user'><p class='p-comment'>"+valueTextCom+"</p></div></div>");
                      $("#"+id).find(".textarea-comment").val("");
                  }
              });
          }

     };
     const viweDivComment = (id) =>{
         $("#"+id).find(".div-comment").toggle(250);
     };
    
});

const setsIdText = (id, post) => {
    let obj = {
        id: id,
        post: post,
        like: [],
        comment: []
    };
    arrPosts.push(obj);
    console.log(arrPosts);
};
