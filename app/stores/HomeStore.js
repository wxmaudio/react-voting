import alt from '../alt';
import HomeActions from '../actions/HomeStore';
import toastr from 'toastr';

class HomeStore{
	constructor(){
		this.bindActions(HomeActions);
		this.characters = [];
	}

	onGetTwoCharactersSuccess(data){
		this.characters = data;
	}

	onGetTwoCharactersFail(errMessage){
		toastr.error(errMessage);
	}

	onVoteFail(errMessage){
		toastr.error(errMessage);
	}
}