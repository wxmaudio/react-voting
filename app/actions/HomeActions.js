import Alt from '../alt';

class HomeActions{
	constructor(){
		this.generateActions(
		      'getTwoCharactersSuccess',
		      'getTwoCharactersFail',
		      'voteFail'
		    );
	}

	getTwoCharacters(){
		$.ajax({
			url : '/api/characters'
		})
		.done(data =>{
			this.actions.getTwoCharactersSuccess(data);
		})
		.fail(jqXHR => {
			this.actions.getTwoCharactersFail(jqXHR.responseJSON.message);
		});
	}

	vote(winner,loser){
		$.ajax({
			type:'PUT',
			url:'/api/characters',
			data:{winner:winner,loser:loser}
		})
		.done(()=>{
			this.actions.getTwoCharacters();
		})
		.fail((jqXHR)=>{
			this.actions.voteFail(jqXHR.responseJSON.message);
		})
	}
}
export default alt.createActions(HomeActions);