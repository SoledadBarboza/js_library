function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age) {
  return {name, age};
};

function saveReview(newReviews, arrayreviews) {
  if (!arrayreviews.includes(newReviews)) {
      arrayreviews.push(newReviews);
  }
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
};

function writeBook(title, mainCharacter, genre) {
  return {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }

};

function editBook(book) {
  book.pageCount = (book.pageCount / 4) * 3;
};



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
};