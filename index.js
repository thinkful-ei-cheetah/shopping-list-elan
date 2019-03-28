'use strict';


function addItem() {
  $('form').submit(event => {
    event.preventDefault();
    let userInput = $('#shopping-list-entry').val();
    console.log(userInput);
    $('.shopping-list').append(`
    <li>
        <span class="shopping-item">${userInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `);
  });
}

function handleCheck () {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    console.log($(this).closest('li').find('span')); 
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

function handleDelete() {
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });
}

function handleClicks() {
  addItem();
  handleCheck();
  handleDelete();
}

$(handleClicks);