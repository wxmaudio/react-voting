import alt from './alt';

class CharacterAction{
	constructor(){
		this.generateActions(
			'reportSuccess',
	      	'reportFail',
	      	'getCharacterSuccess',
	      	'getCharacterFail'
		)
	}

	getCharacter(characterId){
		$.ajax({
			url:'/api/characters/'+characterId
		})
		.done((data)=>{
			this.actions.getCharacterSuccess(data);
		})
		.fail((jqXHR)=>{
			this.actions.getCharacterFail(jqXHR);
		})	
	}

	report(characterId){
		$.ajax({
			url:'/api/report',
			type:'POST',
			data:{characterId:characterId}
	    }).done(()=>{
	    	this.actions.reportSuccess();
	    }).fail((jqXHR)=>{
	    	this.action.reportFail(jqXHR);
	    })
	}
}

export default alt.createActions(CharacterAction);