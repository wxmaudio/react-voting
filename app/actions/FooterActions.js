import alt from '../alt';

class FooterActions{
	constructor(){
		this.generateActions(
			'getTopCharactersSuccess',
      		'getTopCharactersFail'
			);
	}

	getTopCharacters(){
		$.ajax({url:'/api/characters/top',})
		.done((data)=>{
			this.action.getTopCharactersSuccess(data);
		})
		.fail((jqXHR)=>{
			this.action.getTopCharactersFail(jqXHR);
		});
	}
}

export default alt.createActions(FooterActions);