const noteInput = document.getElementById("note-input");

const addNoteBtn = document.getElementById("note_submit");

const notesDiv = document.getElementById("notes");

addNoteBtn.addEventListener("click", () => {
//Methode suivante pour nettoyer la chaîne en supprimant les epsaces blancs
  const noteText = noteInput.value.trim();
  if (noteText) {
    const noteElem = document.createElement("body");
    noteElem.classList.add("note");
    noteElem.innerHTML = `
      <body class="note-text">${noteText}</body>
      <button class="delete-note-btn">Supprimer</button>
    `;
    //On créé un bouton avec remove child afin de pouvoir supprimer la note enfant de la div note
    const deleteNoteBtn = noteElem.querySelector(".delete-note-btn");
    deleteNoteBtn.addEventListener("click", () => {
      notesDiv.removeChild(noteElem);
    });

    //Permet de pouvoir ajouter l'element dans les notes par une div
    notesDiv.appendChild(noteElem);
    noteInput.value = "";
  }
});
