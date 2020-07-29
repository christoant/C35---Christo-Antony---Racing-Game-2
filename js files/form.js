class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game!");
        title.position(625,100);
        var input = createInput("Name");
        input.position(600,175);
        var button = createButton("Play");
        button.position(775,175);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updatecount(playerCount);
            var greeting = createElement("h3");
            greeting.html("Hello, " + name);
            greeting.position(675,150);
        });
    }
}