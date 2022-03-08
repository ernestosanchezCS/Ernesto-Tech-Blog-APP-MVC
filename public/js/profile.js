const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#topic-name').value.trim();
  const longDescription = document.querySelector('#topic-desc').value.trim();
  const thumbnailUrl = document.querySelector('#img-thumb').value.trim();
  const authors = document.querySelector('#topic-author').value.trim();

  if (title && longDescription) {
    const response = await fetch(`/api/topics`, {
      method: 'POST',
      body: JSON.stringify({ title, longDescription, thumbnailUrl, authors }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create topic');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/topics/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete topic');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
