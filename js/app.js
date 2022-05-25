document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  
  const readingListUL = document.querySelector("#reading-list");
  const readingListDiv = document.createElement("div");
  readingListDiv.classList.add('reading-list-div');
  readingListUL.appendChild(readingListDiv);

  const body = document.querySelector('body');
  const deleteAllButton = document.createElement('button');
  deleteAllButton.textContent = "Delete All";
  body.appendChild(deleteAllButton);
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const submitResults = document.createElement("ul");
    submitResults.classList.add('reading-list-ul');
    readingListDiv.appendChild(submitResults);
    
    const bookTitle = document.createElement("h2");
    bookTitle.textContent = event.target.title.value;
    bookTitle.classList.add("reading-list-title");
    submitResults.appendChild(bookTitle);
    
    const bookAuthor = document.createElement("h3");
    bookAuthor.textContent = event.target.author.value
    bookAuthor.classList.add("reading-list-author");
    submitResults.appendChild(bookAuthor);
    
    const bookCategory = document.createElement("p");
    bookCategory.textContent = event.target.category.value
    bookCategory.classList.add("reading-list-category");
    submitResults.appendChild(bookCategory);
    
    document.querySelector('#new-item-form').reset()
    
    const handleDeleteAll = (event)=>{
      console.log(event);
      readingListDiv.removeChild(submitResults);
      
    }
    
    deleteAllButton.addEventListener("click", handleDeleteAll);
  };

  const newForm = document.querySelector("#new-item-form");
  newForm.addEventListener("submit", handleFormSubmit);



  

  


  
});
 


// display items below on submit
// form fields reset to empty
// then format result into div