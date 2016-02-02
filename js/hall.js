var salasModule = angular.module('salasModule',[]);

salasModule.controller("salasControl", function($scope, $compile) {

	var loja = null;
		
	$scope.cidades = [
		{codigo: 1, nome: 'Brasília'}, 
		{codigo: 2, nome: 'Taguatinga'}
	];

	$scope.limpaLojasPosicoes = function() {
		$scope.mostraNav = false;
		$scope.mostraLojas = false;
		$scope.mostraPosicoes = false;
		$scope.mostraMapaPosicao = false;
	}

	$scope.selecionaCidade = function(cidade) {
		if(cidade.codigo == 1){
			$scope.lojas = [
				{codigo: 1, nome: 'Loja01'},
				{codigo: 2, nome: 'Loja02'}
			];
		} else {
			$scope.lojas = [
				{codigo: 3, nome: 'Loja03'}
			];
		}
		$scope.navLojas = [
			{nome: cidade.nome}
		];
		$scope.mostraNav = true;
		$scope.mostraLojas = true;
	} 

	$scope.selecionaLoja = function(loja) {
		$scope.loja = loja;
		if(loja.codigo == 1){
			$scope.tipoPosicoes = [
				{codigo: 1, nome: 'Individuais', qtd: 14},
				{codigo: 2, nome: 'Para 2 pessoas', qtd: 5},
				{codigo: 3, nome: 'Para 4 pessoas', qtd: 2}
			];
		} else if(loja.codigo == 2){
			$scope.tipoPosicoes = [
				{codigo: 1, nome: 'Individuais', qtd: 12},
				{codigo: 2, nome: 'Para 2 pessoas', qtd: 8},
				{codigo: 3, nome: 'Para 4 pessoas', qtd: 6}
			];
		} else if(loja.codigo == 3){
			$scope.tipoPosicoes = [
				{codigo: 1, nome: 'Individuais', qtd: 4},
				{codigo: 2, nome: 'Para 2 pessoas', qtd: 1},
				{codigo: 3, nome: 'Para 4 pessoas', qtd: 0}
			];
		}
		if($scope.navLojas.length > 1){
			$scope.navLojas.splice(1,1);
		}
		$scope.navLojas.push({nome: loja.nome});
		$scope.mostraPosicoes = true;
	} 


	$scope.selecionaTipoPosicao = function(tipoPosicoes){
		if(tipoPosicoes.codigo == 1){
			$scope.posicoes = [
				{codigo: 1, nome: 'Baia 1', disponivel: true},
				{codigo: 2, nome: 'Baia 2', disponivel: false},
				{codigo: 3, nome: 'Baia 3', disponivel: true},
				{codigo: 4, nome: 'Baia 4', disponivel: false},
				{codigo: 5, nome: 'Baia 5', disponivel: false},
				{codigo: 6, nome: 'Baia 6', disponivel: true},
				{codigo: 7, nome: 'Baia 7', disponivel: false},
				{codigo: 8, nome: 'Baia 8', disponivel: true},
				{codigo: 9, nome: 'Baia 9', disponivel: true}
			];

		} else if (tipoPosicoes.codigo == 2) {
			$scope.posicoes = [
				{codigo: 10, nome: 'Mesa 10', disponivel: false},
				{codigo: 11, nome: 'Mesa 11', disponivel: false},
				{codigo: 12, nome: 'Mesa 12', disponivel: false},
				{codigo: 13, nome: 'Mesa 13', disponivel: true},
				{codigo: 14, nome: 'Mesa 14', disponivel: true},
				{codigo: 15, nome: 'Mesa 15', disponivel: false},
			];

		} else if (tipoPosicoes.codigo == 3) {
			$scope.posicoes = [
				{codigo: 16, nome: 'Mesa 16', disponivel: true},
				{codigo: 17, nome: 'Mesa 17', disponivel: false},
				{codigo: 18, nome: 'Mesa 18', disponivel: false},
				{codigo: 19, nome: 'Mesa 19', disponivel: true},
				{codigo: 20, nome: 'Mesa 20', disponivel: false}
			];

		};
		if($scope.navLojas.length > 2){
			$scope.navLojas.splice(2,1);
		}
		$scope.navLojas.push({nome: tipoPosicoes.nome});
		$scope.mostraLojas = false;
		$scope.mostraPosicoes = false;
		$scope.mostraMapaPosicao = true;
	}

	$scope.reservarPosicao = function(posicao){
		var lj = $scope.loja.nome;
		var texto = posicao.disponivel ? ' disponivel' : ' não disponivel';
		alert(posicao.nome + texto + ' na ' + lj);
	}
});

var sliderHoras = new Slider("#txtSliderHoras");
sliderHoras.on("slide", function(slideEvt) {
  //alert(slideEvt);
  //$("#txtHoras")[0].value = slideEvt + ':00';
  $("#spanHoras").text(slideEvt + ':00');
});

var sliderDuracao = new Slider("#txtSliderDuracao");
sliderDuracao.on("click", function(event){
	alert(event);
});

sliderDuracao.on("slide", function(slideEvt) {
  //alert(slideEvt);
  //$("#txtDuracao")[0].value = slideEvt + ' horas';
  $("#spanDuracao").text(slideEvt + ' horas');
});

var dateMin = new Date();
var dateMax = new Date();
dateMax.setMonth(dateMin.getMonth() + 1);


$('#txtQuando').datepicker({	
	format: "dd/mm/yyyy",
    startDate: dateMin,
    endDate: dateMax,
    maxViewMode: 1,
    todayBtn: "linked",
    language: "pt-BR",
    forceParse: false,
    daysOfWeekHighlighted: "0",
    autoclose: true,
    todayHighlight: true
});

