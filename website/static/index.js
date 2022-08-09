function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}

function updateNote(noteData, noteId) {
  console.log('update clicked')
    var noteData = noteData;
    console.log(noteData)
    console.log(noteId)
    const newNoteDataEle = document.getElementById('newNoteData');
    const noteIdEle = document.getElementById('noteId');
    newNoteDataEle.value = noteData;
    noteIdEle.value = noteId;
}

$("#saveChanges").click(function () {
    console.log('saveChanges clicked')
    var noteData = $("#newNoteData").val();
    var noteId = $("#noteId").val();
    console.log(noteData)
    console.log(noteId)
    fetch("/save-changes", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId , noteData: noteData}),
  }).then((_res) => {
    window.location.href = "/";
  });
  const element = document.getElementById('newNoteData');
  element.value = "";
});

function closeModal() {
    console.log('close modal clicked')
    const element = document.getElementById('newNoteData');
    element.value = "";
}


