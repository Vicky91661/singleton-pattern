interface Games {
    gameId : string;
    whitePlayer : string;
    blackPlayer : string;
    moves : string[];
}

export class GameManager {
    private static instance : GameManager;
    private games: Games[] = [];

    private constructor(){
    }

    public static getInstance():GameManager{

        if(!GameManager.instance)
            GameManager.instance = new GameManager();
        return GameManager.instance;
    }

    public addGame(game:Games){
        this.games.push(game);
    }

    public getGames(){
        return this.games;
    }
    
    public addMoves(gameId :string, move:string){
        const game = this.games.find(game => game.gameId===gameId)
        if(game){
            game.moves.push(move);
        }
    }

    public logState(){
        console.log(this.games);
    }
}