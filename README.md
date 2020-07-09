#### Avant de commencer, récupérez votre token d'autorisation et sauvegardez le en lieu sûr. [Voir comment faire...](https://tutochain.com/recuperer-son-token-discord-manuellement/)
EDIT de Pierre: quand vous voyez la phrase "Pour finir, cliquez sur « applications » et passez à l’étape suivante.", ignorez cette phrase, elle n'a aucun putain de sens ici, faut cliquer sur une des requètes, aller dans la partie "request headers" et chercher la ligne "Authorization" 

#### Insérez l'ID du message à partir duquel vous souhaitez supprimer vos messages, à la place de "LAST_MESSAGE_ID. 
EDIT de Pierre: Pour obtenir l'id du message, cliquez sur "... (Plus)" -> "Copier le lien du message" -> coller quelque part -> récupérer le nombre après le dernier "/"

#### Insérez votre token dans [le code](https://github.com/pierreminiggio/delete-message-discord/blob/master/index.js) en remplaçant "YOUR TOKEN HIER" par votre token (laissez les guillemets)

EDIT de Pierre:
Ensuite, tu ouvre le fichier [index.js](https://github.com/pierreminiggio/delete-message-discord/blob/master/index.js) avec un editeur de texte (bloc note si tu n'as rien d'installé) -> Ctrl + A -> Ctrl + C -> retourne sur discord navigateur -> accède à la messagerie de la personne en question dont tu veux delete tes MP, clique droit -> console -> coller -> entrée
