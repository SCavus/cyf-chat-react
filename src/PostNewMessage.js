import React from "react";


  return (
    <form onSubmit={props.newMessage}>
      Name
      <input
        placeholder="Your name"
        type="text"
        name="from"
        onChange={(event) => {
          props.setFrom(event.target.value);
        }}
      ></input>
      message
      <input
        placeholder="The message"
        type="text"
        name="text"
        onChange={(event) => {
          props.setText(event.target.value);
        }}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};
export default SendMessage;

// const PostNewMessage = (props) => {
//   const [newMessage, setNewMessage] = useState({});

//   fetch(`${props.url}/messages`, {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       from: newMessage.from,
//       text: newMessage.text,
//     }),
//   }).then(() => console.log("Message Send!"));

//   const handleFrom = (e) => {
// setNewMessage({from: e.target.value})
//   }

//   return (
//     <div>
//       <form action={`${props.url}/messages`} method="post">
//         <div>
//           <label for="from">Name: </label>
//           <input type="text" name="from" onChange={handleFrom} />
//         </div>
//         <div>
//           <label for="Message">Message: </label>
//           <input type="text" name="text" onChange={handleText} />{" "}
//         </div>
//         <button type="button" onClick={handleNewMessage}>
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

export default PostNewMessage;
