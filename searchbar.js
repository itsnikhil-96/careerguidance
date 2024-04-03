document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('search-bar');
  const searchItems = document.getElementsByClassName('search-item');
  const noResultsMessage = document.getElementById('no-results-message');

  searchBar.addEventListener('keyup', () => {
    const searchString = searchBar.value.toLowerCase();

    for (let i = 0; i < searchItems.length; i++) {
      const item = searchItems[i];
      const link = item.querySelector('a');
      const itemText = link.textContent.toLowerCase();

      if (itemText.includes(searchString)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    }

    let foundResults = Array.from(searchItems).some(item => item.style.display !== 'none');
    
    if (foundResults) {
      noResultsMessage.style.display = 'none';
    } else {
      noResultsMessage.style.display = '';
    }
  });
});