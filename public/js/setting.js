
    /*** Table Users ***/

    $(document).ready(function(){
        carregarFormSetting();
        carregarValueForm();

        $("#successEditToken").hide();
    });
   
    // Search user
    function carregarFormSetting() {

         // Gif
         $('.setting_data').html('<div class="d-flex justify-content-center mt-3 loading">Loading&#8230;</div>');

        $.ajax({
        url: "/settingForm",
        method: 'GET',
        data: '' 
            }).done(function(data){
            //console.log(data);
            
            setTimeout(function() { 
                if(data) {
                    $('.setting_data').html(data);
                }else {
                    $('.setting_data').html('<div class="">Error</div>');
                }
            }, 500);
        });
    }

    // Show Setting
    function carregarValueForm() {
        $.ajax({
            url: "/setting/list",
            method: 'GET',
            data: '' 
                }).done(function(data){
                //console.log(data);
                if(data) {
                    setTimeout(function() { 
                        $('#idBoards').val(data.boards.id);
                        $('#boards').val(data.boards.token);
                        $('idCompany').val(data.company.id);
                        $('#company').val(data.company.token);
                        $('#idMonday').val(data.monday.id);
                        $('#monday').val(data.monday.token);
                }, 1000);
                    
                }else {
                    console.log('Error');
                }
            });
    }


    // Edit board
    $(document).on('click', '.SettingForm', function(e) {

        var id = $(this).val();

          switch(id) {
            case '1':
                var token = $('#boards').val();
                $(".SettingFormBoards").hide();
                $('.SettingFormBoardsLoading').append("<button type='button' class='btn btn-success addSettingFormBoardsLoading' id='#SettingFormBoardsLoading'>Atualizar...</button>");
              break;
            case '2':
                var token = $('#company').val();
                $(".SettingFormCompany").hide();
                $('.SettingFormCompanyLoading').append("<button type='button' class='btn btn-success addSettingFormBoardsLoading' id='#SettingFormCompanyLoading'>Atualizar...</button>");
              break;
              case '3':
                var token = $('#monday').val();
                $(".SettingFormMonday").hide();
                $('.SettingFormMondayLoading').append("<button type='button' class='btn btn-success addSettingFormBoardsLoading' id='#SettingFormMondayLoading'>Atualizar...</button>");
              break;
            default:
              // 
          }
       
        $.ajax({
            url: "/setting/edit/board",
            method: 'POST',
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data: {id: id, token: token},
                }).done(function(data){

                if(data) {
                    setTimeout(function() { 
                        //console.log(data);
                        carregarValueForm(0);
                        $( "#successEditToken" ).fadeIn(300).delay(3000).fadeOut(300);
                        $( ".addSettingFormBoardsLoading" ).remove();
                        $( ".addSettingFormCompanyLoading" ).remove();
                        $( ".addSettingFormMondayLoading" ).remove();
                        $(".SettingFormBoards").show();
                        $(".SettingFormCompany").show();
                        $(".SettingFormMonday").show();
                    }, 1000);

                }
            }).fail(function(error) {
                // Message errors
                $.each(error.responseJSON.errors, function( k, v ) {
                    $('.msgError').append("<div class='text-center alert alert-danger errorMsg' role='alert'>" + v + "</div>");
                  });

                  $( ".errorMsg" ).fadeIn(300).delay(3000).fadeOut(300);

                  carregarValueForm(0);

                  setTimeout(function() { 
                    $( ".errorMsg" ).remove();
                    $( ".addSettingFormBoardsLoading" ).remove();
                    $( ".addSettingFormCompanyLoading" ).remove();
                    $( ".addSettingFormMondayLoading" ).remove();
                    $(".SettingFormBoards").show();
                    $(".SettingFormCompany").show();
                    $(".SettingFormMonday").show();
                }, 3000);
              }); 
        });
        



  
   