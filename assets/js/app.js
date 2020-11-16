/*  javascript externo para a aplicação */




function popularCursos(){
	
 const listaCursos = [ "Java para WEB", 
                       "Java Desktop", 
					   "PHP", 
					   "C#"  ];	

 const conteudo = document.getElementById("content");

 var html = "<button onclick='formCurso();' class='btn-primary'>Novo</button>";
 html += "<hr />";
 html += "<h1>Cursos disponíveis</h1>";
 
 html += "<p>Listagem simples</p>";
 html += "<table cellpadding='4' cellspacing='4' rules='both' width='90%'>";
 html += "<thead><tr><th>Nome do curso</th></tr></thead>";
 html += "<tbody>";
 
 for(var i=0; i < listaCursos.length; i++){
 	 
     html += "<tr><td>" + listaCursos[i] + "</td></tr>";	 
	 
 }
 html +="</tbody>";
 html +="</table>";
	

 conteudo.innerHTML = html;	
	
}

function popularProfessores(){
	
 const listaProfessores = [ "Wanderlei Silva", 
                       "Emmanuel Xavier"
					  ];	

 const conteudo = document.getElementById("content");
 
 var html = "<h1>Professores </h1>";
 
 html += "<p>Listagem simples</p>";
 html += "<table cellpadding='4' cellspacing='4' rules='both' width='90%'>";
 html += "<thead><tr><th>Nome do Professor</th></tr></thead>";
 html += "<tbody>";
 
 for(var i=0; i < listaProfessores.length; i++){
 	 
     html += "<tr><td>" + listaProfessores[i] + "</td></tr>";	 
	 
 }
 html +="</tbody>";
 html +="</table>";
	

 conteudo.innerHTML = html;	
	
}	
	

function popularDisciplinas(){
	
 const listaDisciplinas = [ 
                       "Lógica de Programaçlão",
                       "Algoritmo Estruturado", 
                       "Banco de dados"
					  ];	

 const conteudo = document.getElementById("content");
 
 var html = "<h1> Disciplinas </h1>";
 
 html += "<p>Listagem simples</p>";
 html += "<table cellpadding='4' cellspacing='4' rules='both' width='90%'>";
 html += "<thead><tr><th>Nome da Disciplina</th></tr></thead>";
 html += "<tbody>";
 
 for(var i=0; i < listaDisciplinas.length; i++){
 	 
     html += "<tr><td>" + listaDisciplinas[i] + "</td></tr>";	 
	 
 }
 html +="</tbody>";
 html +="</table>";
	

 conteudo.innerHTML = html;		
	
}

function popularAlunos(){
	
 const listaAlunos = [ "José da Siva", 
                       "Ricardo Moreno",
					   "Francklin Martins"
					  ];	

 const conteudo = document.getElementById("content");
 
 var html = "<h1> Alunos Matriculados </h1>";
 
 html += "<p>Listagem simples</p>";
 html += "<table cellpadding='4' cellspacing='4' rules='both' width='90%'>";
 html += "<thead><tr><th>Nome do Aluno</th></tr></thead>";
 html += "<tbody>";
 
 for(var i=0; i < listaAlunos.length; i++){
 	 
     html += "<tr><td>" + listaAlunos[i] + "</td></tr>";	 
	 
 }
 html +="</tbody>";
 html +="</table>";
	

 conteudo.innerHTML = html;		
	
}


function formCurso(){
	
	var frmCurso  = "<h1>Inclusão de Curso</h1>";
    frmCurso += "<hr />";	
	frmCurso += "<form id='frmCurso'  action=''   method='POST'>"; 
	
	frmCurso += "<p>Cadastrar Curso</p>";
	frmCurso += "<label for='nomeCurso'>Nome do curso:</label><br>";
	frmCurso += "<input type='text' id='nomeCurso' name='nomeCurso' size='50'>";
	frmCurso += "<p style='margin: 5px'></p>";
	frmCurso += "<button class='' type='submit' >Salvar</button>";
	
	frmCurso += "</form>";
	

	const conteudo = document.getElementById("content");

    document.getElementById("frmCurso")
	addEventListener('submit', function(e){
 	e.preventDefault();
	//alert("Aqui os dados podem ser enviados para o servidor backend tratar..");
	
	conteudo.innerHTML = "Dados salvos com sucesso.";
	
}); 
	conteudo.innerHTML = frmCurso;
}



function carregarPagina( p ){
	
	var conteudo = document.getElementById("content");
	
	switch(p){
		
		case "cursos":
		    popularCursos();
		break;
		
		case "disciplinas":
		   popularDisciplinas();
		break;
		
		case "professores":
		   popularProfessores();
		break;
		
		case "alunos":
		   popularAlunos();
		break;
		
		default: 
		    conteudo.innerHTML = "<h1>Não implementado</h1>";
	}
	
}

