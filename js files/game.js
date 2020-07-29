class Game{
    constructor(){

    }
    getstate(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value", function(data){
            gameState = data.val();
        })
    }
    update(state){
        datebase.ref("/").update({
            gameState:state
        });
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getcount();
            form = new Form();
            form.display();
        }
    }
}