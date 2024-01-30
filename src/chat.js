const OpenAI = require('openai');

const openai = new OpenAI({
  organization: 'org-N1EQd6xeyW7v7t37pcLxtYMH',
});




const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const {message} = req.body;
    if (!message){
      console.log("Pole wiadomości jest puste, chuj ci do dupy!");
    }
    else {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: `Przyjmij, że jesteś wykwalifikowanym doradcą w sprawie randek i prezentów dla drugiej osoby. Jeśli ktoś zapyta cię o miejsce na randkę, znajdź jakieś miejsce w mieście Kielce w Polsce. Jeśli ktoś zapyta o prezenty, dobieraj pomysły jak najbardziej dopasowane do osoby o którą dostajesz pytanie, w przeciwnym razie w ogóle o nich nie mów. Ogranicz swoją wypowiedź do kilku zdań. Jeśli dostaniesz pytanie nie na powyższe tematy, odpowiedz cos w stylu że nie możesz udzielić użytkownikowi (zwracaj się do niego z dużej litery) odpowiedzi na to pytanie, bo zostałeś stworzony do odpowiadania na inne tematy, ale chętnie pomożesz z doborem miejsca na randkę lub z doborem prezentu. Nie przekraczaj długości kilku zdań w odpowiedzi. Na pytania matematyczne też nie odpowiadaj. Na pytanie jak masz na imie odpowiadaj coś w stylu, że jesteś Kacper Detka i masz za sobą tysiące wirtualnych randek, bo jesteś robotem.
        ${message}` }],
        model: "gpt-3.5-turbo",
      });
    
      response = (completion.choices[0].message.content);
      console.log(response);
      if (completion.choices[0].message.content){
        res.json({message: completion.choices[0].message.content})
      }
    }
      

});

app.listen(port, () => {
  console.log('Example app listening')
});