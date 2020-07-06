import React from "react";

const Messages = (props) => {
  return (
    <div className="message-history">
      {props.messages.map((message) => (
        <div className='sent-message'key={message.id}>
          <div className="message-from"><p >{message.from}: </p></div>
          <div className="message-text"><span>{message.text}</span></div>
        </div>
      ))}
    </div>
  );
};

export default Messages;

// const [newMessage, setNewMessage] = useState({
//   "from": "",
//   "text": ""
// });

// const handleFrom = (e) => {
//   setNewMessage({ "from": e.target.value });
// };

// const handleText = (e) => {
//   setNewMessage({ "text": e.target.value });
// };

// const handleSubmit = (e) => {
//   e.preventDefault()
//   setMessages([...messages, newMessage])
// }

// return (
//   <div className="App">
//     <div>
//       <div>
//         {/* <label for="from">Name: </label> */}
//         <input type="text" name="from" onChange={handleFrom} />
//       </div>
//       <div>
//         {/* <label for="Message">Message: </label> */}
//         <input type="text" name="text" onChange={handleText} />{" "}
//       </div>
//       <button type="button" onClick={handleSubmit}>
//         Send
//       </button>
//     </div>
//     <ul>
//       {messages.map((message) => (
//         <li key={message.id}>{message.text}</li>
//       ))}
//     </ul>
//   </div>
// );
