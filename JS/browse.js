window.addEventListener('load', e => {
    const searchBar = document.querySelector('.search-bar');
    const test = document.querySelector('.test');
    
    searchBar.value = localStorage.getItem('userQuery');
});

export function storeQuery(query) {
    localStorage.setItem('userQuery', query);
}

// This page is dynamic, retrieves content based on user query

