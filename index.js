require('dotenv').config();
const Trello = require('node-trello');

const trello = new Trello(process.env.TRELLO_API_KEY,process.env.TRELLO_TOKEN);

function getAllBoards(){
    trello.get('/1/members/me/boards',(err,data)=>{
        if(err) throw err;
        console.log(data.map(d=>{return {id:d.id,'name':d.name}}));
    })
}

function getAllBoardsList(boardId){
    trello.get(`/1/boards/${boardId}/lists`,(err,lists)=>{
        if(err) throw err;
        lists.forEach(list=>{
            console.log(`List: ${list.name},ID:${list.id}`);
        })
    })
}
function createCard(listId,cardName,cardDescription){

    const card = trello.post('/1/cards/',{name:cardName,desc:cardDescription,idList:listId},(err,card)=>{
        if(err){
            console.error(err);
        }
        console.log(card);
    });
}
function moveCard(cardId,listId){
    trello.put(`/1/cards/${cardId}`,{idList:listId},(err,card)=>{
        if(err){
            console.error(err);
        }
        console.log(card);
    })
}


(async()=>{
    // getAllBoards();
    // getAllBoardsList('6554de9183bb242c89709e32');
    // createCard('6554de988001def25a72d3fc','Test','Card test description');
    moveCard('6554e35ec9f51a6eea36654b','6554dea128121119c0da8287');
    
})()