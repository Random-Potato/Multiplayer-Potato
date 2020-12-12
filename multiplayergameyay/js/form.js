class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play");
        this.greeting = createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();    
    }
    display(){
        var title = createElement('h2');
        title.html("Vroom");
        title.position(130, 0);
        
        this.input.position(130, 60);
        this.button.position(255, 200);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            var name = this.input.value();

            playerCount ++;
            player.update(name);
            player.updateCount(playerCount);

            this.greeting.html("Welcome "  + name);
            this.greeting.position(130, 160);
        })
    }
}