

//for operator to update report status between unapprove and approve fo


$(document).on('click','.float',function(e){

 var status=$('#float').html()=="Approve"?"approved":"unapproved"
    var repID=$(this).data("repid")
 
   
/*
            let tempArrMultiForSingeReportNonComment=[]

                $(".fileInputed--singleReportAttach").each(function(index,value){
                  tempArrMultiForSingeReport.push(value.files[0] );
              })
*/











var data = {
    
    repStatusID:null, 
    repStatusType:status,
     repStatusDateCreated: 0,
     repID:repID,
     repUserID:$.cookie('userID')
    };


 







$.ajax({
            type: 'POST',
             url: 'php/updateStatusForOfficer.php',
           
            data: data,
            dataType: 'json',
            async:false,
            success: function(response) {

                    console.log('Status updated!');
                    getAllReort()
                    getReportsIntoInbox()
                    getReortForTable()
                    modal()
                    $('.active').removeClass('active');
                    $('.stateMsg').remove();
                 //   $('#float').html($('#float').html()=="Approve"?"Unapprove":"Approve")
            },
    
        });//EO ajax



    });//EO click Func
 
 

 //for operator to update the dept or nature of report 
$(document).on("click",".complaintNature_edit",(function(){
    var button=$(this)
    var select=$(this).prev()
 
	if(button.html()!=="(Save)"){
	
 
    	 select.removeAttr('disabled').prev().addClass('complaintNatureEditable')

	    button.html("(Save)")
    
 
    }else{
         
        var data={
            repID:repID,
            attribute:select.data('attribute'),
            value:select.val()}
        $.ajax({
            type: 'POST',
            url: 'php/updateReportAttribute.php',
            data: data,
            dataType: 'json',
            success: function(response) {
               

                var editedContent=$('.complaintNature').val();
                
                select.removeClass('complaintNatureEditable')
            
                select.attr('disabled','disabled');



                button.html("(Edit)")
 
	alert('Saved Successfully');
    
            },
    
        });//EO ajax

 



}
	
}))


$(document).on("change",".submitNotifyUser",(function(){


  if($(this).is(':checked')&&!getRevelantReportsForUpdate($(this).data("rep_street"))===false){
                         $('.relevantReportsBox').addClass("activeRelevantReps")
                              e.stopPropagation();}
                    else{ 
                      $(".submitNotifyUser").prop("checked", false);
                 e.stopPropagation();
    return false;
            
                    }       



}))