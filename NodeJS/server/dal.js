class Dal
{
	constructor(){
		this.episodes = new Map();
		//~ this.episodes.set(1, JSON.parse('{ "season" : 1, "title" : "Toto en vacances", "episode" : 1 }'));
	}

	getRandomId(){
		return Math.random().toString(36).substring(7);
	}

	getAll()
	{
		if(this.episodes.size == 0){
			return null;
		}

		return [...this.episodes];
	}

	add(episode){
		var id = this.getRandomId(); 
		episode.id = id;
		this.episodes.set(id, episode);
		
		return this.episodes.get(id);
	}

	getEpisodeById(id){
		if(this.episodes.has(id)){
			return this.episodes.get(id);
		}
		else{
			return null;		
		}		
	}
}

module.exports = Dal
