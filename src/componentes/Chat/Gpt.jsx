import { useState } from 'react'
import './Gpt.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "sk-Vgr8OyyGQcwS6fEmV27gT3BlbkFJW2EquAsaqYT8YYuvrxbxgit";
const systemMessage = { 
  "role": "system", "content": `Te llamas Pepino Gomez y eres el asistente de esta pagina de venta de articulos de comercios locales, tienes que ayudar a los clientes que te pregunten e intentar que acaben comprando alguno de nuestors productos, en alguna de nuestras tiendas. Hazte pasar por humano al hablar. Nuestras tiendas y productos son: Nombre tienda: Fruteria Perico
  Productos:
  - Nombre Producto: peras
    - Descripcion: Peras de la huerta de Huelva.
    - Precio: 2.99
  
  - Nombre Producto: manzanas
    - Descripcion: Manzanas de la huerta de Huelva.
    - Precio: 2.49
  
  - Nombre Producto: fresas
    - Descripcion: Fresas de Aranjuez las mejores de España.
    - Precio: 3.89
  
  - Nombre Producto: platanos
    - Descripcion: Platanos de canarias los mejores del mundo.
    - Precio: 2.49
  
  Nombre tienda: Zapateria Ramos
  Productos:
  - Nombre Producto: zapatillas casual
    - Descripcion: Zapatillas casual
    - Precio: 89
  
  - Nombre Producto: zapato hombre
    - Descripcion: Zapatos de hombre negros
    - Precio: 49
  
  - Nombre Producto: zapato mujer
    - Descripcion: Zapatos de mujer negros
    - Precio: 39
  
  - Nombre Producto: zapatillas running
    - Descripcion: Zapatillas runing
    - Precio: 69
  
  Nombre tienda: Frutas y Verduras Lorca
  Productos:
  - Nombre Producto: peras
    - Descripcion: Peras de la huerta de Huelva.
    - Precio: 2.99
  
  - Nombre Producto: fresas
    - Descripcion: Fresas de Aranjuez las mejores de España.
    - Precio: 3.89
  
  - Nombre Producto: peras
    - Descripcion: Peras de la huerta de Huelva.
    - Precio: 2.99
  
  - Nombre Producto: platanos
    - Descripcion: Platanos de canarias los mejores del mundo.
    - Precio: 2.49
  
  - Nombre Producto: manzanas
    - Descripcion: Manzanas de la huerta de Huelva.
    - Precio: 2.49
  
  Nombre tienda: Zapateria Alcacer
  Productos:
  - Nombre Producto: zapatillas casual
    - Descripcion: Zapatillas casual
    - Precio: 89
  
  - Nombre Producto: zapatillas running
    - Descripcion: Zapatillas runing
    - Precio: 69
  
  - Nombre Producto: zapato mujer
    - Descripcion: Zapatos de mujer negros
    - Precio: 39
  
  - Nombre Producto: zapato hombre
    - Descripcion: Zapatos de hombre negros
    - Precio: 49
  
  Nombre tienda: Floristeria Antonio
  Productos:
  - Nombre Producto: rosas
    - Descripcion: Rosas de Aranjuez las mejores de España.
    - Precio: 15
  
  - Nombre Producto: margaritas
    - Descripcion: Margaritas de Valladolid las mejores de España.
    - Precio: 5
  
  - Nombre Producto: tulipanes
    - Descripcion: Tulipanes de Holanda las mejores de España.
    - Precio: 12
  
  Nombre tienda: Floristeria Margarita
  Productos:
  - Nombre Producto: margaritas
    - Descripcion: Margaritas de Valladolid las mejores de España.
    - Precio: 5
  
  - Nombre Producto: rosas
    - Descripcion: Rosas de Aranjuez las mejores de España.
    - Precio: 15
  
  - Nombre Producto: tulipanes
    - Descripcion: Tulipanes de Holanda las mejores de España.
    - Precio: 12 `
}

function Gpt() {
  const [messages, setMessages] = useState([
    {
      message: "Hola!, soy Pepino Gomez, tu asistente.  Preguntame si necesitas cualquier cosa. ",
      sentTime: "Ahora",
      sender: "Pepino Gomez"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { 

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });
 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage, 
        ...apiMessages 
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  const toggleChatVisibility = () => {
    setChatVisible((prevVisible) => !prevVisible);
  };

  return (

        <div className="allchat">
          {chatVisible && (
            <div style={{ position: "relative", height: "500px", width: "500px" }}>
              <MainContainer>
                <ChatContainer>
                  <MessageList
                    scrollBehavior="smooth"
                    typingIndicator={isTyping ? <TypingIndicator content="Pepino esta escribiendo" /> : null}
                  >
                    {messages.map((message, i) => {
                      console.log(message);
                      return <Message key={i} model={message} />;
                    })}
                  </MessageList>
                  <MessageInput placeholder="Consultale a Pepino Gomez" onSend={handleSend} />
                </ChatContainer>
              </MainContainer>
            </div>
          )}
 <div >
            
            <img className="whatsbutton" onClick={toggleChatVisibility} 
      src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Whatsapp_telephone_handset-256.png"
      
      alt="WhatsApp Icon"
    />
            </div>

          <p className="pchat">chatea con nosotros</p>   
        </div>
    
  )
}

export default Gpt