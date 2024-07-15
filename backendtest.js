const sheetName = 'Form Responses 1'; // Replace with your sheet name

const allTweets = document.querySelector('.all-tweets');


fetch(`https://sheets.googleapis.com/v4/spreadsheets/10xw3d7acLWthUx-St9Jz4fp6D2B3xa84-bp398peXao/values/${sheetName}?key=AIzaSyCPfKyzDlDGcgZg8sBbDvh6qSuiVuvLFM0`)
  .then(response => response.json())
  .then(data => {
    const tweetsData = data.values || []; // Handle cases where no data exists

    tweetsData.slice(1).forEach(tweet => {
      const username = tweet[1]; // Assuming Username is in the second column (index 1)
      const story = tweet[2]; // Assuming Story is in the third column (index 2)

      // Create a new tweet element
      const newTweet = document.createElement('div');
      newTweet.classList.add('tweet');

      // Create the "dp" section with username
      const dp = document.createElement('div');
      dp.classList.add('dp');
      const dpPic = document.createElement('image');
      dpPic.classList.add('dp-pic');
      dpPic.src = 'images/dp.jpg'; // Replace with default image path (optional)
      const usernameP = document.createElement('p');
      usernameP.textContent = `@${username}`;
      dp.appendChild(dpPic);
      dp.appendChild(usernameP);

      // Create the "post" section with story
      const post = document.createElement('div');
      post.classList.add('post');
      const storyP = document.createElement('p');
      storyP.textContent = story;
      post.appendChild(storyP);

      // Append "dp" and "post" sections to the new tweet
      newTweet.appendChild(dp);
      newTweet.appendChild(post);

      // Add the new tweet to the all-tweets container
      allTweets.appendChild(newTweet);
    });
  })
  .catch(error => console.error('Error:', error));

