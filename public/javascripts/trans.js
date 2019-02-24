$(function () {
    $('.menu a').on('click',  function(event){
    
      var link =$(this).attr('class');
  
      if(link!==lastpage){
        $('.ajaxSpace').fadeOut(100, function(){
          getPage(link);
          
        });
        lastpage=link;
      }
    });
    var lastpage = 'main.ejs' ;
      getPage('main.ejs');
  
    function getPage(elm){
      console.log(elm);
      $.ajax({
        url: elm,
        type: 'GET',
        dataType: 'html',
        success: function(data){
          $('.ajaxSpace').html(data).fadeIn(100);
          
        },
        error:function(){
          alert('問題がありました');
        }
      });
    }
  });

