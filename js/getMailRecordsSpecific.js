 
var mailResultSpecific
var mailLastestOne



 function getMailRecordsspecific(repID){
  let content=""
  let title
  let replayBox
  let noOfMail
 
      $('.mail-record-box-table-specific').html("");
   
      $('.mail-record-box-table-specific').fadeOut(1);
  let replyButton='<div class="mailBoxFunctionInsideRep-specific">'
+'            <button class="sendCmtBtn sendCmtBtnGP2 mail-specific-replayButton">Replay</button>'
+' </div>'




















       //var identity=data.isSent==0?"Sender":"Recipient"
      
     
$.ajax({
        type:'POST',
        dataType: "json",
        data: {
        repID,repID,
       
        userID: $.cookie('userID')
          },
         async: false,
   
          url: "./php/getMailRecordsSpecific.php",
          success: function (result) {
mailResultSpecific =result
 title=result[0].repTitle
 noOfMail=result.length
                
     $.each(result, function(index, data){
           
            content +=
            '<div class="mail-list-summary-one mail-list-summary-specific  '+ ((data.isSent==0&&data.isRead==0)?"mail-list-summary-one--isRead":"")+'" '  
+' data-mailid='+data.mailId 
+' data-issent='+data.isSent
+' data-isread='+data.isRead+'>'


//SO title
+'<div class="mail-specific-mail-head">'


        +'<div class="mail-specific-head-figureImage">'

        +(data.userName).charAt(0)
        +'</div>'


        +'<div class="mail-specific-head-sendReceive">'

              +'<div class="mail-specific-head-sender">'
 +'<div class="mail-specific-head-sender-name"> ' 
       +data.userName
       +' </div>'
 
 +'<hr  class="mail-specific-head-betwennNameDate">'
        
      



 +'<div class="mail-specifi-head-dateCreated"> Date:'+data.dateCreated+' </div>'
              +'</div>'

              +'<div class="mail-specific-head-receiver">'
   
+data.content

              +'</div>'

        +'</div>'

+'</div>'



//EO title


+'<div class="mail-specific-short">'







 + '<div class="mail-content-box"   >'
  
 +'<div class="mailBoxTitle">'

 //
 
//'+data.repTitle +'
 +'</div>'
 
 



 +'<div class="mailBoxRecipients">'
 

  +'</div>'
 
+'<div class="submitOptions">'
+'          <textarea class="mailTextAreaForContent mailTextArea mailTextAreaSpecific" placeholder="replay..." rows="20" name="comment[text]" id="comment_text" cols="40"'
+'            class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list"'
+'            aria-haspopup="true" style="resize:none;" '+status+'>'

      + "Recipient:"
         + (data.isSent==0?"Officers":(data.posterName))



+'</textarea>'
+'          <br>'

+ '  <a href="data:image/png;base64,'+ data.attachment+'" download>'+(data.attachName==null?"":data.attachName)+'</a>' 

 +'<!--SO mailBoxFunctionInsideRep-->'
 
 

+'<!--EO mailBoxFunctionInsideRep-->'

+'</div>'
+'</div>'
//EO Mail Box


+'</div>'
 



+'            </div>'

 





 replayBox=

   '    <!-- SO mail_specific_mail_box  -->'
+'                <div class="mailSubmitBox--JS mail_specific_mail_box" id="mailSubmitBox" data-repID='+repID+' data-mailTitle='+title+'>'
+''
+'                  <div class="mailBoxRecipients">'
+'                    <span class="mail-replay-title">'
+'<img src="./images/replyIcon.png" class="replayIcon" >'
+data.userName+'</span>'
+'                    <select name="Status" class="mail-content-replay">'
+'                      <option value="Unchange">None</option>'
+'                      <option value="Fack Checking">Default Group</option>'
+'                      <option value="Wait in line">Wait in line</option>'
+'                      <option value="Solved">Solved</option>'
+'                      <option value="unapproved">reclassfiy</option>'
+'                      <option value="approved" class="temp_test">for Test</option>'
+'                    </select>'
+'  <span class="mail-list-submit-box-cancel close-transform-box" >X</span>'
+'                  </div>'
+''
+''
+''
+''
+'                  <div class="submitOptions">'
+'                    <textarea class="cmtBox mailTextAreaForReply mailTextArea" placeholder="remark..." rows="20"'
+'                      name="comment[text]" id="comment_text'
+'      cols=" 40" class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list"'
+'                      aria-haspopup="true" style="resize:none;"></textarea>'
+'                    <br>'
+''

+'<!--SO mail_specific_submit-box-->'

+'<div class="maiBoxFunInsideRep mail_specific_submitButton"> '
+'<!--  image file and close button-->'
+'<span class="file-input-Ctn file-input-Ctn-mail demonHide">'

+'<input type="file" name="file-input"  class="file-input file-input-mail file-input-mail-JS" id="file-input-mail-specific">'
+'<span class="file-input-cancel">X</span>'
+'</span>'


+'<!--SO  button and label and image-->'
+'<div class="mailBoxFunctionInsideRep ">'
+'            <button class="sendCmtBtn sendCmtBtnGP2 mail-specific-submitButton"  data-submitctn=".mail_specific_mail_box">Send</button>'
+' <div class="uploadForAttach">'

  +'  <label for="file-input-mail-specific">'
    +'    <img src="./images/attachIcon.png"/>'
   +' </label>'

 +'</div>'
 +'</div>'



+'</div> '
+'<!--EO mail_specific_submit-box button and label and image-->'



+'                    </div>'
+''
+''
+'                  </div>'
+'                </div>'

+                '<!--EO mail_specific_mail_box-->'
 

















            
        })
           $.each(result, function(index, data){
           
            mailLastestOne=data.mailId

            return false;
        })
        
                
 
     
        $(".mail-record-box-table-specific").html(
        content==""?"No any mail":(  '<h3   >Title:'+title+'</h3>'+ content+replyButton+replayBox) );
                      
 
 
        $('.mail-record-box-table-specific').fadeIn(500);

 let mailBox=$(".mail-record-box-table-specific > div").eq(noOfMail-1).addClass('mailListHover').css('height', 'auto');
     
  let textArea=$(mailBox).find( '.mailTextAreaSpecific');
  let tempText=$(mailBox).find( '.mail-specific-head-receiver').html()
  $(mailBox).find('.mail-specific-head-receiver').html(textArea.html())
  
  textArea.html(tempText)

      
          //  addNoIndex(); 
        //  var table =document.getElementById('mail-record-box-table-specific')
       // getPagination(table);


              }
 
        
}) }


function insertMailBoxIntoPost(){

  let content=
'            <!-- SO mail-specific -->'


+'            <div class="mailbox-mainLayer-specific">'
+'              <div class="mailbox-mainLayer-top">'
+'                <div class="mailBoxFilterTitle"> Mail </div>'

 
+'                <div class="mail-list-filter-Box-specific">'

+'                  <div>'
+'                    User: <input type="text">'
+'                    Keyword: <input type="text">'
+'                  </div>'
+'                  <button class="mailbox-filterButton">Search</button>'
+'                </div>'
+'              </div>'

+'              <div class="mail-record-box mail-reocrd-box-specific" id="mail-record-box">'
+'                <div class="mailModal-sideBar ">'

+'                </div>'
+'                <div class="maibox-list maibox-list-specific">'
+'                  <div class=" ">'

+'                    </h3>'
+'                  </div>'
+'                  <div id="mail-record-box-table" class="mail-record-box-table-specific">'

+'                  </div>'

+'                  <div class=" complaintTableBottomFunc mail-reocrd-table-pagination">'

+'                  </div>'
+'                  <!-- <div class="mail-record-table-container">'
+'              <nav>'
+'                <ul class="mail-record-table-pagination"> </ul>'

+'              </nav> -->'

+'                </div>'
+'                <div class="mail-content-ctn">'
+'                  <div class="mail-content"></div>'

+'                </div>'

+'              </div>'
+'            </div>'
+'             <!-- EO mail-specific -->'


  $('.containerOrderList').append(content)
}
