$(document).ready(function(){
  var array = [] ;
   $('#add_product').click(function(){
         var object = objects();
         if(temp == 1){
          array.push(object);
          append(array); }
   });
   
   function objects(){
     var id = $('#product_sku').val();
     var p_name = $('#product_name').val();
     var price = $('#product_price').val();
     var quantity = $('#product_quantity').val();
   
   if(check(id, p_name, price) && validate(id,array)){
    temp = 1
    $('.success').css('display','block');
    return {'pro_id':id, 'pro_name':p_name, 'pro_price' :price ,'pro_quantity': quantity};
    
  }
  else{
    $('.error').css('display','block');
      temp = 0 ;
  }}
  $('.close').click(function(){
    $('.success').css('display','none');
    $('.error').css('display','none');
  })
  function check(id,p_name,price){
    if (id == '') {
      alert('pls enter id!!')
      return false
    } else if (isNaN(id)) {
      alert('pls enter valid id')
      return false
    } else if (p_name == '') {
      alert('pls enter name!!')
      return false
    } else if (!isNaN(p_name)) {
      alert('pls enter valid name!!')
      return false
    } else if (price == '') {
      alert('pls enter price!!')
      return false
    } else if (isNaN(price)) {
      alert('pls enter valid price')
      return false
    } else {
      return true
    }
  }
  function validate(id ,array){
    for (var i = 0; i< array.length; i++){
      if (id == array[i].pro_id){
          return false;
      }
  }
  return true;
  }
  function append(array){
    var html = '<tr><td> Pro_id </td><td> Pro_name </td><td> Pro_price </td><td> Pro_quantity </td></tr>';

    for (var i=0; i < array.length; i++){
      html += '<tr id = "delrow" data-row = '+array[i].pro_id+'>\
      <td>'+array[i].pro_id+'</td>\
      <td>'+array[i].pro_name+'</td>\
      <td>'+array[i].pro_price+'</td>\
      <td>'+array[i].pro_quantity+'</td>\
      <td><a href ="#" id = "editform" data-id = '+array[i].pro_id+'>Edit</a></td>\
      <td><a href ="#" id = "deleterow" data-id = '+array[i].pro_id+'> delete </a></td></tr>'
    }
    $('Table').html(html);
  }
  $('body').on('click',"#deleterow",function(){
    var pid = $(this).data('id');
    return deleted(pid);
  });
  $('body').on('click','#editform',function(){
    var pid = $(this).data('id');
    return get(pid);
    
  });
  function get(id){
    // id = $('this').data('id');
    // console.log("hello");
  var product = getProduct(id);
  $('#product_sku').val(id)  ;
  $('#update_product').css('display','block');
  $('#add_product').css('display','none');
} ;
  
  function getProduct(id){
    for(var i =0; i<array.length ; i++){
      if(id == array[i].pro_id){
          return array[i] ;
      }
     
  }
  
      alert("id not present");
  }
  $('#update_product').click(function(){
    $('#add_product').css('display','block') ;
    $('#update_product').css('display','none') ;
    var pid = $('#product_sku').val() ;
    var p_name = $('#product_name').val() ;
    var p_price = $('#product_price').val() ;
    var quantity = $('#product_quantity').val();
    for(var i =0; i<array.length ;i++){
        if(pid == array[i].pro_id){
            array[i] = {'pro_id' : pid , 'pro_name': p_name, 'pro_price' :p_price ,'pro_quantity': quantity };
            
        }
    }
    
    append(array);
  });

  function deleted(id){
    var product = getProduct(id);
    flag= 0;
    for(var i =0; i<array.length ;i++){
        if(id == array[i].pro_id){
          var ind = array.indexOf(array[i]);
          console.log(ind);
          array.splice(ind,1);
       }
    }
    append(array);
       }
});




















































// $(document).ready(function(){
//   $('#addbtn').click(function(){
//     var object = objects();
//     if(temp == 1){
//     array.push(object);
//     append(array); 
//   }
//   });
//   function objects(){
//     var id = $('#id').val();
//     var name = $('#name').val();
//     var price = $('#price').val();
  
//     if (check(id, name, price) && validate(id,array)) {
//         temp = 1
//         return {'pro_id':id, 'pro_name':name, 'pro_price' :price }
        
//       }
//       else{
//           window.alert("pls enter valid  ");
//           temp = 0 ;
//       }
// }
// function check(id, name, price) {
//     if (id == '') {
//       alert('pls enter id!!')
//       return false
//     } else if (isNaN(id)) {
//       alert('pls enter valid id')
//       return false
//     } else if (name == '') {
//       alert('pls enter name!!')
//       return false
//     } else if (!isNaN(name)) {
//       alert('pls enter valid name!!')
//       return false
//     } else if (price == '') {
//       alert('pls enter price!!')
//       return false
//     } else if (isNaN(price)) {
//       alert('pls enter valid price')
//       return false
//     } else {
//       return true
//     }
//   }
//   function validate(id,array){
//     for (var i = 0; i< array.length; i++){
//         if (id == array[i].pro_id){
//             return false;
//         }
//     }
//     return true;
// }
// });
// function append(arr) {
//     //   var table = document.getElementById("myTable");
    
//       var html = '<tr><td> Pro_id </td><td> Pro_name </td><td> Pro_price </td></tr>';
    
//     for (var i=0; i < array.length; i++){
//       html += '<tr>\
//       <td>'+array[i].pro_id+'</td>\
//       <td>'+array[i].pro_name+'</td>\
//       <td>'+array[i].pro_price+'</td>\
//       <td><a href ="#" onclick = edit('+array[i].pro_id+')>Edit</a></td>\
//       <td><a href ="#" onclick = deleted('+array[i].pro_id+')> delete </a></td></tr>'
//     }
//     document.getElementById('Table').innerHTML = html
    
//   }
// function edit(id){
//   var product = getProduct(id);
//   document.getElementById('id').value = product.pro_id ;
//   document.getElementById('updatebtn').style.display = 'block'
//   document.getElementById('addbtn').style.display = 'none'
// }
// function getProduct(id){
//   for(var i =0; i<array.length ; i++){
//       if(id == array[i].pro_id){
//           return array[i] ;
//       }
     
//   }
  
//       alert("id not present");
  
// }
// function updateProduct(){
//   document.getElementById('addbtn').style.display = 'block' ;
//   document.getElementById('updatebtn').style.display = 'none' ;
//   var pid = document.getElementById('id').value ;
//   var p_name = document.getElementById('name').value ;
//   var p_price = document.getElementById('price').value ;
//   for(var i =0; i<array.length ;i++){
//       if(pid == array[i].pro_id){
//           array[i] = {'pro_id' : pid , 'pro_name': p_name, 'pro_price' :p_price };
          
//       }
//   }
  
//   append(array);
//   // append(array);
// }