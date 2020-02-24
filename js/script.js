  $(document).ready(function(){
    var myKey = JSON.parse(apiKey);
    console.log(myKey[0]);
    myKey = myKey[0].key;
    console.log(myKey);
    function homePage(){
          $.ajax({
            url:`http://newsapi.org/v2/top-headlines?country=nz&apiKey=${myKey}`,
            type:'GET',
            data:'json',
            success: function(data){
              console.log(data);
                var art = data.articles[0].author ;
                var title = data.articles[0].title ;
                var img = data.articles[0].urlToImage ;
                console.log(art); console.log(title); console.log(img);
                for(i=0; i < data.articles.length; i++) {
                  document.getElementById('load').innerHTML +=
                  '<div class="col-lg-4 col-md-6 col-sm-12 padding">' +
                  '<div class="back" style="">' +
                  '<img src=" ' + data.articles[i].urlToImage +' " class="card-img-top img" alt="">' +
                  '<div class="card-body">' +
                  '<h5 class="card-title"> '+ data.articles[i].title +' </h5>' +
                  '<h5 class="card-title"> '+ data.articles[i].author +' </h5>' +
                  '<a class="remove" href="'+data.articles[i].url+'" target="_blank">Read More</a>'+
                '</div>' +
            '</div>';
                }
            },//success
                error:function(){
                      console.log('error');
                }//error
            });//ajax
    } // hompage ends here
    homePage();
    //reading users choice
    	document.getElementById('submit').addEventListener('click', function(){
          $('#load').css('display','none');
          search = document.getElementById('searchInput').value;
          country = document.getElementById('country').value;
        	catagory = document.getElementById('catagory').value;
        console.log(country);  console.log(catagory);   console.log(search);
        displayData(catagory, country, search);
      });
// submit button
      function displayData(cat,con,ser){
            $.ajax({
              url:`http://newsapi.org/v2/top-headlines?q=${ser}&country=${con}&category=${cat}&apiKey=${myKey}`,
              type:'GET',
              data:'json',
                  success: function(data){
                    console.log(data);
                    function testing(){
                      var art = data.articles[0].author ;
                      var title = data.articles[0].title ;
                      var img = data.articles[0].urlToImage ;
                      document.getElementById('result').innerHTML +=
                        '<div class="col-12">' +
                        '<h5 class="col-8 margin "> There are '+ data.totalResults +' total results found </h5>' +
                        '</div>'+
                        '<br />'+
                        '<br />'+
                        '<br />';

                      for(i=0; i < data.articles.length; i++) {
                        document.getElementById('result').innerHTML +=
                              '<div class="col-lg-4 col-md-6 col-sm-12 padding">' +
                              '<div class="back" style="">' +
                              '<img src=" ' + data.articles[i].urlToImage +' " class="card-img-top img" alt="">' +
                              '<div class="card-body">' +
                              '<h5 class="card-title"> '+ data.articles[i].title +' </h5>' +
                              '<h5 class="card-title"> '+ data.articles[i].author +' </h5>' +
                              '<a class="remove" href="'+data.articles[i].url+'" target="_blank">Read More</a>'+
                            '</div>' +
                        '</div>';
                      }
                    }
                    testing();
                  },//success
                  error:function(){
                      console.log('error');
                    }//error
              });//ajax
      } // functione displayData ends here
});//document.ready
