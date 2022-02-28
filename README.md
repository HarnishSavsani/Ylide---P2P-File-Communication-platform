#Cross Chain Architecture
The P2P File Communication platform makes use of the Ylide SDK for messaging, giving the entire platform a flair of cross-chain capabilities and allowing for support across multiple ecosystems. The platform's architecture is extremely simple with its Ylide SDK Integration and so it also keeps the cost of using the platform on any chain extremely low (10 cents for a message). To read more about Ylide, please refer (https://docs.ylide.io/parts-of-the-ylide)[HERE]

#Platform Usage
The P2P File Communication Platform allows for the following functionalities:

Generating and Registering the Communication Keys: As Ylide SDK requires a KeyPair to work with message encryption and decryption, the platform takes care of exposing this functionality for the end users. First time users can generate and register their communication keys with Ylide and start sending secure communications.

Creating a private Room: The platform allows creating a private room with a set of recipient addresses by any user. This room can then be used to send unidirectional information from the creator to the list of recipient addresses defined during the room creation. Both the creation of the room and the sending messages to the room recipients is encrypted and secure in every way.

Seeing My Room list: The platform shows a list of private rooms that a user is part of, once the onboarding has been completed.

See Messages & Files of My Rooms: The platform shows a list of messages received in a room, given that the user is present in the room recipient list. The messages are decoded and decrypted using the user's communication keys, so the messages are only visible if the onboarded user is present in the room recipient list.

Send Messages & Files to a Room: [Admin only Action] Since the platform supports only unidirectional messaging, the creator of the room can send encrypyed/private messages to all recipients of the room, which are then decoded on the receiver's end.

Using IPFS with Infura for storing file on-chain.
