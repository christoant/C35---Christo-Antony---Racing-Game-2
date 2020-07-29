class Player{
    constructor(){

    }
    getcount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value", function(data){
            playerCount = data.val();
        })
    }
    updatecount(count){
        database.ref("/").update({
            playerCount:count
        });
    }
    update(name){
        var playerindex = "player" + playerCount;
        database.ref(playerindex).set({
            name:name
        });
    }
}