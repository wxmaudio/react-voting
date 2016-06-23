import React from 'react';
import CharacterStore from '../stores/CharacterStore';
import CharacterActions from '../actions/CharacterActions';

class Character extends React.Component{
	constructor(props){
		super(props);
		this.state = CharacterStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		CharacterStore.listen(onChange);
		//将当前Character ID（从URL获取）传递给getCharacter action
		CharacterActions.getCharacter(this.props.params.id);

		$('.magnific-popup').magnificPopup({
		      type: 'image',
		      mainClass: 'mfp-zoom-in',
		      closeOnContentClick: true,
		      midClick: true,
		      zoom: {
		        enabled: true,
		        duration: 300
		      }
		  });
	}

	componentWillUnmout(){
		CharacterStore.unlisten(onChange);
		$(document.body).removeClass();
	}

	onChange(state){
		this.setState(state);
	}

	render(){

	}
}