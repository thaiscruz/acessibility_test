//Tab altura
// var tabsFn = function () {
//   function init() {
//     setHeight();
//   }

//   function setHeight() {
//     var tabPane = $('.tab-pane'),
//       tabsHeight = $('.nav-tabs').height();
    
//       tabPane.css({
//         height: tabsHeight
//       });

    
//   }
//   $(init);
// }();

// Active das tr das tabelas
$(document).on('click', 'tbody tr', function (e) {
  $('.tabela-sites tbody tr').removeClass('selected');
  $(this).addClass('selected');

  $('.resultado-paginas tbody tr').removeClass('selected');
  $(this).addClass('selected');
});

function menu3() {
  $('[href="#sites-avaliados"]').tab('show');
}




// Página de Resultados de Sites Avaliados
var trTabelaSites = $(".tabela-sites.tabela-1 tbody tr");

trTabelaSites.click(function () {

  // Removendo e inserindo icone pdf
  $(".tabela-sites .icon-pdf").remove();
  $(".tabela-sites td:nth-child(2), .tabela-sites td:nth-child(4), .tabela-sites td:nth-child(5)").append(`<i class="icon-pdf fa fa-file-o" aria-hidden="true"></i`)

  // Escondendo os "irmãos da tr"
  $(this).siblings().hide();

  // Removendo e inserindo texto de resultado
  $(".tabela-sites .texto-resultado").remove();
  $(".tabela-sites").append(`<p class="texto-resultado">Resultado: 123 Páginas Avaliadas</p>`);

  // Removendo e criando outra tabela embaixo
  $(".resultado-paginas .tabela-2").remove();
  $(".resultado-paginas").append(` <table class="table tabela-sites tabela-2">
                                    <thead>
                                    <tr>
                                    <th>Endereço</th>                    
                                    <th>Nota de Avaliação</th>
                                    <th>Erros</th>
                                    <th>Avisos</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                    <td>http://siave.camaraavare.sp.gov.br/</td>                                           
                                    <td>45.05</td>
                                    <td>X</td>
                                    <td>X</td>
                                    </tr>

                                    <tr>
                                    <td>http://sino.camaraavare.sp.gov.br/Sino.Siave/</td>                                            
                                    <td>45.05</td>
                                    <td>X</td>
                                    <td>X</td>
                                    </tr>

                                    <tr>
                                    <td>http://sino.camaraavare.sp.gov.br/Sino.Siave/index/78/8</td>                                             
                                    <td>45.05</td>
                                    <td>X</td>
                                    <td>X</td>
                                    </tr>

                                    <tr>
                                    <td>http://sino.camaraavare.sp.gov.br/Sino.Siave/index/78/111</td>                                        
                                    <td>45.05</td>
                                    <td>X</td>
                                    <td>X</td>
                                    </tr>

                                    <tr>
                                    <td>http://sino.camaraavare.sp.gov.br/Sino.Siave/index/</td>
                                    <td>45.05</td>
                                    <td>X</td>
                                    <td>X</td>
                                    </tr>


                                    </tbody>
                                  </table>`)

  // Escondendo campo de busca    
  $("#busca").hide();


  ////////////////////////////////////////////////////////////



  $(".tabela-sites.tabela-2 tbody tr").click(function () {

    $(this).siblings().hide(); //irmãos escondem
    $(".tabela-1").hide(); //esconde tabela de cima

    //Removendo paginacao
    $(".navegacao").hide();

    // Removendo e inserindo icone pdf
    $(".tabela-2 .icon-pdf").remove();
    $(".tabela-2 td:nth-child(3), .tabela-2 td:nth-child(4)").append(`<i class="icon-pdf fa fa-file-o" aria-hidden="true"></i`)



    // Removendo e criando outra tabela embaixo
    $(".resultado-paginas .sites-erros, .resultado-paginas .erros-texto").remove()

    $(".resultado-paginas").append(` 

                  <div class="sites-erros">
                    <p class="erros-texto">Erros da Página: http://sino.camaraavare.sp.gov.br/ </p>
                    <!-- navegação erros -->
                    <nav class="nav-erros" aria-label="Navegação entre os erros mais comuns">
                    <ul class="nav nav-pills nav-stacked col-md-2">
                      <li class="active"><a href="#tab_marcacao" data-toggle="tab">Marcação</a></li>
                      <li><a href="#tab_formularios" data-toggle="tab">Formulários</a></li>
                      <li><a href="#tab_conteudo" data-toggle="tab">Conteúdo</a></li>
                      <li><a href="#tab_comportamento" data-toggle="tab">Comportamento</a></li>
                      <li><a href="#tab_apresentacao" data-toggle="tab">Apresentação</a></li>
                      <li><a href="#tab_multimidia" data-toggle="tab">Multímidia</a></li>
                    </ul>
                    </nav>
                    <!-- / navegação erros -->

                    <div class="tab-content col-md-10">
                    <div class="tab-pane active" id="tab_marcacao">
                    <ol>
                      <span>XX</span> <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      <span>XX</span><li>Sed id diam eget enim suscipit lacinia eget vitae magna.</li>
                      <span>XX</span> <li>Aliquam erat volutpat. Aliquam suscipit eu orci ac rhoncus.</li>
                      <span>XX</span> <li>Fusce sed velit ipsum. Nam vulputate euismod magna, eu convallis</li>
                      <span>XX</span> <li>Lacus facilisis consectetur. Suspendisse laoreet sed nisi ac viverra.
                      Pellentesque eget hendrerit massa.</li>
                    </ol>
                    </div>
                    <div class="tab-pane" id="tab_formularios">
                    
                    <ol>
                      <span>XX</span> <li>Sed id diam eget enim suscipit lacinia eget vitae magna.</li>
                      <span>XX</span> <li>Sed id diam eget enim suscipit lacinia eget vitae magna.</li>
                      <span>XX</span> <li>Aliquam erat volutpat. Aliquam suscipit eu orci ac rhoncus.</li>
                      <span>XX</span> <li>Fusce sed velit ipsum. Nam vulputate euismod magna, eu convallis</li>
                      <span>XX</span>  <li>Lacus facilisis consectetur. Suspendisse laoreet sed nisi ac viverra.
                      Pellentesque eget hendrerit massa.</li>
                    </ol>
                    </div>
                    <div class="tab-pane" id="tab_conteudo">

                    <ol>
                      <span>XX</span> <li>Aliquam erat volutpat. Aliquam suscipit eu orci ac rhoncus.</li>
                      <span>XX</span> <li>Sed id diam eget enim suscipit lacinia eget vitae magna.</li>
                      <span>XX</span> <li>Aliquam erat volutpat. Aliquam suscipit eu orci ac rhoncus.</li>
                      <span>XX</span><li>Fusce sed velit ipsum. Nam vulputate euismod magna, eu convallis</li>
                      <span>XX</span> <li>Lacus facilisis consectetur. Suspendisse laoreet sed nisi ac viverra.
                      Pellentesque eget hendrerit massa.</li>
                    </ol>
                    </div>
                    <div class="tab-pane" id="tab_comportamento">

                    <ol>
                      <span>XX</span><li>Fusce sed velit ipsum. Nam vulputate euismod magna, eu convallis</li>
                      <span>XX</span><li>Sed id diam eget enim suscipit lacinia eget vitae magna.</li>
                      <span>XX</span>  <li>Aliquam erat volutpat. Aliquam suscipit eu orci ac rhoncus.</li>
                      <span>XX</span>  <li>Fusce sed velit ipsum. Nam vulputate euismod magna, eu convallis</li>
                      <span>XX</span> <li>Lacus facilisis consectetur. Suspendisse laoreet sed nisi ac viverra.
                      Pellentesque eget hendrerit massa.</li>
                    </ol>
                    </div>
                    <div class="tab-pane" id="tab_apresentacao">

                    <ol>
                      <span>XX</span> <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      <span>XX</span> <li>Sed id diam eget enim suscipit lacinia eget vitae magna.</li>
                      <span>XX</span> <li>Aliquam erat volutpat. Aliquam suscipit eu orci ac rhoncus.</li>
                      <span>XX</span> <li>Fusce sed velit ipsum. Nam vulputate euismod magna, eu convallis</li>
                      <span>XX</span> <li>Lacus facilisis consectetur. Suspendisse laoreet sed nisi ac viverra.
                      Pellentesque eget hendrerit massa.</li>
                    </ol>
                    </div>
                    <div class="tab-pane" id="tab_multimidia">

                    <ol>
                      <span>XX</span> <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      <span>XX</span> <li>Sed id diam eget enim suscipit lacinia eget vitae magna.</li>
                      <span>XX</span> <li>Aliquam erat volutpat. Aliquam suscipit eu orci ac rhoncus.</li>
                      <span>XX</span>  <li>Fusce sed velit ipsum. Nam vulputate euismod magna, eu convallis</li>
                      <span>XX</span>  <li>Lacus facilisis consectetur. Suspendisse laoreet sed nisi ac viverra.
                      Pellentesque eget hendrerit massa.</li>
                    </ol>
                    </div>
                    </div>
                  </div>`)



  });

});



// Quando vc clica na nav, tudo volta ao normal
$(".nav-tabs, .nav-mobile").click(function () {
  // console.log( "funcionando" );

  // O campo de busca aparece
  $("#busca").show();

  // Os irmãos da tr aparecem
  trTabelaSites.siblings().show();

  // Texto de resultados some
  $(".tabela-sites p").remove();

  // Remover tabela de baixo e icones de pdf 
  $(".tabela-sites.tabela-1, .navegacao").show();
  $(".tabela-sites.tabela-2, .tabela-sites .icon-pdf, .resultado-paginas .sites-erros").remove();



});