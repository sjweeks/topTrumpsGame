class Card {
    constructor(name, src){
        this.name = name;
        this.src = src;
        this.container = document.getElementById("container");

        let card = this.constructCard()
        this.container.appendChild(card);
    }

    constructCard() {
        let card = this.createCard();
        let title = this.createTitle();
        let image = this.createImage();
        let attributes = this.createAttribute();

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(attributes);

        return card;
            
    }

    createCard() {
        let card = document.createElement('div');
        card.classList.add('card');

        return card;
    }

    createTitle(){
        let title = document.createElement('h1');
        let text = document.createTextNode(this.name); 

        title.appendChild(text);

        title.classList.add('title');

        return title;
    }

    createImage(){
        let image = document.createElement('img');
        image.classList.add('image');
        image.src = this.src;

        return image;
    }

    createAttribute(magic, courage, wisdom, banter){
        let container = document.createElement('div');
        container.classList.add('listContainer');

        // console.log(container);
        
        let list = document.createElement('ul');

        container.appendChild(list);

        // console.log(container);
        
        for (let i = 0; i < 5; i++) {
            let listItem = document.createElement('li');
            
            let attributeText = document.createTextNode('attribute');

            listItem.appendChild(attributeText);

            list.appendChild(listItem)
        }

        return container;
    }
}

let Card = new Card("Harry Potter", "https://www.gannett-cdn.com/presto/2019/02/11/USAT/6b2a177c-95a4-41c5-bd0d-1820292fc03e-3HarryPotter.jpg?width=1588")