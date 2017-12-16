console.log('Sanity Check: JS is working!')

$(document).ready(() => {
  console.log('DOM ready')
  loadBooks()
})

const loadBooks = () => {
  console.log('emptying .list-group')
  $('.list-group').html('')
  $.ajax({
    method: 'GET',
    url: '/api/books',
    success(data) {
      console.log('AJAX call successful.')
      console.log(data)
      // console.log(data[0])
      for (let i = 0; i < data.length; i++) {
        console.log(`appending ${data[i].title}`)
        $('.list-group').append(`
      <div class="book-row" id='${data[i].title}'>
        <li="button-row"><button type="button" class="edit-btn">Edit</button>
        <button type="button" class="delete-btn">Delete</button></li><br>
        <li class="pName">Title:   ${data[i].title}</li>
        <li class="pDex">Author:   ${data[i].author}</li>
        <li class="eFrom">Genre:   ${data[i].genre}</li>
      </div>`)
      }
    },

    error(jqXHR, textStatus, errorThrown) {
      // When AJAX call has failed
      console.log('AJAX call failed.')
      console.log(`${textStatus}: ${errorThrown}`)
    },
    complete() {
      console.log('AJAX call completed')
    },
  })
}
